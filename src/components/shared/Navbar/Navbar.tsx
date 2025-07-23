'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-transparent px-4 md:px-8 py-4">
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
          <Link href="/signIn" >
            <button className="text-black text-[1rem] font-medium px-4 py-2 rounded-lg transition bg-white border border-accent">Login</button>
          </Link>
          <Link href="/signUp">
          <button className="bg-primary text-[1rem] font-medium hover:bg-[#00d9ff] text-accent px-4 py-2 rounded-lg transition">
            Sign Up
          </button>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
