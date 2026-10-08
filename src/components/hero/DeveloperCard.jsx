import profileImg from "../../assets/images/profile.png";

export default function DeveloperCard() {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[340px] mx-auto rounded-3xl bg-[#11141B] border border-[#252A35] hover:border-blue-500/30 p-5 sm:p-6 shadow-xl shadow-black/40 relative overflow-hidden transition-all duration-300 group">
      {/* Top Status Row */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#252A35]/60 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Open to Roles</span>
        </div>
        <span className="text-[#9CA3AF]">
          B.Tech IT &apos;27
        </span>
      </div>

      {/* Circular Avatar Area */}
      <div className="text-center">
        <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 mb-4">
          {/* Soft ambient blue/violet glow behind circular avatar */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-violet-600/25 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Gradient Ring Wrapper */}
          <div className="relative w-full h-full rounded-full p-[2.5px] bg-gradient-to-tr from-blue-500/40 via-indigo-500/30 to-violet-500/40">
            {/* Inner Circular Photo Container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#08090D] border border-[#252A35]">
              <img
                src={profileImg}
                alt="Nitin Sharma"
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>

          {/* Tiny Status Dot Badge */}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#11141B] shadow-sm"></span>
        </div>

        {/* Name & Role */}
        <div className="space-y-0.5">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F7FA] tracking-tight">
            Nitin Sharma
          </h3>
          <p className="text-xs sm:text-sm font-medium font-mono text-blue-400">
            Full-Stack MERN Developer
          </p>
        </div>

        {/* Compact Tech Badges */}
        <div className="mt-4 pt-3.5 border-t border-[#252A35]/60 flex flex-wrap items-center justify-center gap-1.5 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-md bg-[#08090D] border border-[#252A35] text-[#9CA3AF]">
            React
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-[#08090D] border border-[#252A35] text-[#9CA3AF]">
            Node.js
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-[#08090D] border border-[#252A35] text-[#9CA3AF]">
            Express
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-[#08090D] border border-[#252A35] text-[#9CA3AF]">
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
}
