import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-blue-100">
            Have questions about our Text-to-Voice feature? We'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-blue-300 mb-2">
              Your Name
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 
                         rounded-lg text-white placeholder-white/40 focus:outline-none 
                         focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-blue-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 
                         rounded-lg text-white placeholder-white/40 focus:outline-none 
                         focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-blue-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg 
                       text-white placeholder-white/40 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 
                       text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;