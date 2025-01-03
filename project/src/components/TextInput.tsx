import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ value, onChange }: TextInputProps) => {
  return (
    <div className="mb-6">
      <label htmlFor="text" className="block text-blue-400 mb-2 text-sm font-medium">
        Enter your text
      </label>
      <textarea
        id="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-4 bg-white/5 border border-blue-900/50 rounded-lg 
                 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 
                 focus:border-transparent resize-none"
        placeholder="Type something to convert to speech..."
      />
    </div>
  );
};

export default TextInput;