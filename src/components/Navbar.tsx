'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MyPortfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
