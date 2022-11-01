import MainLayout from "../components/main-layout/main-layout";
import Intro from "../components/intro/intro";
import Projects from "../components/projects/projects";
// import Repositories from "../components/repositories/repositories";
import GithubStats from "../components/github-stats/github-stats";

export default function Home() {
    return (
        <MainLayout>
            <Intro/>
            <Projects/>
            {/*<Repositories/>*/}
            <GithubStats />
        </MainLayout>
    )
}
