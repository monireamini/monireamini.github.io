import React from "react";
import myPortfolio from "../../data/my-portfolio";
import SocialButtons from "../contacts/social-buttons";

export default function AboutMe() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    About Me.
                </h1>
            </div>

            <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
                        style={{lineHeight: "3rem"}}
                    >
                        {myPortfolio.about.title}
                    </p>
                </div>
            </div>

            <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    <SocialButtons/>

                    {/* Text area */}
                    <div className="col-span-1 md:col-span-2">
                        {myPortfolio.about.description?.map((desc, idx) => (
                            <p
                                key={idx}
                                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                            >
                                {desc}
                            </p>
                        ))}

                        <h1 className="bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                            Tech Stack
                        </h1>
                        <div className="flex flex-row flex-wrap mt-8">
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/nextjs.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/html.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/css.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/sass.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/redux.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/tailwind.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="/tech-stack/jira.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
