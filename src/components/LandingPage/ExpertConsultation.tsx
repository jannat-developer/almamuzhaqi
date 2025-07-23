import Image from 'next/image';
import React from 'react';

export default function  ExpertConsultation ()  {
    return (
        <section className="max-w-[1440px] mx-auto bg-white py-20 px-4 md:px-8 ">
            <h2 className=" text-[2rem] md:text-[2.3rem] font-semibold text-accent mb-12">
                The Problem Most Founders Ignore<br />and the Smart Fix
            </h2>

            <div className=" bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-6">
                <div className='p-6 md:p-12'>
                    <h3 className="text-[1.7rem] md:text-[2rem] font-medium text-accent mb-4">
                        Problems Every Founder Faces Without a Proper Plan
                    </h3>
                    <p className="text-[1rem] md:text-[1.3rem]] text-[#475466] font-normal mb-6">
                        Behind every failed startup is a founder who moved forward without structure. Whether it&apos;s confusion,
                        wasted resources, or missed funding — operating without a solid plan costs more than time. If you&apos;re
                        building without a roadmap, you&apos;re flying blind.
                    </p>
                </div>

                <div className="bg-card flex items-center justify-center p-10 md:p-20 rounded-[20px]">
                   
                    <Image
                        src="/images/expert-img.jpg"
                        alt="My Image"
                        width={300}               
                        height={300}              
                        className="rounded-lg"    
                    />
                </div>
            </div>
        </section>
    );
};