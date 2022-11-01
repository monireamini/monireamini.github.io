import React, {useEffect, useState} from 'react';
import {apiRequest} from "../../helpers/api-request";
import SectionHeader from "../section-header/section-header";
import RepoCell from "./repo-cell";

const Repositories = () => {
    const [repos, setRepos] = useState([]);

    async function handleFetchRepos() {
        const token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
        const username = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;

        const res = await apiRequest({
            url: `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
            config: {headers: {Authorization: `token ${token}`}}
        })
        const repositories = res?.data?.items;
        setRepos(repositories);
    }

    useEffect(() => {
        handleFetchRepos();
    }, []);

    return (
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={'Latest code'} buttonLabel={'View GitHub'}
                               linkPath={`https://github.com/monireamini`}/>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 gap-y-20">
                    {repos && repos.map((latestRepo, index) => {
                            return (
                                <RepoCell repo={latestRepo} key={index}/>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
};

export default Repositories;
