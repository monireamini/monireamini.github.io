import React from 'react';
import {RoughNotation} from "react-rough-notation";

const CustomRoughNotation = ({color, text}) => {

    // Change the animation duration depending on length of text we're animating
    const animationDuration = Math.floor(100 * text.length);

    return (
        <RoughNotation
            type="underline"
            iterations={5}
            animationDuration={animationDuration}
            color={color}
            strokeWidth={0.5}
        >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 my-4">
                {text}
            </h1>
        </RoughNotation>
    );
};

export default CustomRoughNotation;
