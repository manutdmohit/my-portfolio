import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Mohit Saud. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Phone: <a href="tel: +9779868551045">(+977) 9868551045</a>
            </p>
            <p className="text-gray-600 text-sm">
              Email:{' '}
              <a
                href="mailto:saudmohit@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                saudmohit@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                className="text-blue-600 hover:text-blue-800"
              />
            </Link>
            <Link href="https://github.com/yourprofile" target="_blank">
              <FaGithub
                size={20}
                className="text-gray-800 hover:text-gray-600"
              />
            </Link>
            <Link href="https://twitter.com/yourprofile" target="_blank">
              <FaTwitter
                size={20}
                className="text-blue-400 hover:text-blue-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
