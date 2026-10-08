export default function ProjectPreview({ title, category, badge }) {
  return (
    <div className="relative bg-[#08090D] p-6 border-b border-[#252A35]">
      <div className="flex items-center justify-between gap-2 mb-3">
        {badge && (
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {badge}
          </span>
        )}
        <span className="text-xs text-[#9CA3AF] font-mono">{category}</span>
      </div>
      <h3 className="text-2xl font-bold font-heading text-[#F5F7FA]">{title}</h3>
    </div>
  );
}

