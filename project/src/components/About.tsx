import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Type, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Type className="w-6 h-6" />,
    title: "Character Count Display",
    description: "Real-time character counting as you type, helping you track text length efficiently."
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice Selection",
    description: "Choose from various voices and languages to personalize your listening experience."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Friendly Design",
    description: "Simple and intuitive interface suitable for both casual users and professionals."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Seamless Playback",
    description: "Smart playback management ensures smooth transition between voice outputs."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About Our Text-to-Voice Feature
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Our Text-to-Voice feature converts written text into spoken words using advanced 
            speech synthesis technology, making your content more accessible and engaging.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 
                       transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-blue-100">
            Enhance your accessibility, improve engagement, and bring your text to life 
            with this easy-to-use Text-to-Voice tool!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;