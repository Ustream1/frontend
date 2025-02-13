import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';

import Logo from "../assets/images/logo_blue.png";
import UserImage from "../assets/images/user_image.png";
import PlayIcon from "../assets/images/play_icon.png";
import { PauseIcon, VolumeIcon, FullscreenIcon, BackIcon } from '../components/icons';

const POINTS_PER_MINUTE = 10;
const POINTS_INTERVAL = 60; // Calculate points every 60 seconds

const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

const MovieStreams = () => {
  const [searchParams] = useSearchParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  
  const movieName = searchParams.get('name');
  const movieLink = searchParams.get('link');

  // Add state for video container height
  const [videoHeight, setVideoHeight] = useState('70vh');

  // Update video container height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      setVideoHeight(Math.min(vh * 0.7, 600) + 'px'); // 70% of viewport height, max 600px
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Handle fullscreen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Format time in seconds to MM:SS
  const formatTime = (seconds) => {
    const pad = (num) => (`0${Math.floor(num)}`).slice(-2);
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;
    const secs = seconds % 60;
    
    if (hours >= 1) {
      return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    }
    return `${pad(minutes)}:${pad(secs)}`;
  };

  const [watchTime, setWatchTime] = useState(0);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [hasCompletedMovie, setHasCompletedMovie] = useState(false);
  const watchTimeRef = useRef(0);
  const lastUpdateRef = useRef(Date.now());

  // Check if movie was previously completed
  useEffect(() => {
    const completedMovies = JSON.parse(localStorage.getItem('completedMovies') || '[]');
    setHasCompletedMovie(completedMovies.includes(movieName));
  }, [movieName]);

  // Handle tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
      if (document.hidden) {
        // Save progress when tab becomes hidden
        updatePoints();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Handle video completion
  const handleVideoComplete = () => {
    const completedMovies = JSON.parse(localStorage.getItem('completedMovies') || '[]');
    if (!completedMovies.includes(movieName)) {
      completedMovies.push(movieName);
      localStorage.setItem('completedMovies', JSON.stringify(completedMovies));
    }
    setHasCompletedMovie(true);
  };

  const updatePoints = () => {
    if (watchTimeRef.current < 1 || hasCompletedMovie) return;

    const minutes = Math.floor(watchTimeRef.current / 60);
    const points = minutes * POINTS_PER_MINUTE;
    
    if (points > 0) {
      const earnings = JSON.parse(localStorage.getItem('earnings') || '[]');
      const existingRecordIndex = earnings.findIndex(record => record.movieName === movieName);
      
      if (existingRecordIndex !== -1) {
        // Update existing record with new points
        earnings[existingRecordIndex] = {
          ...earnings[existingRecordIndex],
          points: earnings[existingRecordIndex].points + points,
          watchTimeMinutes: earnings[existingRecordIndex].watchTimeMinutes + minutes,
          lastUpdated: new Date().toISOString()
        };
      } else {
        // Add new record
        earnings.push({
          movieName,
          points,
          watchTimeMinutes: minutes,
          timestamp: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        });
      }

      localStorage.setItem('earnings', JSON.stringify(earnings));
    }
  };

  // Track watch time and update points
  useEffect(() => {
    let interval;
    
    if (isPlaying && isTabVisible && !hasCompletedMovie) {
      interval = setInterval(() => {
        const now = Date.now();
        const timeDiff = now - lastUpdateRef.current;
        lastUpdateRef.current = now;
        
        watchTimeRef.current += timeDiff / 1000;
        setWatchTime(watchTimeRef.current);

        if (watchTimeRef.current >= POINTS_INTERVAL) {
          updatePoints();
          watchTimeRef.current = 0;
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        updatePoints();
      }
    };
  }, [isPlaying, isTabVisible, hasCompletedMovie]);

  const [thumbnail, setThumbnail] = useState('');

  // Add this effect to set the thumbnail when component mounts
  useEffect(() => {
    if (movieLink) {
      const thumbUrl = getYouTubeThumbnail(movieLink);
      setThumbnail(thumbUrl);
    }
  }, [movieLink]);

  return (
    <div className="w-full min-h-screen bg-[#0F172A]">
      {/* Video Section */}
      <div className="relative w-full" style={{ height: videoHeight }} ref={containerRef}>
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-4 tablet:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <BackIcon className="w-6 h-6 text-white" />
            </button>
            <img src={Logo} className="w-[100px] mobile:w-[150px] brightness-0 invert" alt="Ustream Logo" />
          </div>
          
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/20 hover:border-blue-400/30 transition-colors">
            <img src={UserImage} className="w-full h-full object-cover" alt="User Profile" />
          </div>
        </header>

        {/* Video Player */}
        <div className="relative w-full h-full bg-black">
          <ReactPlayer
            ref={playerRef}
            url={movieLink}
            width="100%"
            height="100%"
            playing={isPlaying}
            volume={volume}
            light={thumbnail}
            onProgress={({ played }) => {
              setProgress(played);
              if (played >= 0.99) {
                handleVideoComplete();
              }
            }}
            onDuration={setDuration}
            config={{
              youtube: {
                playerVars: { 
                  showinfo: 0, 
                  controls: 0, 
                  modestbranding: 1,
                  rel: 0,
                  iv_load_policy: 3
                }
              }
            }}
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            {/* Center Play/Pause Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-blue-500/80 hover:bg-blue-600/80 flex items-center justify-center backdrop-blur-sm"
              >
                {isPlaying ? (
                  <PauseIcon className="w-10 h-10 text-white" />
                ) : (
                  <img src={PlayIcon} className="w-10 h-10 brightness-0 invert" alt="Play" />
                )}
              </motion.button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 tablet:p-8 bg-gradient-to-t from-black/90 to-transparent">
              {/* Title and Info */}
              <div className="mb-6">
                <h1 className="text-2xl tablet:text-3xl font-bold text-white mb-2">
                  {movieName || 'Movie Title'}
                </h1>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <span>{formatTime(duration)}</span>
                  <span>•</span>
                  <span>HD</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div 
                className="w-full h-1 bg-white/20 rounded-full mb-6 cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  playerRef.current?.seekTo(pos);
                }}
              >
                <div 
                  className="h-full bg-blue-500 rounded-full relative"
                  style={{ width: `${progress * 100}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {isPlaying ? (
                      <PauseIcon className="w-6 h-6 text-white" />
                    ) : (
                      <img src={PlayIcon} className="w-6 h-6 brightness-0 invert" alt="Play" />
                    )}
                  </button>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                      <VolumeIcon className="w-6 h-6 text-white" />
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-20 tablet:w-32 accent-blue-500"
                    />
                  </div>

                  <div className="hidden tablet:flex items-center text-white text-sm">
                    <span>{formatTime(duration * progress)}</span>
                    <span className="mx-2">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <button 
                  onClick={toggleFullScreen}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <FullscreenIcon className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Information Section */}
      <div className="px-4 tablet:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">About {movieName}</h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Movie Details */}
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4 mb-8">
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Release Date</h3>
              <p className="text-white">2023</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Genre</h3>
              <p className="text-white">Action, Drama</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Duration</h3>
              <p className="text-white">{formatTime(duration)}</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-1">Quality</h3>
              <p className="text-white">HD</p>
            </div>
          </div>

          {/* Cast Section */}
          <h2 className="text-2xl font-bold text-white mb-4">Cast</h2>
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-[#1E293B] rounded-lg p-4">
                <div className="w-20 h-20 rounded-full bg-gray-700 mb-3 mx-auto" />
                <h3 className="text-white text-center">Actor Name</h3>
                <p className="text-gray-400 text-sm text-center">Character</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieStreams;
