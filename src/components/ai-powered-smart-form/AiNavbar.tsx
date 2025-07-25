import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type AiNavbarProps = {
  rightButtons?: React.ReactNode;
};

const AiNavbar: React.FC<AiNavbarProps> = ({ rightButtons }) => {
  return (
    <nav className="w-full  py-4 border-b-[0.5px] border-b-[#99A6B8]">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h3 className="text-black font-medium text-2xl">Business AI Plan</h3>
          </div>
        </Link>

        {/* Dynamic Buttons */}
        <div className="flex gap-4">{rightButtons}</div>
      </div>
    </nav>
  );
};

export default AiNavbar;
