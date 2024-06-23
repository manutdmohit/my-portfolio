import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex mt-4 space-x-4 mb-8">
      <Link href="https://www.linkedin.com/in/yourprofile" target="_blank">
        <FaLinkedin size={30} className="text-blue-600 hover:text-blue-800" />
      </Link>
      <Link href="https://github.com/yourprofile" target="_blank">
        <FaGithub size={30} className="text-gray-800 hover:text-gray-600" />
      </Link>
      <Link href="https://twitter.com/yourprofile" target="_blank">
        <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
      </Link>
    </div>
  );
};

export default SocialLinks;
