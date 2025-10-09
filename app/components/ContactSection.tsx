import React, { useState } from "react";
import bgImage from "../assets/contact-bg-image.png";
import PaperIcon from "../assets/paper.svg";

const subjects = [
  "General Inquiry",
  "Partnership",
  "Research Collaboration",
  "Media",
  "Other",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/partnering@iorgan.bio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/partnering@iorgan.bio",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: subscriptionEmail,
            subject: "Newsletter Subscription",
            message: "New newsletter subscription request",
          }),
        }
      );

      if (response.ok) {
        setSubscriptionStatus("success");
        setSubscriptionEmail("");
      } else {
        setSubscriptionStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionStatus("error");
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[80vh] flex items-center justify-center font-poppins overflow-hidden py-20 md:py-40"
      style={{
        backgroundColor: "#230B37",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 gap-12">
        <div className="flex flex-col md:w-1/2 w-full mb-8 md:mb-0 items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-6 text-[#ffffff]">
            Get the precision cells your research demands
          </h2>
          <div className="flex-1 flex flex-col text-white max-w-xl">
            <p className="text-lg opacity-80 text-[#ffffff] mt-5">
              Get the latest updates by subscribing to our newsletter.
            </p>
            <div className="mt-7">
              <form
                onSubmit={handleSubscriptionSubmit}
                className="flex flex-col md:flex-row gap-4 items-center justify-center"
              >
                <input
                  type="email"
                  value={subscriptionEmail}
                  onChange={(e) => setSubscriptionEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 max-w-md px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className={`px-8 py-3 rounded-full bg-[#4C294E] text-white font-medium hover:bg-[#5a355c] transition focus:outline-none focus:ring-2 focus:ring-pink-300 ${
                    isSubscribing ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe Now"}
                </button>
              </form>

              {subscriptionStatus === "success" && (
                <div className="text-center text-green-400 text-sm mt-2">
                  Thank you for subscribing!
                </div>
              )}
              {subscriptionStatus === "error" && (
                <div className="text-center text-red-400 text-sm mt-2">
                  There was an error subscribing. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 w-full md:w-1/2 flex justify-center items-center">
          <form
            className="flex-1 bg-transparent flex flex-col gap-6 max-w-xl w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullname"
                className="text-white text-base font-medium"
              >
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white placeholder-white/60"
                placeholder=""
                autoComplete="name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-white text-base font-medium"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white placeholder-white/60"
                placeholder=""
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-white text-base font-medium"
              >
                Subject
              </label>
              <select
                id="subject"
                className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white appearance-none"
                value={formData.subject}
                onChange={handleChange}
                name="subject"
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-white text-base font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-transparent border-b border-white/40 focus:border-pink-300 outline-none py-2 px-1 text-white placeholder-white/60 resize-none"
                placeholder=""
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {submitStatus === "success" && (
              <div className="text-green-400 text-sm">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-400 text-sm">
                There was an error sending your message. Please try again.
              </div>
            )}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex flex-col items-center justify-center bg-pink-200 hover:bg-pink-300 transition w-32 h-32 rounded-full shadow-lg group focus:outline-none ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <img
                  src={PaperIcon}
                  alt="Send"
                  className="w-8 h-8 mb-2 group-hover:scale-110 transition"
                />
                <span className="text-[#4C294E] text-[16px] font-medium">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
