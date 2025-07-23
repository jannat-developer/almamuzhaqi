'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type StepContextType = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
};

const StepFormContext = createContext<StepContextType | undefined>(undefined);

export const useStepForm = () => {
  const context = useContext(StepFormContext);
  if (!context) throw new Error('useStepForm must be used inside StepFormProvider');
  return context;
};

// Pass maxSteps here or calculate it dynamically
const TOTAL_STEPS = 13; // Update this if you add/remove steps

export const StepFormProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const goToStep = (step: number) =>
    setCurrentStep(Math.max(0, Math.min(step, TOTAL_STEPS - 1)));

  return (
    <StepFormContext.Provider value={{ currentStep, nextStep, prevStep, goToStep }}>
      {children}
    </StepFormContext.Provider>
  );
};
