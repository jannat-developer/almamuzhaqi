'use client';

import Image from 'next/image';
import { BsCalendar2Check } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GrPower } from 'react-icons/gr';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import { LogoutPopup } from './LogoutPopup';
import { useSelector } from 'react-redux';
import { useGetUserProfileQuery } from '@/redux/api/auth/authApi';
import { store } from '@/redux/store';

export default function SideNavbarDashboard() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, token } = useSelector((state: ReturnType<typeof store.getState>) => state.user);

  // Get updated profile data
  const { data: profileData } = useGetUserProfileQuery(undefined, {
    skip: !token, // Only fetch if user is logged in
  });

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    setIsLogoutOpen(false);
    router.push('/'); // redirect to home after logout
  };

  // Get current profile image
  const getProfileImage = () => {
    if (profileData?.data?.image) {
      return profileData.data.image;
    }
    if (user?.image) {
      return user.image;
    }
    return "/images/profile.jpg";
  };

  // Get user display name
  const getDisplayName = () => {
    if (profileData?.data) {
      return `${profileData.data.firstName} ${profileData.data.lastName}`;
    }
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return 'User';
  };

  // Get user email
  const getDisplayEmail = () => {
    if (profileData?.data?.email) {
      return profileData.data.email;
    }
    if (user?.email) {
      return user.email;
    }
    return 'user@example.com';
  };

  return (
    <>
      <aside className="w-64 bg-white border-r border-r-[#99A6B8] pt-10">
        <div className="flex flex-col px-4 pt-4 justify-start space-y-2">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src={getProfileImage()}
              alt="User"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className='flex gap-1 text-start items-center'>
            <h2 className="text-xl font-medium">{getDisplayName()}</h2>
            {profileData?.data?.isVerified && (
              <img src="/images/p.png" alt="Verified" />
            )}
          </div>
          <div>
            <p className="text-[1rem] text-info font-normal text-start">{getDisplayEmail()}</p>
          </div>
        </div>

        <nav className="mt-10 space-y-4 border-t border-t-[#99A6B8]">
          <div className='py-4'>
            <Link href="/my-plan">
              <button
                className={clsx(
                  'w-full flex items-center gap-3 text-left px-4 py-2 rounded-md text-[1rem] font-medium text-accent cursor-pointer',
                  pathname === '/my-plan' ? 'bg-[#EBFBFF]' : 'bg-white hover:bg-[#EBFBFF]'
                )}
              >
                <BsCalendar2Check className='text-2xl text-[#99A6B8]' /> My Plans
              </button>
            </Link>

            <Link href="/my-profile">
              <button
                className={clsx(
                  'w-full flex items-center gap-3 text-left px-4 py-2 rounded-md text-[1rem] font-medium text-accent my-2 cursor-pointer',
                  pathname === '/my-profile' ? 'bg-[#EBFBFF]' : 'bg-white hover:bg-[#EBFBFF]'
                )}
              >
                <CgProfile className='text-2xl text-[#99A6B8]' /> My Profile
              </button>
            </Link>

            <button
              onClick={() => setIsLogoutOpen(true)}
              className={clsx(
                'w-full flex items-center gap-3 text-left px-4 py-2 rounded-md text-[1rem] font-medium text-accent cursor-pointer',
                'bg-white hover:bg-[#EBFBFF]'
              )}
            >
              <GrPower className='text-2xl text-[#99A6B8]' /> Log Out
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