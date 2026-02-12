import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock3 } from "lucide-react";
import { useState } from "react";

type ContactProps = {
  mode?: "home" | "page";
};

export function Contact({ mode = "home" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isPage = mode === "page";
  const commitments = [
    "Reply to most inquiries within 48 business hours",
    "Direct routing to the right team (programs, partnerships, sponsorships)",
    "Transparent follow-up process for serious proposals",
  ];

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white p-6 sm:p-8 md:p-12 mb-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Let’s Build Community Impact Together
            </h2>
            <p className="text-blue-100 max-w-3xl text-base sm:text-lg leading-relaxed">
              Reach out for scholarships, partnership opportunities, sponsorships, or
              volunteering. Our team is ready to collaborate.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more about our work? We'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Reach out to us for inquiries about our programs, partnership
              opportunities, or to learn how you can support our mission.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Our Office</p>
                  <p className="text-gray-600">
                    123 Unity Road, Victoria Island
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">+234 (0) 123 456 7890</p>
                  <p className="text-gray-600 text-sm">Mon-Fri 9am-5pm WAT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">info@oelofsa.org</p>
                  <p className="text-gray-600">partnerships@oelofsa.org</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">
                Join Our Newsletter
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated on our latest programs and success stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full sm:w-auto px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {isPage && (
              <div className="mt-8 rounded-xl border border-gray-200 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Our Response Commitment</h4>
                <div className="space-y-3">
                  {commitments.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="scholarship">Scholarship Inquiry</option>
                  <option value="donation">Donation & Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="volunteer">Volunteer with Us</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {isPage && (
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <Clock3 className="w-6 h-6 text-blue-700 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Office Hours</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monday to Friday, 9:00 AM to 5:00 PM WAT.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <Mail className="w-6 h-6 text-blue-700 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Partner Desk</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use the form subject “Partnership Opportunity” for faster routing.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <Phone className="w-6 h-6 text-blue-700 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Priority Calls</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Time-sensitive community emergencies are prioritized immediately.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
