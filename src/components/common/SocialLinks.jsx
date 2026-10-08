import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";

export default function SocialLinks({ className = "", iconSize = "text-lg" }) {
  const items = [
    {
      name: "GitHub",
      href: socialLinks.github,
      icon: <FaGithub className={iconSize} />,
      label: "GitHub Profile",
      external: true
    },
    {
      name: "LinkedIn",
      href: socialLinks.linkedin,
      icon: <FaLinkedin className={iconSize} />,
      label: "LinkedIn Profile",
      external: true
    },
    {
      name: "Email",
      href: `mailto:${socialLinks.email}`,
      icon: <FaEnvelope className={iconSize} />,
      label: "Send Email",
      external: false
    }
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className="w-10 h-10 rounded-lg bg-[#11141B] border border-[#252A35] flex items-center justify-center text-[#9CA3AF] hover:text-[#F5F7FA] hover:border-blue-500/50 hover:bg-[#171B24] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

