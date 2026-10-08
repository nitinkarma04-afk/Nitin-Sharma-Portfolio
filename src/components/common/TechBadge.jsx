export default function TechBadge({ name, size = "md", active = false }) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs sm:text-sm",
    lg: "px-3.5 py-1.5 text-sm"
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-md transition-all duration-200 ${
        sizeClasses[size] || sizeClasses.md
      } ${
        active
          ? "bg-blue-500/15 text-blue-300 border border-blue-500/30"
          : "bg-[#171B24] text-[#9CA3AF] hover:text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/30"
      }`}
    >
      {name}
    </span>
  );
}

