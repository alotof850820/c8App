import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current!;

    const updatePlaybackStatus = () => {
      setIsPlaying(!video.paused);
      setCurrentTime(video.currentTime);

      const progress = (video.currentTime / duration) * 100;
      const sliderEl = document.getElementById("range2") as HTMLInputElement;
      sliderEl.style.background = `linear-gradient(to right, #9e7ed6 ${progress}%, #ccc ${progress}%)`;
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updatePlaybackStatus);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updatePlaybackStatus);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [duration]);

  const handlePlayPause = () => {
    const video = videoRef.current!;
    setIsPlaying((prevPlaying) => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      return !prevPlaying;
    });
  };

  //   const handleSeek = (e: MouseEvent<HTMLProgressElement>) => {
  //     const video = videoRef.current!;
  //     const { offsetX } = e.nativeEvent;
  //     const percentage = offsetX / e.currentTarget.clientWidth;
  //     video.currentTime = duration * percentage;
  //   };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current!;
    const newValue = parseFloat(e.target.value);
    video.currentTime = duration * (newValue / 100);
  };
  const setFullScream = () => {
    const container = document.querySelector(".video");
    if (container) {
      container.requestFullscreen();
    }
  };

  return (
    <div className="relative">
      <video
        controls={false}
        className="w-full h-full object-contain"
        playsInline
        ref={videoRef}
        src={src}
      ></video>
      <div className="absolute bottom-0 left-0 w-full z-[1]">
        <input
          id="range2"
          className="range-input"
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSliderChange}
        />
      </div>
      <button className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[8vw] text-white z-[1]" onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div className="absolute right-[4vw] bottom-[4vw] text-[5vw] text-white z-[1] theme_font" onClick={setFullScream}>
        <Icon icon="material-symbols:fullscreen"></Icon>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
