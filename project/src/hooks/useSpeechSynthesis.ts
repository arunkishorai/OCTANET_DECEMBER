import { useState, useEffect } from 'react';

export interface Voice extends SpeechSynthesisVoice {
  name: string;
  lang: string;
}

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState<Voice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function loadVoices() {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setIsLoading(false);
    }

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = (text: string, voice: Voice) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
    return utterance;
  };

  return { voices, isLoading, speak };
}