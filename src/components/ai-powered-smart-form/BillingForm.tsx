'use client';

import React from 'react';
import AiNavbar from './AiNavbar';
import { useStepForm } from './StepFormContext';

const Label = ({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) => (
    <label htmlFor={htmlFor} className="text-lg text-accent font-normal mb-1 block">
        {children}
    </label>
);

const BillingForm = () => {
    const { nextStep, prevStep } = useStepForm();

    const backButton = (
        <button onClick={prevStep} className="border px-16 py-2 rounded-lg text-accent font-medium transition">
            Back
        </button>
    );

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <AiNavbar rightButtons={backButton} />

            <main className="max-w-[1440px] mx-auto px-6 pt-10 pb-20">
                <h2 className="text-[2.3rem] font-medium text-accent mb-6">Billing Information</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


                    {/* Billing Info */}
                    <div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label>First Name</Label>
                                <input type="text" className="input w-full" placeholder="Paolo" />
                            </div>
                            <div>
                                <Label>Last Name</Label>
                                <input type="text" className="input w-full" placeholder="Maldini" />
                            </div>
                            <div>
                                <Label>Phone</Label>
                                <input type="text" className="input w-full" placeholder="+391026476" />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <input type="email" className="input w-full" placeholder="paolomaldini003@gmail.com" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <Label>Country/Region</Label>
                            <input type="text" className="input w-full" placeholder="Itali" />
                        </div>

                        <div className="mt-4">
                            <Label>Address</Label>
                            <input type="text" className="input w-full" placeholder="Roma, Italia" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                                <Label>City</Label>
                                <input type="text" className="input w-full" placeholder="3891 Ranchview" />
                            </div>
                            <div>
                                <Label>State</Label>
                                <input type="text" className="input w-full" placeholder="Ranchview" />
                            </div>
                            <div>
                                <Label>Zip Code</Label>
                                <input type="text" className="input w-full" placeholder="Ranchview" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <Label>Additional Information</Label>
                            <textarea
                                rows={5}
                                className="input w-full resize-none"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                            />
                        </div>

                        <p className="text-sm text-accent mt-2">
                            Your billing information is securely stored and encrypted.
                        </p>
                    </div>

                    {/* Payment Method */}
                    <div>
                        <h2 className="text-[2rem] font-semibold text-accent mb-6">Payment Method</h2>

                        <div className="space-y-4">
                            <div>
                                <Label>Card Number</Label>
                                <input type="text" className="input w-full" placeholder="4242 5859 5684 2585" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>MM/YY</Label>
                                    <input type="text" className="input w-full" />
                                </div>
                                <div>
                                    <Label>CVC</Label>
                                    <input type="text" className="input w-full" />
                                </div>
                            </div>

                            <div>
                                <Label>Name On Card</Label>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="3891 Ranchview Dr. Richardson, California 62639"
                                />
                            </div>

                            <div>
                                <Label>Country</Label>
                                <select className="input w-full">
                                    <option>United State</option>
                                    <option>Italy</option>
                                    <option>Germany</option>
                                </select>
                            </div>

                            <div>
                                <Label>Zip Code</Label>
                                <input type="text" className="input w-full" placeholder="10001" />
                            </div>

                            <button onClick={nextStep} className="w-full bg-primary text-accent font-medium py-3 rounded-md transition mt-2">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BillingForm;
