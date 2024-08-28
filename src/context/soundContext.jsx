// context/SoundContext.js
import React, { createContext, useContext, useState } from 'react';
import useSound from 'use-sound';

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('/music.mp3');

  const togglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SoundContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </SoundContext.Provider>
  );
};
