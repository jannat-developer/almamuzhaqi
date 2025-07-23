'use client';

import React, { useState } from 'react';
import AiNavbar from './AiNavbar';
import { useStepForm } from './StepFormContext';
import { pre } from 'framer-motion/client';

const StepThree = () => {
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
            <main className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center px-6 pt-40 gap-24">
                {/* Left side */}
                <div className="">
                    <p className="text-[1rem] font-medium text-[#475466] mb-4 text-center">Step 3 out of 09</p>
                    <h1 className="text-2xl md:text-[2rem] font-medium text-accent text-center">
                        Your Business Goals & Vision
                    </h1>
                </div>

                {/* Right side */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 space-y-4 "
                >
                    <div>
                        <label className="block text-[1rem] font-medium text-accent mb-2">
                            What is your business aiming to achieve?
                        </label>
                        <input
                            name="businessName"
                            value={form.businessName}
                            onChange={handleChange}
                            className="w-full rounded-md px-4 py-2 text-[1rem] bg-[#F7F7F7] focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[1rem] font-medium text-accent mb-2">
                            What’s your long-term vision?
                        </label>
                        <input
                            name="stage"
                            value={form.stage}
                            onChange={handleChange}
                            className="w-full bg-[#F7F7F7] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[1rem] font-medium text-accent mb-2">
                            How would you describe your mission in one line?
                        </label>
                        <input
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            className="w-full bg-[#F7F7F7] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>






                    <div className='flex items-center justify-between gap-4'>
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
                            Proceed
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default StepThree;
