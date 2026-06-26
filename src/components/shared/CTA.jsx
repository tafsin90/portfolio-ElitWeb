import Link from 'next/link';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Link
        href=""
        download
        className="btn btn-primary px-6 py-3 shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all duration-300"
      >
        <FaDownload />
        Download CV
      </Link>
      <Link
        href="/contact"
        className="btn btn-outline btn-primary rounded-xl px-6 py-3 hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        <FaEnvelope />
        Get in Touch
      </Link>
    </div>
  );
}

export default CTA