import React from 'react';
import { AccentType } from '../types';

interface AccentSelectorProps {
  value: AccentType;
  onChange: (value: AccentType) => void;
}

const AccentSelector = ({ value, onChange }: AccentSelectorProps) => {
  const accents = [
    { id: 'british', label: 'British', lang: 'en-GB' },
    { id: 'american', label: 'American', lang: 'en-US' },
    { id: 'australian', label: 'Australian', lang: 'en-AU' },
    { id: 'indian', label: 'Indian', lang: 'en-IN' },
  ];

  return (
    <div className="mb-6">
      <label className="block text-blue-400 mb-2 text-sm font-medium">
        Select Accent
      </label>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {accents.map((accent) => (
          <button
            key={accent.id}
            onClick={() => onChange(accent.id as AccentType)}
            className={`p-3 rounded-lg border transition-all ${
              value === accent.id
                ? 'bg-blue-500 border-blue-400 text-white'
                : 'border-blue-900/50 text-gray-300 hover:border-blue-400'
            }`}
          >
            {accent.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccentSelector;