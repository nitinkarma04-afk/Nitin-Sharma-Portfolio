import { useState, useEffect } from "react";
import { FiCheckCircle, FiServer, FiDatabase, FiCode, FiActivity, FiGlobe } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function DeveloperCard() {
  const [activeTab, setActiveTab] = useState("stack");
  const [uptime, setUptime] = useState(99.98);

  // Micro subtle metric fluctuation for dynamic realism
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => +(99.95 + Math.random() * 0.04).toFixed(2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto lg:max-w-none rounded-2xl bg-[#11141B]/95 border border-[#252A35] p-5 sm:p-6 shadow-2xl shadow-blue-500/5 relative overflow-hidden backdrop-blur-xl">
      {/* Decorative background glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Terminal / System Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#252A35]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-xs font-mono text-[#9CA3AF]">developer-environment.ts</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Ready to Deploy
        </div>
      </div>

      {/* Developer Identity Snapshot */}
      <div className="py-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">Specialization</div>
          <div className="text-lg font-bold font-heading text-[#F5F7FA] mt-0.5">Full-Stack MERN</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">System Status</div>
          <div className="text-sm font-mono text-blue-400 mt-0.5 flex items-center gap-1 justify-end">
            <FiActivity className="text-xs animate-pulse" /> {uptime}% Uptime
          </div>
        </div>
      </div>

      {/* Architecture Matrix Tabs */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-[#08090D] rounded-xl border border-[#252A35] my-2 text-xs font-medium">
        <button
          onClick={() => setActiveTab("stack")}
          className={`py-1.5 px-3 rounded-lg transition-all ${
            activeTab === "stack"
              ? "bg-[#171B24] text-white border border-[#252A35] shadow"
              : "text-[#9CA3AF] hover:text-white"
          }`}
        >
          Active Stack
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={`py-1.5 px-3 rounded-lg transition-all ${
            activeTab === "services"
              ? "bg-[#171B24] text-white border border-[#252A35] shadow"
              : "text-[#9CA3AF] hover:text-white"
          }`}
        >
          Services & APIs
        </button>
      </div>

      {/* Tab Content 1: Active Stack */}
      {activeTab === "stack" && (
        <div className="space-y-2.5 pt-2">
          <div className="p-3 rounded-xl bg-[#08090D]/60 border border-[#252A35] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <SiReact className="text-base" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F5F7FA]">Frontend Layer</div>
                <div className="text-xs text-[#9CA3AF]">React 19 • Tailwind CSS • Vite</div>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Optimized</span>
          </div>

          <div className="p-3 rounded-xl bg-[#08090D]/60 border border-[#252A35] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <SiNodedotjs className="text-base" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F5F7FA]">Backend Layer</div>
                <div className="text-xs text-[#9CA3AF]">Node.js • Express.js • REST APIs</div>
              </div>
            </div>
            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Active</span>
          </div>

          <div className="p-3 rounded-xl bg-[#08090D]/60 border border-[#252A35] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <SiMongodb className="text-base" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F5F7FA]">Database Layer</div>
                <div className="text-xs text-[#9CA3AF]">MongoDB • Mongoose ODM • MySQL</div>
              </div>
            </div>
            <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Connected</span>
          </div>
        </div>
      )}

      {/* Tab Content 2: Services & Deployment */}
      {activeTab === "services" && (
        <div className="space-y-2.5 pt-2 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#08090D]/60 border border-[#252A35] flex items-center justify-between">
            <span className="text-[#9CA3AF] flex items-center gap-2">
              <FiGlobe className="text-blue-400" /> Vercel Deployment
            </span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <FiCheckCircle className="text-xs" /> Live & SSL
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#08090D]/60 border border-[#252A35] flex items-center justify-between">
            <span className="text-[#9CA3AF] flex items-center gap-2">
              <FiServer className="text-violet-400" /> REST API Endpoints
            </span>
            <span className="text-blue-400 font-semibold">200 OK (28ms)</span>
          </div>
          <div className="p-3 rounded-xl bg-[#08090D]/60 border border-[#252A35] flex items-center justify-between">
            <span className="text-[#9CA3AF] flex items-center gap-2">
              <FiDatabase className="text-emerald-400" /> DB Connection Pool
            </span>
            <span className="text-emerald-400 font-semibold">Healthy</span>
          </div>
        </div>
      )}

      {/* Quick terminal footer */}
      <div className="mt-4 pt-3 border-t border-[#252A35] flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
        <div className="flex items-center gap-1 text-emerald-400">
          <span className="text-blue-400">$</span> git status: clean
        </div>
        <div className="text-[#9CA3AF]">B.Tech IT '27</div>
      </div>
    </div>
  );
}

