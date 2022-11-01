import React from 'react';
import Contacts from "../contacts/contacts";

const Footer = () => {
    return (
        <div className='bg-[#F1F1F1] dark:bg-gray-900'>
            <div className='max-w-6xl mx-auto px-4 py-10 md:py-10'>
                {/* footer horizontal line separator */}
                <div className="h-0.5 w-full bg-white dark:bg-gray-700"/>

                {/* footer content */}
                <div className="flex flex-row space-y-4 md:space-y-0 justify-center md:items-center mt-8">
                    <div>
                        <div>
                            &copy;
                            <div
                                className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-100">
                                <a
                                    className="hover:bg-green-500 rounded-md px-1 py-1  hover:text-gray-50"
                                    href="https://monireamini.github.io"
                                >
                                    Monireh.
                                </a>
                            </div>
                             All Rights Reserved.
                        </div>
                    </div>
                    {/*<div className="space-x-4 flex flex-row items-center">*/}
                    {/*    <Contacts/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
};

export default Footer;
