import React from 'react';
import SectionHeader from "../section-header/section-header";

const GithubStats = () => {
    return (
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title={'Contributions'}
                    buttonLabel={'View GitHub'}
                    linkPath={`https://github.com/monireamini`}
                />

                <img src={'/github/contributions.png'} className='px-10'/>
            </div>
        </div>
    )
};

export default GithubStats;
