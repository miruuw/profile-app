"use client";
import React from 'react';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

// declare props
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 z-[1000] bg-black bg-opacity-70"
          onClick={closeNav}
        />
      )}

      {/* Navigation panel */}
      <nav
        role="navigation"
        className={`fixed top-0 left-0 z-[10000] h-full w-[80%] sm:w-[60%] bg-[#0f0715] transform ${navOpen} transition-transform duration-500 ease-in-out flex flex-col justify-center space-y-6 px-6`}
      >
        {/* Close button */}
        <button
          onClick={closeNav}
          aria-label="Close menu"
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white"
        >
          <CgClose className="w-full h-full" />
        </button>

        {/* Navigation links */}
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <span className="text-white text-lg hover:text-emerald-400 transition-colors cursor-pointer">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MobileNav;
