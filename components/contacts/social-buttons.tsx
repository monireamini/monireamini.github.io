import React from 'react';
import myPortfolio from "../../data/my-portfolio";

const SocialButtons = () => {
    return (
        <div className="inline-flex flex-col">
            <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Contact
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                    For any sort help / enquiry, shoot a{" "}
                    <a
                        href={`mailto:${myPortfolio.email}`}
                        className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                    >
                        mail
                    </a>{" "}
                    {`and I'll get back.`}
                </p>
            </div>
            <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Job Opportunities
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                    {`I'm looking for a job currently, If you see me as a good fit,`}
                    {" "}check my{" "}
                    <a
                        href={myPortfolio.resumeUrl}
                        target="__blank"
                        className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                    >
                        CV
                    </a>{" "}
                    {`and I'd love to work for you.`}
                </p>
            </div>

            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
            </h1>
            <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                    <a
                        href={myPortfolio.socialLinks.github}
                        className="flex flex-row items-center space-x-4 group"
                    >
                        <p className="my-4">&rarr;</p>
                        <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                            GitHub
                        </p>
                    </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                    <a
                        href={myPortfolio.socialLinks.linkedin}
                        className="flex flex-row items-center space-x-4 group"
                    >
                        <p className="my-4">&rarr;</p>
                        <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                            LinkedIn
                        </p>
                    </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                    <a
                        href={myPortfolio.socialLinks.instagram}
                        className="flex flex-row items-center space-x-4 group"
                    >
                        <p className="my-4">&rarr;</p>
                        <p
                            className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                            Instagram
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default SocialButtons;
