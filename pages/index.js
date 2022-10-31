import {apiRequest} from "../helpers/api-request";
import ContainerBlock from "../components/container-block";

export default function Home() {
    return (
        <ContainerBlock>
            <p>Hi</p>
        </ContainerBlock>
    )
}

export const getServerSideProps = async () => {
    const token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
    const username = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;

    const res = await apiRequest({
        url: `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        config: {headers: {Authorization: `token ${token}`}}
    })
    const repositories = res?.data?.items;

    return {
        props: {
            repositories,
        },
    };
};
