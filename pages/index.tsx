import MainLayout from "../components/main-layout/main-layout";
import Intro from "../components/intro/intro";
import Projects from "../components/projects/projects";
import Repositories from "../components/repositories/repositories";

export default function Home() {
    return (
        <MainLayout>
            <Intro/>
            <Projects/>
            <Repositories/>
        </MainLayout>
    )
}
