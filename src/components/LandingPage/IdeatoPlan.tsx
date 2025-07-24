'use client';

import Image from 'next/image';

const phases = [
    {
        phase: 'Phase 01',
        title: 'Answer AI Prompts',
        desc: 'Enter your idea, market and goals in AI powered strategy mapping.',
        img: '/images/phase1.png',
    },
    {
        phase: 'Phase 03',
        title: 'AI Craft Your Plan',
        desc: 'Our engine builds a structured plan with strategy, financials and execution roadmap',
        img: '/images/phase2.png',
    },
    {
        phase: 'Phase 03',
        title: 'Export, Present & Iterate',
        desc: 'Download your plan, consult with mentors or tweak in real time.',
        img: '/images/phase3.png',
    },
];

const IdeatoPlan = () => {
    return (

        <section className=" bg-white py-10 px-4 md:px-8 ">
            <h2 className="max-w-[1440px] mx-auto text-[2rem] md:text-[2.3rem] font-semibold text-accent mb-20">
                From Idea to Plan in <br />
                3 Simple Steps
            </h2>
            <div className="relative mb-16">
                <div className="absolute left-0 top-1/2 h-1 w-full bg-primary transform -translate-y-1/2"></div>
                <div className="max-w-[1440px] mx-auto flex justify-between relative z-10">
                    {phases.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center w-1/3">
                            <p className="text-[24px] text-accent font-medium -mt-10">{item.phase}</p>

                            <span className="bg-primary rounded-full p-3">
                                <Image
                                    src="/images/Vector.png"
                                    alt="Descriptive alt text"
                                    width={14}
                                    height={14}
                                    className="rounded-lg"
                                />
                            </span>

                        </div>
                    ))}
                </div> 
            </div>
           
            <div className="max-w-[1440px] mx-auto bg-white px-6 md:px-20">
                {/* Timeline line */}

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-36 text-center">
                    {phases.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-accent h-full">
                            <div className="flex flex-col flex-grow items-center">
                                <h3 className="text-[1.7rem] md:text-[2rem] font-medium mb-2 max-w-xs">{item.title}</h3>
                                <p className="text-[16px] md:text-[20px] font-normal max-w-xs">{item.desc}</p>
                            </div>

                            {/* Align all images at same level */}
                            <div className="mt-auto pt-10">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={150}
                                    height={150}
                                    className="mb-6"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>

    );
};

export default IdeatoPlan;