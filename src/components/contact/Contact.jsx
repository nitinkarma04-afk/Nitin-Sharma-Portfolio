import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiClock } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import ContactForm from "./ContactForm";
import { socialLinks } from "../../data/socialLinks";

export default function Contact() {
  const contactDetails = [
    {
      icon: <FiMail className="text-blue-400 text-lg" />,
      label: "Email Address",
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      action: "Send direct email"
    },
    {
      icon: <FiPhone className="text-green-400 text-lg" />,
      label: "Phone / WhatsApp",
      value: socialLinks.phone,
      href: `tel:${socialLinks.phone.replace(/\s+/g, "")}`,
      action: "Call or WhatsApp"
    },
    {
      icon: <FiMapPin className="text-violet-400 text-lg" />,
      label: "Location",
      value: socialLinks.location,
      href: null,
      action: "Open to relocation & remote roles"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build"
          highlight="Something Great"
          subtitle="Currently open for full-time Full-Stack / Frontend software engineering opportunities, internships, and technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 font-mono">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#F5F7FA] mt-1">
                  Start a Conversation
                </h3>
                <p className="text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                  Whether you have a full-time role opening, a project discussion, or want to discuss technology, I’d love to hear from you.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                {contactDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#08090D] border border-[#252A35] hover:border-blue-500/30 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#11141B] border border-[#252A35] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold block">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-[#F5F7FA] hover:text-blue-400 transition-colors block truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-[#F5F7FA] block truncate">
                          {item.value}
                        </span>
                      )}
                      <span className="text-xs text-[#9CA3AF] block mt-0.5 font-mono">
                        {item.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time & Social Links */}
              <div className="pt-4 border-t border-[#252A35] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
                  <FiClock className="text-emerald-400" />
                  <span>Typically responds within 24 hours</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#08090D] border border-[#252A35] hover:border-blue-500/40 text-xs font-medium text-[#F5F7FA] flex items-center justify-center gap-2 hover:bg-[#171B24] transition-all"
                  >
                    <FiLinkedin className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#08090D] border border-[#252A35] hover:border-blue-500/40 text-xs font-medium text-[#F5F7FA] flex items-center justify-center gap-2 hover:bg-[#171B24] transition-all"
                  >
                    <FiGithub className="text-white" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive EmailJS Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

