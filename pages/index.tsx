import {apiRequest} from "../helpers/api-request";
import MainLayout from "../components/main-layout/main-layout";
import {useEffect} from "react";
import Intro from "../components/intro/intro";

export default function Home() {

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
        <MainLayout>
            <Intro/>
        </MainLayout>
    )
}
