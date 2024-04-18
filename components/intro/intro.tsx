import React from 'react';
import {RoughNotationGroup} from "react-rough-notation";
import CustomRoughNotation from "../custom-rough-notation/custom-rough-notation";

const Intro = () => {
    const colors = ["#F59E0B", "#84CC16"];

    return (
        <div
            className="max-w-6xl mx-auto px-4 flex flex-col items-center overflow-hidden md:flex-row md:justify-center md:items-center">

            {/* Text container */}
            <div className="flex-1 py-1 mx-auto md:mx-0 text-center md:text-left lg:py-20">
                <p className="font-bold text-2xl mb-3 md:mb-4">React and React Native Developer</p>
                <p className="font-bold text-2xl">MERN Stack Developer</p>
                {/*<RoughNotationGroup show={false}>*/}
                {/*    <CustomRoughNotation color={colors[0]} text={'React and React Native Developer'}/>*/}
                {/*    <CustomRoughNotation color={colors[1]} text={'MERN Stack Developer'}/>*/}
                {/*</RoughNotationGroup>*/}
            </div>

            {/* Image container */}
            <div className="relative w-1/3 md:w-1/4 md:mx-4 flex justify-center">
                <div className="w-full">
                    <img src={'/avatar.png'} alt="MonirehAmini" className="shadow"/>
                </div>
            </div>
        </div>
    );
};

export default Intro;
