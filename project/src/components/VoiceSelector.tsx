import React from 'react';
import { motion } from 'framer-motion';
import { Voice } from '../hooks/useSpeechSynthesis';

interface VoiceSelectorProps {
  voices: Voice[];
  selectedVoice: Voice | null;
  onVoiceSelect: (voice: Voice) => void;
}

const VoiceSelector = ({ voices, selectedVoice, onVoiceSelect }: VoiceSelectorProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <label className="block text-blue-400 mb-2 text-sm font-medium">
        Select Voice
      </label>
      <select
        value={selectedVoice?.name || ''}
        onChange={(e) => {
          const voice = voices.find(v => v.name === e.target.value);
          if (voice) onVoiceSelect(voice);
        }}
        className="w-full p-3 bg-white/5 border border-blue-900/50 rounded-lg 
                 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 [&>option]:bg-blue-900 [&>option]:text-white"
      >
        <option value="" className="bg-blue-900 text-white">Select a voice</option>
        {voices.map((voice) => (
          <option 
            key={voice.name} 
            value={voice.name}
            className="bg-blue-900 text-white"
          >
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </motion.div>
  );
};

export default VoiceSelector;