'use client';

import React, { useState } from 'react';
import AiNavbar from './AiNavbar';
import { useStepForm } from './StepFormContext';

const StepTwo = () => {
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
    nextStep(); // 👈 moves to next step
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] ">
      <AiNavbar />

      <main className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center px-6 pt-40 gap-24" >
        <div className="">
          <p className="text-[1rem] font-medium text-[#475466] mb-4 text-center">Step 2 out of 09</p>
          <h1 className="text-2xl md:text-[2rem] font-medium text-accent text-center">
            What’s your main <br />
            objective with this plan
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white  rounded-xl p-6 space-y-4 "  style={{ boxShadow: '0 4px 6px 1px #00CCFF26' }}
        >
          <div>
            <label className="block text-[1rem] font-medium text-accent mb-2">
              What stage is your business currently in? <span className="">(required)</span>:
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
              What are you offering – a product or a service?<span className="">(required)</span>:
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
              How do you deliver your product or service? <span className="">(required)</span>:
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full bg-[#F7F7F7] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-[1rem] font-medium text-accent mb-2">
              What will this business plan help you achieve? :
            </label>
            <input
              name="employees"
              value={form.employees}
              onChange={handleChange}
              className="w-full bg-[#F7F7F7] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <button
              type="button"
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

export default StepTwo;
