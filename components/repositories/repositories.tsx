import React, {useEffect} from 'react';
import {apiRequest} from "../../helpers/api-request";
import SectionHeader from "../section-header/section-header";

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

    return (
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={'Latest code'} buttonLabel={'View GitHub'} linkPath={`https://github.com/monireamini`}/>

                <p>repos</p>
            </div>
        </div>
    )
};

export default Repositories;
