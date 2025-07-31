'use client';

import React, { useState } from 'react';
import AiNavbar from './AiNavbar';
import { useStepForm } from './StepFormContext';

const StepTen = () => {
    const { nextStep, prevStep } = useStepForm();

    const [form, setForm] = useState({
        businessName: '',
        stage: '',
        employees: '',
        location: '',
        website: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted', form);
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] ">
            <AiNavbar />

            {/* Main Content */}
            <main className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-8 md:py-32 gap-8 md:gap-24 ">


                {/* Right side */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-4xl py-20 bg-white rounded-xl p-6 space-y-4 " style={{ boxShadow: '0 4px 6px 1px #00CCFF26' }}
                >
                    

                    <div className='flex max-w-lg mx-auto items-center justify-between gap-4'>
                        <button
                            type="submit"
                            onClick={prevStep}
                            className="w-full border border-[#99A6B8] text-accent font-semibold py-2 rounded-md transition mt-4 cursor-pointer"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            onClick={nextStep}
                            className="w-full bg-primary text-accent font-semibold py-2 rounded-md transition mt-4 cursor-pointer"
                        >
                            Generate Plan
                        </button>
                    </div>
                    <p className='text-center text-[#475466] text-lg font-medium mt-6'>
                        Note: Please review all your inputs carefully. After clicking “Generate Plan,” changes will be <br />
                        no longer be possible.
                    </p>
                </form>
            </main>
        </div>
    );
};

export default StepTen;
