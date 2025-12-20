"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// معلومات التواصل - عدلها حسب بياناتك
const contactInfo = {
  email: "faresmohmed6872@gmail.com",
  phone: "+201224226872",
  location: "Alexandria, Egypt",
};

// روابط السوشيال ميديا - حط اللينكات بتاعتك
const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/fares.m.hassan.344734/",
    color: "#1877F2",
    hoverColor: "#166FE5",
    username: "Fares M Hassan",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/fares-mohamed-8b3214263/",
    color: "#0A66C2",
    hoverColor: "#004182",
    username: "Fares Mohame",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/201224226872",
    color: "#25D366",
    hoverColor: "#20BA5A",
    username: "+2001224226872",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/fares_mohamed_6872/",
    color: "#E4405F",
    hoverColor: "#D62E4F",
    username: "fares_mohamed_6872",
  },
];

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // استبدل هذه القيم بالقيم من EmailJS Dashboard
      const serviceId = 'service_ysv95wj';
      const templateId = 'template_ij7e3q7';
      const publicKey = 'cdI5r2L4vrYOBLtIg';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Fares Mohamed', // اسمك
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'تم إرسال الرسالة بنجاح! 🚀 هرد عليك في أقرب وقت',
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'حدث خطأ في إرسال الرسالة. حاول مرة أخرى أو تواصل معي مباشرة.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-5">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                    <FaEnvelope className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">{contactInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                    <FaPhone className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold">{contactInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                        style={{
                          boxShadow: hoveredIndex === index 
                            ? `0 10px 40px ${social.color}40` 
                            : 'none',
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: `radial-gradient(circle at center, ${social.color}20, transparent)`,
                          }}
                        />
                        
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <Icon 
                            className="text-4xl transition-colors" 
                            style={{ 
                              color: hoveredIndex === index ? social.color : '#9CA3AF' 
                            }}
                          />
                          <div className="text-center">
                            <p className="text-white font-semibold">{social.name}</p>
                            <p className="text-xs text-gray-400 mt-1">{social.username}</p>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Message */}
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-300'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message 🚀
                  </>
                )}
              </motion.button>
            </form>

            {/* Quick Contact Buttons */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Or message me directly:</p>
              <div className="flex gap-3">
                <motion.a
                  href={socialLinks.find(s => s.name === "WhatsApp")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white rounded-lg border border-[#25D366]/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="font-medium">WhatsApp</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-lg border border-purple-500/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="text-xl" />
                  <span className="font-medium">Email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;