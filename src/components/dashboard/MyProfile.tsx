'use client';

import Image from "next/image";
import { FiUpload } from "react-icons/fi";

const Label = ({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="text-lg text-accent font-normal mb-1 block">
    {children}
  </label>
);

export default function MyProfile() {
  return (
    <div>
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b-2 border-b-[#99A6B8] gap-4">
        <div>
          <h1 className="text-[24px] mb-2 font-medium">Personal Info</h1>
          <p className="text-[1rem] font-regular text-info">Upload your photo and personal info here</p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-accent rounded-lg border border-accent shadow w-full md:w-auto">
            Cancel
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-accent rounded-lg shadow w-full md:w-auto">
            Save Changes
          </button>
        </div>
      </div>

      <section>
        {/* Upload Photo Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-b-[#99a6b888]">
          <div>
            <h2 className="font-normal mb-2 text-[20px]">Your Photo</h2>
            <p className="text-[1rem] font-regular text-info">This photo will be displayed on your profile</p>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#CCF5FF] text-accent rounded-[10px] shadow">
              <FiUpload size={18} className="text-accent" />
              Upload Photo
            </button>

            <div className="w-40 h-40 overflow-hidden rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="User"
                width={160}
                height={160}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Name Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-b-[#99a6b888]">
          <h2 className="font-normal mb-2 text-[20px]">Name</h2>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-[600px]">
            <div className="flex-1">
              <Label>First Name</Label>
              <input type="text" className="input w-full" placeholder="Paolo" />
            </div>
            <div className="flex-1">
              <Label>Last Name</Label>
              <input type="text" className="input w-full" placeholder="Maldini" />
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-b-[#99a6b888]">
          <h2 className="font-normal mb-2 text-[20px]">Email</h2>
          <div className="w-full max-w-[600px]">
            <Label>Email Address</Label>
            <input
              type="email"
              className="input w-full"
              placeholder="paolomaldini003@gmail.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
