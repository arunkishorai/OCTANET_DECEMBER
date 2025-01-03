import React, { useState, useCallback } from 'react';
import TextInput from './TextInput';
import VoiceSelector from './VoiceSelector';
import VoiceControls from './VoiceControls';
import CharacterCount from './CharacterCount';
import ExamplePrompts from './ExamplePrompts';
import { useSpeechSynthesis, Voice } from '../hooks/useSpeechSynthesis';

const VoiceConverter = () => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { voices, isLoading, speak } = useSpeechSynthesis();

  const handlePlay = useCallback(() => {
    if (!selectedVoice) return;
    
    setIsPlaying(true);
    const utterance = speak(text, selectedVoice);
    utterance.onend = () => setIsPlaying(false);
  }, [text, selectedVoice, speak]);

  const handleSelectPrompt = (prompt: string) => {
    setText(prompt);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-2xl">
      <ExamplePrompts onSelectPrompt={handleSelectPrompt} />
      <TextInput 
        value={text} 
        onChange={setText} 
      />
      <CharacterCount count={text.length} />
      
      {!isLoading && (
        <VoiceSelector
          voices={voices}
          selectedVoice={selectedVoice}
          onVoiceSelect={setSelectedVoice}
        />
      )}
      
      <VoiceControls 
        onPlay={handlePlay} 
        isPlaying={isPlaying}
        disabled={!selectedVoice || !text} 
      />
    </div>
  );
};

export default VoiceConverter;