import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

// Add the helper functions
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};

const MovieCard = ({
  MovieImage,
  PlayIcon,
  FavoriteIcon,
  StarIcon,
  UstreamPlay,
  DownloadIcon,
  movie,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (movie?.link) {
      const thumbUrl = getYouTubeThumbnail(movie.link);
      setThumbnail(thumbUrl);
    }
  }, [movie?.link]);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[200px] tablet:w-[280px] rounded-lg overflow-hidden group bg-[#1E293B]/40 ring-1 ring-white/10 hover:ring-blue-500/50 transition-all"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/app/stream?name=${movie?.name}&link=${movie?.link}`}>
        <div className="relative aspect-[16/9] w-full">
          <img
            src={thumbnail || MovieImage}
            className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            alt={movie?.name || 'Movie thumbnail'}
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg shadow-black/50">
              <img src={PlayIcon} className="w-6 h-6 brightness-0 invert" alt="Play" />
            </button>
          </div>
        </div>
      </Link>

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/90 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm"
        initial={false}
        animate={{ y: isHovered ? 0 : '100%' }}
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-medium text-sm tablet:text-base line-clamp-2 drop-shadow-lg">
            {movie?.name || 'Movie Title'}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded-md shadow-lg">
            <img src={StarIcon} className="w-3 h-3" alt="Rating" />
            <span className="text-xs font-bold text-black">{movie?.rating || '4.5'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm shadow-lg shadow-black/50 transition-colors">
              <img src={UstreamPlay} className="w-4 h-4 brightness-0 invert" alt="" />
              Stream
            </button>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-md text-sm shadow-lg shadow-black/50 transition-colors">
              <img src={DownloadIcon} className="w-4 h-4 brightness-0 invert" alt="" />
              Download
            </button>
          </div>
          
          <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center group shadow-lg shadow-black/50 transition-colors">
            <img
              src={FavoriteIcon}
              className="w-4 h-4 brightness-0 invert group-hover:scale-110 transition-transform"
              alt="Add to favorites"
            />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {movie?.genres?.map((genre, index) => (
            <span
              key={index}
              className="text-xs bg-white/20 text-gray-100 px-2 py-1 rounded-md shadow-sm shadow-black/50"
            >
              {genre}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
