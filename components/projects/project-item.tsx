import React from 'react';

const ProjectItem = ({title, images}) => {
    return (
        <a
            // href="https://tailwindmasterkit.com"
            className="w-full block col-span-3 shadow-2xl p-2"
        >
            <div className="flex flex-col col-span-3 md:flex-row space-y-2 md:space-x-2">
                {images.map((image, index) => {
                    return (
                        <div className="w-full md:w-1/4 relative flex flex-grow overflow-hidden" key={image}>
                            <img
                                src={image}
                                alt={title}
                                className="transform hover:scale-125 transition duration-2000 ease-out rounded-md"
                            />
                            <h1 className="absolute top-2 left-2 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                                {title}
                            </h1>
                            <h1 className="absolute bottom-2 left-2 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                                {`0${index + 1}`}
                            </h1>
                        </div>
                    )
                })}
            </div>
        </a>
    )
};

export default ProjectItem;
