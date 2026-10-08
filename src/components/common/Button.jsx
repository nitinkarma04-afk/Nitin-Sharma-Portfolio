export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  external = false,
  download = false,
  disabled = false,
  type = "button"
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-6 py-3.5 text-base sm:text-lg gap-2.5"
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-[#171B24] hover:bg-[#252A35] text-[#F5F7FA] border border-[#252A35] hover:border-blue-500/40 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-500/40 hover:border-blue-400 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent hover:bg-[#171B24] text-[#9CA3AF] hover:text-[#F5F7FA]",
    accent:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 hover:-translate-y-0.5 active:translate-y-0"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download ? (typeof download === "string" ? download : true) : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}
