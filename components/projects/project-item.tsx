import React from 'react';

const ProjectItem = ({title, images}) => {
    return (
        <a className="w-full block col-span-5 shadow-2xl p-2">
            <div className="flex flex-col col-span-3 my-2 md:flex-row md:space-x-2">
                {images.map((image, index) => {
                    return (
                        <div className="w-full md:w-1/5 relative my-2 flex flex-grow overflow-hidden relative" key={image}>
                            <img
                                src={image}
                                alt={title}
                                className="w-full transform hover:scale-125 transition duration-2000 ease-out rounded-md"
                            />
                            <h1 className="absolute top-2 left-2 text-gray-50 font-bold lg:text-xl bg-red-500 rounded-md px-2">
                                {title}
                            </h1>
                            <h1 className="absolute bottom-2 left-2 text-gray-50 font-bold lg:text-xl bg-red-500 rounded-md px-2">
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
