import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";
import { socialLinks } from "../../data/socialLinks";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        "service_u5shvng",
        "template_pz8hy1f",
        formRef.current,
        "yWdca1XGMItODn3Od"
      );

      setStatus("success");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatus("error");
      setErrorMessage(`Unable to dispatch email. You can also reach me directly at ${socialLinks.email}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#11141B] border border-[#252A35] shadow-2xl relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-xl font-bold font-heading text-[#F5F7FA]">
          Send a Message
        </h3>
        <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1">
          Fill in the details below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-1.5 font-mono">
            Your Name <span className="text-blue-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#252A35] text-[#F5F7FA] placeholder-[#9CA3AF]/60 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-1.5 font-mono">
            Email Address <span className="text-blue-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#252A35] text-[#F5F7FA] placeholder-[#9CA3AF]/60 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1.5 font-mono">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#252A35] text-[#F5F7FA] placeholder-[#9CA3AF]/60 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider mb-1.5 font-mono">
            Your Message <span className="text-blue-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Hi Nitin, I would like to discuss a software engineering opportunity..."
            className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#252A35] text-[#F5F7FA] placeholder-[#9CA3AF]/60 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <>
              <FiLoader className="w-5 h-5 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <FiSend className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Status Alerts */}
        {status === "success" && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3 animate-fadeIn">
            <FiCheckCircle className="w-5 h-5 shrink-0" />
            <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-start gap-3 animate-fadeIn">
            <FiAlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{errorMessage || "Failed to send message. Please try again or email directly."}</span>
          </div>
        )}
      </form>
    </div>
  );
}
