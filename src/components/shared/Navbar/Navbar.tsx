'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/redux/features/user/userSlice';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useGetUserProfileQuery } from '@/redux/api/auth/authApi';
import { CgProfile } from 'react-icons/cg';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, token } = useSelector((state: any) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get updated profile data
  const { data: profileData } = useGetUserProfileQuery(undefined, {
    skip: !token, // Only fetch if user is logged in
  });

  // Check for user data in localStorage on mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    const tokenData = localStorage.getItem('token');
    if (userData && tokenData && !user) {
      // If user data exists in localStorage but not in Redux, restore it
      const parsedUser = JSON.parse(userData);
      dispatch({
        type: 'user/setUser',
        payload: { user: parsedUser, token: tokenData }
      });
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Clear Redux state
    dispatch(logout());

    // Show success message
    toast.success('Logged out successfully');

    // Redirect to home page
    router.push('/');

    // Close dropdown
    setIsDropdownOpen(false);
  };

  const getProfileImage = () => {
    // Use profile data if available, otherwise fall back to user data
    if (profileData?.data?.image) {
      return profileData.data.image;
    }
    if (user?.image) {
      return user.image;
    }
    // Default profile image
    return '/images/profile.jpg';
  };

  const getDisplayName = () => {
    if (profileData?.data) {
      return `${profileData.data.firstName} ${profileData.data.lastName}`;
    }
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return '';
  };

  const getDisplayEmail = () => {
    if (profileData?.data?.email) {
      return profileData.data.email;
    }
    if (user?.email) {
      return user.email;
    }
    return '';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-transparent px-4 md:px-8 py-4 shadow-md">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className='flex items-center justify-between gap-2'>
          <div>
            <Image
              src="/images/logo.png"
              alt="Descriptive alt text"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-black font-medium text-2xl ">Business AI Plan</h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-x-4 text-end flex gap-0.5 md:gap-1">
          {user && token ? (
            // User is logged in - show profile dropdown
            <div className="relative profile-dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-card text-accent px-3 py-2 rounded-[13px] transition cursor-pointer"
              >
                {/* <Image
                  src={getProfileImage()}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                /> */}
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={getProfileImage()}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                // <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                //   <div className="px-4 py-2 border-b border-gray-100">
                //     <p className="text-sm font-medium text-gray-900">{getDisplayName()}</p>
                //     <p className="text-sm text-gray-500">{getDisplayEmail()}</p>
                //   </div>
                //   <button
                //     onClick={handleLogout}
                //     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                //   >
                //     Logout
                //   </button>
                // </div>


                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-[20px] font-medium text-accent text-left">{getDisplayName()}</p>
                    <p className="text-[1rem]  text-gray-500 text-left">{getDisplayEmail()}</p>
                  </div>
                  <Link href="/my-plan">
                    <div className="w-full flex items-center justify-start gap-2 px-4 py-2 text-sm text-accent hover:bg-card transition-colors border-b border-gray-100 cursor-pointer">
                      <CgProfile className='text-xl text-[#99A6B8]' />
                      <p className='text-[1rem] '>Your Profile</p>
                    </div>
                  </Link>
                  <div onClick={handleLogout} className='w-full flex items-center justify-start gap-2 px-4 py-2 text-sm hover:bg-card transition-colors cursor-pointer'>
                    <MdLogout className='text-xl text-[#99A6B8]' />
                    <button className='text-[1rem] '>
                      Logout
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            // User is not logged in - show login/signup buttons
            <>
              <Link href="/signIn">
                <button className="text-black text-[1rem] font-medium px-4 py-2 rounded-lg transition bg-white border border-accent cursor-pointer">
                  Login
                </button>
              </Link>
              <Link href="/signUp">
                <button className="bg-primary text-[1rem] font-medium hover:bg-[#00d9ff] text-accent px-4 py-2 rounded-lg transition cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
