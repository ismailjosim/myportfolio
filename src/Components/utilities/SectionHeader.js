import React from 'react';

const SectionHeader = ({ headTitle, subTitle }) => {
    return (
        <div className='pt-16 relative'>
            <h2 className="text-9xl text-slate-200 uppercase font-semibold text-center select-none">{headTitle}</h2>
            <div className="absolute top-28 flex text-4xl font-semibold left-[40%]">
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default SectionHeader;
