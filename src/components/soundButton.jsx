import React, { useState, useEffect, useRef } from 'react';

const SoundButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Reset the playing state when the component mounts
    setIsPlaying(false);
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className='ml-2'>
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 p-3 text-lg text-white rounded shadow transition duration-200 ease-in-out transform hover:bg-black-600 focus:outline-none"
      >
        <img 
          src={isPlaying ? '/stop.svg' : '/play.svg'} 
          alt={isPlaying ? 'Stop icon' : 'Play icon'} 
          className="w-6 h-6" 
        />
      </button>
      <audio ref={audioRef} src="/music.mp3" />
    </div>
  );
};

export default SoundButton;
