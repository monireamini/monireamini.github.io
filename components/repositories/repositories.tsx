import React, {useEffect} from 'react';
import {apiRequest} from "../../helpers/api-request";

const Repositories = () => {

  async function handleFetchRepos() {
    const token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
    const username = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;

    const res = await apiRequest({
      url: `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      config: {headers: {Authorization: `token ${token}`}}
    })
    const repositories = res?.data?.items;
  }

  useEffect(() => {
    handleFetchRepos();
  }, []);

  return <p>repos</p>;
};

export default Repositories;
