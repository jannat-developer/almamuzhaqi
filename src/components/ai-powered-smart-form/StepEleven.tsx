'use client';

import React from 'react';
import AiNavbar from './AiNavbar';
import Image from 'next/image';
import { useStepForm } from './StepFormContext';

const plans = [
  {
    title: 'Starter Launch Plan',
    price: 70,
    unit: 'Month',
    description: 'For lean start-ups, solo founders, or validating your idea quickly.',
    features: [
      "Executive Summary",
      "Product/Service Description",
      "Basic Market Research & Competitor Overview ",
      "Income Statement (Light Forecast)",
      "Basic Operational Plan (staff, logistics, key suppliers)",
      "Funding Options Summary (AI-sourced grants, loans, etc.)",
    ],
    buttonText: 'Subscribe',
  },
  {
    title: 'Pro Builder Plan',
    price: 150,
    unit: 'Month',
    description: 'Built for investor-grade presentations, scaling, or formal funding needs.',
    features: [
      "In-Depth Market Research ",
      "Full SWOT Analysis & Competitor Analysis",
      "Full Financial Projections",
      "Detailed Operational Plan",
      "Go-to-Market Strategy & CA Plan",
      "Visual Data Representation",
      "Risk Assessment & Mitigation Plan",
      "Implementation Timeline & Milestones",
    ],
    buttonText: 'Subscribe',
  },
];

const StepEleven = () => {
  const { nextStep, prevStep } = useStepForm();

  const backButton = (
    <button onClick={prevStep} className="border px-16 py-2 rounded-lg text-black font-medium">
      Back
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <AiNavbar />

      <main className="max-w-[1440px] mx-auto text-center px-6 py-5 gap-24">
        <h3 className="text-accent text-[2rem] font-medium max-w-lg mx-auto mt-3">
          Claim Your Complete Plan <br />
          One Simple Purchase
        </h3>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-full py-10 bg-white shadow-md rounded-xl px-12 space-y-4"
            >
              <p className="text-[24px] font-medium text-center">{plan.title}</p>

              <p className="text-start text-accent text-[3rem] font-regular">
                €{plan.price}/ <span className="text-[24px] font-medium text-[#475466]">{plan.unit}</span>
              </p>

              <p className="text-[#475466] text-start whitespace-pre-line">{plan.description}</p>

              <ul className="bg-white p-6 md:p-12 rounded-xl text-sm space-y-2 text-indigo-900 font-medium">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 mb-4">
                    <span className="bg-primary rounded-full p-2">
                      <Image
                        src="/images/Vector.png"
                        alt="Checkmark"
                        width={16}
                        height={16}
                        className="rounded-lg"
                      />
                    </span>
                    <span className="text-[1rem] md:text-[1.3rem] font-medium text-start text-accent">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={nextStep}
                className="w-full bg-primary text-black font-semibold py-2 rounded-md transition mt-4 cursor-pointer"
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StepEleven;
