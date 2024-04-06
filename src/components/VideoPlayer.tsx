import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import "./videoPlayer.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

interface CustomVideoPlayerProps {
  src: string;
  onShowControl: (show: boolean) => void;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  onShowControl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControl, setShowControl] = useState(true);
  const [showFullScream, setFullScream] = useState(false);

  useEffect(() => {
    const video = videoRef.current!;
    const updatePlaybackStatus = () => {
      setIsPlaying(!video.paused);
      setCurrentTime(video.currentTime);

      const sliderEl = document.getElementById("range2") as HTMLInputElement;
      const progress = (video.currentTime / duration) * 100;
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

  const caluTimeOut = () => {
    clearTimer()
    timeoutRef.current = setTimeout(() => {
      setShowControl(false);
      onShowControl(false);
    }, 3000);
  };
  const clearTimer = () => {
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = null;
  };

  const togglePlayPause = () => {
    if (!showControl) {
      setShowControl(true);
      onShowControl(true);
    } else {
      const video = videoRef.current!;
      setIsPlaying((prevPlaying) => {
        if (video.paused) {
          video.currentTime = currentTime;
          video.play();
          caluTimeOut();
        } else {
          video.pause();
          clearTimer()
        }
        return !prevPlaying;
      });
    }
  };
  const toggleFullScream = () => {
    setFullScream(true);
    setTimeout(() => {
      videoRef.current!.play();
      videoRef.current!.pause();
    }, 0);
  };

  const changeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current!;
    const newValue = parseFloat(e.target.value);
    video.currentTime = duration * (newValue / 100);
  };

  // const setFullScream = () => {
  //   const container = document.querySelector(".video");
  //   if (container) {
  //     container.requestFullscreen();
  //   }
  // };

  const toggleControls = () => {
    setShowControl(!showControl);
    onShowControl(!showControl);
    if (isPlaying) caluTimeOut();
  };

  useEffect(() => {
    videoRef.current!.addEventListener("webkitendfullscreen", () => {
      setFullScream(false), setIsPlaying(false);
    });
  }, []);

  return (
    <div className="video_player_container">
      <video
        controls={false}
        className="video"
        playsInline={!showFullScream}
        ref={videoRef}
        src={src}
        onClick={toggleControls}
      ></video>

      <div className="control_box">
        <input
          id="range2"
          className={`range-input ${showControl ? "fadeOut" : "fadeIn"}`}
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={(currentTime / duration) * 100 || 0}
          onChange={changeSlider}
        />
      </div>
      <div className={`controls ${showControl ? "fadeOut" : "fadeIn"}`}>
        <button className="play_pause" onClick={togglePlayPause}>
          {isPlaying ? (
            <Icon icon="ic:round-pause"></Icon>
          ) : (
            <Icon icon="mdi:play"></Icon>
          )}
        </button>
        <div className="fullScream theme_font" onClick={toggleFullScream}>
          <Icon icon="material-symbols:fullscreen"></Icon>
        </div>
        <div className="timeRange theme_font" onClick={toggleFullScream}>
          12:34 / 56:08
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
