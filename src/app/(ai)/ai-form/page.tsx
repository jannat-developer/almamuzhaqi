'use client';

import {
  StepFormProvider,
  useStepForm
} from '@/components/ai-powered-smart-form/StepFormContext';

import StepOne from '@/components/ai-powered-smart-form/StepOne';
import StepTwo from '@/components/ai-powered-smart-form/StepTwo';
import StepThree from '@/components/ai-powered-smart-form/StepThree';
import StepFour from '@/components/ai-powered-smart-form/StepFour';
import StepFive from '@/components/ai-powered-smart-form/StepFive';
import StepSix from '@/components/ai-powered-smart-form/StepSix';
import StepSeven from '@/components/ai-powered-smart-form/StepSeven';
import StepEight from '@/components/ai-powered-smart-form/StepEight';
import StepNine from '@/components/ai-powered-smart-form/StepNine';
import StepTen from '@/components/ai-powered-smart-form/StepTen';
import StepEleven from '@/components/ai-powered-smart-form/StepEleven';
import BillingForm from '@/components/ai-powered-smart-form/BillingForm';
import ProjectPlanPage from '@/components/ai-powered-smart-form/ProjectPlanPage';

const steps = [
  StepOne, StepTwo, StepThree, StepFour, StepFive,
  StepSix, StepSeven, StepEight, StepNine, StepTen,
  StepEleven, BillingForm, ProjectPlanPage,
];

const StepContent = () => {
  const { currentStep } = useStepForm();
  const StepComponent = steps[currentStep];
  return <StepComponent />;
};

const page = () => {
  return (
    <StepFormProvider>
      <StepContent />
    </StepFormProvider>
  );
};

export default page;
