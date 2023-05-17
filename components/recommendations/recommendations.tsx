import React from 'react';
import recommendations from "../../data/recommendations";
import SectionHeader from "../section-header/section-header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {noop} from "../../helpers/utils";

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

                <Carousel
                    autoPlay
                    infiniteLoop
                    showArrows={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}
                >
                    {recommendations.map((item) => {
                        return (
                            <div key={item.id}>
                                <p className="text-left font-bold text-xl">{item.name}</p>
                                <p className="text-left pb-2 text-xs text-slate-400">{item.role}</p>
                                <p className="text-justify">{item.text}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
};

export default Projects;
