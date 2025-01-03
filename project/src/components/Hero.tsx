import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import VoiceConverter from './VoiceConverter';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-900 to-blue-800"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay"></div>
      </motion.div>

      {/* Content */}
      <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">AI-POWERED VOICE SYNTHESIS</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50"
          >
            Transform Text to
            <br />
            Natural Speech
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto"
          >
            Experience the future of communication with our advanced AI voice technology. 
            Choose from multiple accents and bring your text to life with natural-sounding speech.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-medium 
                       hover:bg-blue-50 transition-all flex items-center gap-2"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white rounded-lg 
                       hover:bg-white/10 transition-all"
            >
              View Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <VoiceConverter />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default Hero;