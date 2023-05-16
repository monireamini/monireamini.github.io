import React from 'react';
import {RoughNotationGroup} from "react-rough-notation";
import CustomRoughNotation from "../custom-rough-notation/custom-rough-notation";

const Intro = () => {
    const colors = ["#F59E0B", "#84CC16"];

    return (
        <div className="flex flex-col items-center overflow-hidden md:flex-row md:justify-center md:items-center">

            {/* Text container */}
            <div className="w-3/4 md:w-1/2 p-1 mx-auto md:mx-0 md:ml-10 text-center md:text-left lg:p-20">
                <RoughNotationGroup show={true}>
                    <CustomRoughNotation color={colors[0]} text={'Front-End Developer.'}/>
                    <CustomRoughNotation color={colors[1]} text={'MERN Stack Developer.'}/>
                </RoughNotationGroup>
            </div>

            {/* Image container */}
            <div className="relative w-full md:w-1/2 md:mx-4 mt-10 flex justify-center">
                <div className="w-2/4">
                    <img src={'/avatar.png'} alt="MonirehAmini" className="shadow" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
