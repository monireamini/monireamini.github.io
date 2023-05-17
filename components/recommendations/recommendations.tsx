import React from 'react';
import recommendations from "../../data/recommendations";
import SectionHeader from "../section-header/section-header";

const Projects = () => {
    return (
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={'Recommendations'} buttonLabel={'View all'} linkPath={'/projects'}/>


                {/*{recommendations.map((item) => {*/}
                {/*    return (*/}
                {/*        <div key={item.id}>{item.text}</div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        </div>
    )
};

export default Projects;
