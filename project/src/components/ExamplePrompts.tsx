import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const prompts = [
  "Hello! How are you today?",
  "Welcome to our AI voice synthesis demo.",
  "This is an example of natural-sounding speech.",
  "Try different accents to hear how they sound!"
];

const ExamplePrompts = ({ onSelectPrompt }: { onSelectPrompt: (prompt: string) => void }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="w-4 h-4 text-blue-400" />
        <span className="text-blue-400 text-sm font-medium">Example Prompts</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {prompts.map((prompt, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-3 text-left text-sm text-white/80 bg-white/5 rounded-lg 
                     hover:bg-white/10 transition-all border border-white/10"
            onClick={() => onSelectPrompt(prompt)}
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ExamplePrompts;