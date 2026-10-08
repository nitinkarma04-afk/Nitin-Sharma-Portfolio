import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F5F7FA] flex flex-col justify-between">
      <Navbar />

      <main className="max-w-md mx-auto px-4 py-36 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#11141B] border border-[#252A35] text-4xl font-extrabold font-heading text-blue-400 mb-6 shadow-xl">
          404
        </div>

        <h1 className="text-3xl font-bold font-heading mb-3">Page Not Found</h1>
        <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8">
          The page you are looking for doesn't exist or has been moved to a different URL.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-lg shadow-blue-500/20 transition-all"
          >
            <FiHome />
            <span>Go to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] font-medium text-sm transition-all cursor-pointer"
          >
            <FiArrowLeft />
            <span>Go Back</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}