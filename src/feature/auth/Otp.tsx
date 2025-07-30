/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  useResendCodeMutation,
  useVerifyEmailMutation,
  useVerifyResetPasswordOtpMutation,
} from "@/redux/api/auth/authApi";
import { toast } from "sonner";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";

interface OtpFormValues {
  otp: string[]; // 6-digit OTP
}

export default function OtpVerification() {
  const { register, handleSubmit, setValue } =
    useForm<OtpFormValues>({
      defaultValues: {
        otp: ["", "", "", "", "", ""],
      },
    });

  const router = useRouter();
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [verifyResetPasswordOtp] = useVerifyResetPasswordOtpMutation();
  const [resendCode] = useResendCodeMutation();

  // Resend OTP Timer - Initialize from localStorage or default to 300 seconds
  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTime = localStorage.getItem("otpTimer");
      return savedTime ? parseInt(savedTime) : 300;
    }
    return 300;
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        const newTime = timeLeft - 1;
        setTimeLeft(newTime);
        localStorage.setItem("otpTimer", newTime.toString());
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      localStorage.removeItem("otpTimer");
    }
  }, [timeLeft]);

  // Convert timeLeft to MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Resend OTP handler
  const handleResendOTP = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found. Please try registration again.");
      return;
    }
    localStorage.setItem("otpTimer", "300"); // Reset timer in localStorage
    setTimeLeft(300); // Reset timer in state
    console.log("Resending OTP...");
    resendCode({ userId });
  };

  // Focus the first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const onSubmit = async (data: OtpFormValues) => {
    const userId = localStorage.getItem("userId");
    const isForgotPassword = localStorage.getItem("forgotPassword") === "true";
    
    if (!userId) {
      toast.error("User ID not found. Please try again.");
      return;
    }
    
    const otpValue = data.otp.join("");
    console.log("OTP submitted:", otpValue);
    console.log("Is forgot password flow:", isForgotPassword);
    
    try {
      let response;
      
      if (isForgotPassword) {
        // Forgot password OTP verification
        response = await verifyResetPasswordOtp({ 
          userId, 
          otpCode: otpValue
        }).unwrap();
        console.log("Forgot password OTP response:", response);
      } else {
        // Registration OTP verification
        response = await verifyEmail({ 
          userId, 
          otpCode: otpValue
        }).unwrap();
        console.log("Registration OTP response:", response);
      }
      
      if (response?.success) {
        // Store the access token if provided
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
        }
        
        toast.success("Verification successful!");
        localStorage.removeItem("otpTimer"); // Clear timer on success
        
        // Clear localStorage
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        localStorage.removeItem("forgotPassword");
        
        if (isForgotPassword) {
          // Redirect to reset password page
          router.push("/reset-password");
        } else {
          // Redirect to login page after registration verification
          router.push("/signIn");
        }
      }
    } catch (error: any) {
      console.log("Error object:", error);
      console.log("Error data:", error?.data);
      console.log("Error message:", error?.data?.message);
      
      // Check if it's actually a success response with 308 status
      if (error?.status === 308 && error?.data?.success === true) {
        console.log("308 Success detected, handling as success");
        
        // Store the access token if provided
        if (error.data.data?.accessToken) {
          localStorage.setItem("token", error.data.data.accessToken);
        }
        
        toast.success("Verification successful!");
        localStorage.removeItem("otpTimer"); // Clear timer on success
        
        // Clear localStorage
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        localStorage.removeItem("forgotPassword");
        
        if (isForgotPassword) {
          // Redirect to reset password page
          router.push("/reset-password");
        } else {
          // Redirect to login page after registration verification
          router.push("/signIn");
        }
      } else {
        toast.error(
          error?.data?.message || "Verification failed. Please try again."
        );
      }
    }
  };

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.length > 1) return;
    setValue(`otp.${index}`, value);

    if (value !== "" && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !inputRefs.current[index]?.value
    ) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    if (/^\d{6}$/.test(pastedData)) {
      pastedData.split("").forEach((digit, index) => {
        setValue(`otp.${index}`, digit);
      });
      setActiveInput(5);
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4 flex flex-col items-center">
          {/* <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-500">
            <LuCheck className="h-20 w-20 text-white" />
          </div> */}
          <h1 className="text-2xl font-semibold text-accent">Enter 6-Digit verification code</h1>
          <p className="text-sm text-gray-600">
            Enter the 6-digit verification code sent to your email. <br />
            This code will expired in
          </p>

          {/* Resend OTP Section */}
          <div className="text-center">
            {timeLeft > 0 ? (
              <p className="text-sm text-gray-600">
                {" "}
                <span className="font-medium text-[#FF9436]">
                  {formatTime(timeLeft)}
                </span>
              </p>
            ) : (
              <button
                onClick={handleResendOTP}
                className="text-sm text-primary hover:underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className={`h-14 w-14 rounded-md border border-gray-300 text-center text-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${activeInput === index
                  ? "border-primary ring-1 ring-primary"
                  : ""
                  }`}
                {...register(`otp.${index}`, {
                  required: true,
                  pattern: /^[0-9]$/,
                })}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                autoComplete="off"
              />
            ))}
          </div>


          <PrimaryButton type="submit" loading={isLoading} text="Verify OTP" />
          
          {/* Fetch OTP from email - remove in production */}
          <button
            type="button"
            onClick={async () => {
              const userId = localStorage.getItem("userId");
              if (userId) {
                try {
                  const response = await resendCode({ userId }).unwrap();
                  if (response?.success) {
                    toast.success("New OTP sent to email!");
                  }
                } catch (error: any) {
                  toast.error(error?.data?.message || "Failed to send OTP");
                }
              }
            }}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded text-xs"
          >
            Send New OTP to Email
          </button>
        </form>


      </div>
    </div>
  );
}
