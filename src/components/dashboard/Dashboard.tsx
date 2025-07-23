'use client';

import Image from 'next/image';
import { BsCalendar2Check } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaPlus, FaRegUserCircle } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { GrPower } from 'react-icons/gr';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import AiNavbar from '../ai-powered-smart-form/AiNavbar';

const plans = [
  {
    title: 'Business Plan- InnovateX',
    subtitle: 'Early stage paper company',
    status: 'Completed',
    created: '05:25PM 05 July 2025',
    disabled: false,
  },
  {
    title: 'Business Plan- Roto Union',
    subtitle: 'Existing service holder company',
    status: 'In-Completed',
    created: '05:25PM 05 July 2025',
    disabled: true,
  },
  {
    title: 'Business Plan- Roto Union',
    subtitle: 'Existing service holder company',
    status: 'In-Completed',
    created: '05:25PM 05 July 2025',
    disabled: true,
  },
];

export default function Dashboard() {
  return (
    <div>
      <AiNavbar />
      <div className="min-h-screen max-w-[1440px] mx-auto w-full flex font-sans mt-24 border-t border-t-[#99A6B8]">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-r-[#99A6B8] pt-10">
          <div className="flex flex-col px-4 pt-4 justify-start space-y-2">
            <div>
              <Image
                src="/images/profile.jpg"
                alt="User"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className='flex gap-1 text-start'>
              <h2 className="text-xl font-medium">Paolo Maldini</h2>
              <img src="/images/p.png" alt="" />
            </div>
            <div>
              <p className="text-[1rem] text-info font-normal text-start">Paolomaldini003@gmail.com</p>
            </div>
          </div>

          <nav className="mt-10 space-y-4 border-t border-t-[#99A6B8]">
            <div className='py-4'>
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md bg-white text-[1rem] font-medium text-accent hover:bg-[#EBFBFF] "><BsCalendar2Check className='text-xl text-[#99A6B8]' /> My Plans</button>
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md bg-white text-[1rem] font-medium text-accent hover:bg-[#EBFBFF] "><CgProfile className='text-xl text-[#99A6B8]' /> My Profile</button>
              <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-md bg-white text-[1rem] font-medium text-accent hover:bg-[#EBFBFF] "><GrPower className='text-xl text-[#99A6B8]' /> Log Out</button>

            </div>

          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-[2rem] font-medium">Welcome back, <span className="text-accent">Paolo</span></h1>
              <p className="text-[1rem] font-regular text-info">Your business plans and strategic tools in one place.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-accent rounded-[10px] shadow">
              <div className='bg-white p-1 rounded-full'><GoPlus size={18} className='  text-accent' /></div>
              Generate new Plan
            </button>
          </div>

          <section className=''>
            <h2 className="font-medium mb-4 mt-10 text-[24px]">Generated Plans</h2>
            <div className="space-y-4">
              {plans.map((plan, index) => (
                <div key={index} className="p-8 bg-white rounded-[20px] shadow-md">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-b-[#99A6B8]">
                    <div>
                      <h3 className="font-medium text-[24px]">{plan.title}</h3>
                      <p className="text-[1rem] font-regular text-info">{plan.subtitle}</p>
                    </div>
                    <div className="text-sm text-right">
                      <p className="text-info font-regular text-[1rem]">Status: {plan.status}</p>
                      <p className="text-info font-regular text-[1rem]">Created: {plan.created}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between gap-3 mt-3">
                    <button className="px-4 py-2 bg-primary text-accent rounded-lg text-sm cursor-pointer">View Plan</button>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm border ${plan.disabled ? 'text-gray-400 border-gray-300 cursor-not-allowed' : 'border-gray-400 cursor-pointer'
                        }`}
                      disabled={plan.disabled}
                    >
                      Download PDF
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm border ${plan.disabled ? 'text-gray-400 border-gray-300 cursor-not-allowed' : 'border-gray-400 cursor-pointer'
                        }`}
                      disabled={plan.disabled}
                    >
                      View Presentation
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm border ${plan.disabled ? 'text-gray-400 border-gray-300 cursor-not-allowed' : 'border-gray-400 cursor-pointer'
                        }`}
                      disabled={plan.disabled}
                    >
                      Add Expert Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
