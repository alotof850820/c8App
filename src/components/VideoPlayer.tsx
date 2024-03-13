import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import "./videoPlayer.scss";
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
    <div className="video_player_container">
      <video
        controls={false}
        className="video"
        playsInline
        ref={videoRef}
        src={src}
      ></video>
      <div className="control_box">
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
      <button className="play_pause" onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div className="fullScream theme_font" onClick={setFullScream}>
        <Icon icon="material-symbols:fullscreen"></Icon>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
