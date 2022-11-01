import React from 'react';
import Contacts from "../contacts/contacts";

const Footer = () => {
    return (
        <div className='bg-[#F1F1F1] dark:bg-gray-900'>
            <div className='max-w-6xl mx-auto px-4 py-10 md:py-20'>
                {/* footer horizontal line separator */}
                <div className="h-0.5 w-full bg-white dark:bg-gray-700"/>

                {/* footer content */}
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
                    <div>
                        <p>&copy; Monireh. All Rights Reserved.</p>
                    </div>
                    <div>
                        <div>
                            Developed by
                            <div
                                className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-100">
                                <a
                                    className="hover:bg-green-500 rounded-md px-2 py-1  hover:text-gray-50"
                                    href="https://monireamini.github.io"
                                >
                                    Monireh Amini
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <Contacts/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
