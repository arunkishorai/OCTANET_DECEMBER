import React from 'react';
import { Play, Pause } from 'lucide-react';

interface VoiceControlsProps {
  onPlay: () => void;
  isPlaying: boolean;
  disabled?: boolean;
}

const VoiceControls = ({ onPlay, isPlaying, disabled }: VoiceControlsProps) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onPlay}
        disabled={disabled || isPlaying}
        className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg
                 hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPlaying ? (
          <>
            <Pause className="w-5 h-5" />
            Playing...
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            Play
          </>
        )}
      </button>
    </div>
  );
};

export default VoiceControls;