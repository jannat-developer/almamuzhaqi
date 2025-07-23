'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const consultants = [
    {
        name: 'Sansa Stark',
        experience: '7+',
        title: 'Senior Consultant/BGA Firm',
        image: '/images/expert1.png',
        email: 'sansastarkinfo@gmail.com',
        points: [
            '7+ years of experience',
            'Guided over 50+ businesses',
            'Client-Centric Mindset',
        ],
    },
    {
        name: 'Huge Jackman',
        experience: '10+',
        title: 'Senior Consultant/Gen Con',
        image: '/images/expert2.png',
        email: 'hugejackinfo@gmail.com',
        points: [
            '10+ years of experience',
            'Guided over 50+ businesses',
            'Client-Centric Mindset',
        ],
    },
    {
        name: 'Harry Potter',
        experience: '8+',
        title: 'Senior Consultant/BGA Firm',
        image: '/images/expert3.png',
        email: 'sansastarkinfo@gmail.com',
        points: [
            '8+ years of experience',
            'Guided over 50+ businesses',
            'Client-Centric Mindset',
        ],
    },
];

export default function SuggestedExpert() {
    return (
        <div className="min-h-screen ">
            <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between py-6 px-6">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            className="rounded-lg"
                        />
                        <h3 className="text-black font-medium text-2xl">Business AI Plan</h3>
                    </div>
                </Link>

                <Link href="/my-plan">
                    <button className="border px-6 md:px-16 py-2 rounded-lg text-black font-medium">
                        Back
                    </button>
                </Link>


            </div>

            <div className='max-w-[1440px] mx-auto w-full border-t border-t-[#99A6B8] px-6'>
                <h2 className="text-[24px] my-10 font-medium text-gray-800">
                    Suggested Experts for InnovateX Business Consultation
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {consultants.map((consultant, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow border overflow-hidden flex flex-col"
                        >
                            <div className="relative h-[330px] w-full">
                                <Image
                                    src={consultant.image}
                                    alt={consultant.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute top-5 right-5 text-accent px-2 py-1 rounded text-[2rem] font-medium text-center">
                                    {consultant.experience} <br /> <span className='text-[24px]'>Years</span>
                                </div>

                                <div className='absolute bottom-4 left-4'>
                                    <h3 className="text-[24px] font-medium text-white">
                                        {consultant.name}
                                    </h3>
                                    <p className="text-[1rem] text-white font-medium">
                                        {consultant.title}
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col gap-2">

                                <p className='text-[20px] font-normal'>About</p>
                                <div className="text-[16px] font-normal mt-2">
                                    <p className="mb-3">
                                        Sansa Stark is a results-driven business consultant helping
                                        start-ups and SMEs craft strong business strategies, growth
                                        models.
                                    </p>
                                    <ul className="space-y-4">
                                        {consultant.points.map((point, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FaCheckCircle className="text-primary" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='flex items-center gap-3 mt-4'>
                                    <button className=" w-fit bg-primary rounded-lg py-1 px-4 text-accent hover:bg-sky-200">
                                        Email
                                    </button>
                                    <p><a href={`mailto:${consultant.email}`} className="text-[16px] font-medium underline">
                                        {consultant.email}
                                    </a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}
