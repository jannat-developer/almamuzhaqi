'use client';

import React from 'react';
import Image from 'next/image';
import { LuMoveUpRight } from 'react-icons/lu';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center text-start px-6  overflow-hidden">
            {/* 🔷 Mirrored Background Image */}
            {/* <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="scale-x-[-1]"
                />
            </div> */}

            {/* 🔷 Foreground Content Container */}
            <div className="absolute top-20  right-0 w-[30%] h-[65%] bg-card rounded-bl-[74px]  -z-10" >
                
            </div>
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-20 md:mt-0">
                    <div>
                        <div className='flex items-center gap-2 mb-6 border border-primary rounded-[50px] p-2 w-fit'>
                            <div className='bg-primary w-fit p-2 rounded-full flex items-center justify-center'>
                                <Image
                                    src="/images/Vector.png"
                                    alt="Descriptive alt text"
                                    width={12}
                                    height={12}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className='flex items-center'>
                                <p className="text-[0.9rem] md:text-[1rem] text-accent font-medium">Faster Payment Gateways</p>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-medium text-accent leading-tight">
                            Unlock Your <span className="text-[#015BE9]">Vision. <br /> Launch </span>
                            with Confidence
                        </h1>
                        <p className="text-[#475466] text-[16px] md:text-[20px] font-medium mt-4 max-w-xl">
                            Our AI transforms your passion into a powerful business plan. Fast. Zero stress. All strategy.
                        </p>

                        <Link href="/ai-form">
                            <button className="flex items-center gap-2 mt-6 px-6 py-3 cursor-pointer bg-primary text-accent text-[1rem] md:text-[1.3rem] font-medium rounded-[10px] shadow-lg">
                                Build Your Plan now <LuMoveUpRight className='text-accent text-2xl bg-white p-1 rounded-full' />
                            </button>
                        </Link>
                    </div>

                    <div className='relative w-fit'>

                       
                        <div />
                        <Image
                            src="/images/hero-img.jpg"
                            alt="Descriptive alt text"
                            width={600}
                            height={600}
                            className="rounded-bl-[70px] rounded-tr-[70px]"
                        />
                    </div>

                    
                </div>
            </div>
        </section>
    );
};


