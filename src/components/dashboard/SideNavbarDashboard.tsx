'use client';

import Image from 'next/image';
import { BsCalendar2Check } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GrPower } from 'react-icons/gr';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import { LogoutPopup } from './LogoutPopup'; // Make sure path is correct

export default function SideNavbarDashboard() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogout = () => {
    // ✅ You can clear auth tokens here if needed
    // localStorage.removeItem('token');
    setIsLogoutOpen(false);
    router.push('/login'); // redirect to login after logout
  };

  return (
    <>
      <aside className="w-64 bg-white border-r border-r-[#99A6B8] pt-10">
        <div className="flex flex-col px-4 pt-4 justify-start space-y-2">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="User"
              width={100}
              height={100}
              className="object-cover w-full h-full"
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
            <Link href="/my-plan">
              <button
                className={clsx(
                  'w-full flex items-center gap-2 text-left px-4 py-2 rounded-md text-[1rem] font-medium text-accent',
                  pathname === '/my-plan' ? 'bg-[#EBFBFF]' : 'bg-white hover:bg-[#EBFBFF]'
                )}
              >
                <BsCalendar2Check className='text-xl text-[#99A6B8]' /> My Plans
              </button>
            </Link>

            <Link href="/my-profile">
              <button
                className={clsx(
                  'w-full flex items-center gap-2 text-left px-4 py-2 rounded-md text-[1rem] font-medium text-accent my-2',
                  pathname === '/my-profile' ? 'bg-[#EBFBFF]' : 'bg-white hover:bg-[#EBFBFF]'
                )}
              >
                <CgProfile className='text-xl text-[#99A6B8]' /> My Profile
              </button>
            </Link>

            <button
              onClick={() => setIsLogoutOpen(true)}
              className={clsx(
                'w-full flex items-center gap-2 text-left px-4 py-2 rounded-md text-[1rem] font-medium text-accent',
                'bg-white hover:bg-[#EBFBFF]'
              )}
            >
              <GrPower className='text-xl text-[#99A6B8]' /> Log Out
            </button>
          </div>
        </nav>
      </aside>

      {/* 🔒 Logout Confirmation Modal */}
      <LogoutPopup
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}
