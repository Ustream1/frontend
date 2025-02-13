import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import Navigation from "../components/Navigation";

import Logo from "../assets/images/logo_blue.png";
import UserImage from "../assets/images/user_image.png";
import SearchIcon from "../assets/images/search.png";
import FilterIcon from "../assets/images/filter_icon.png";
import NotificationIcon from "../assets/images/notification_icon.png";
import MovieImage from "../assets/images/movie_image.png";
import PlayIcon from "../assets/images/play_icon.png";
import FavoriteIcon from "../assets/images/favorite_icon.png";
import StarIcon from "../assets/images/star_icon.png";
import UstreamPlay from "../assets/images/ustream_play_icon.png";
import DownloadIcon from "../assets/images/download_icon.png";
import MovieCard from "../components/MovieCard";
import { movies } from "../mocks/movies.js";

const FEATURED_MOVIE_IMAGE = "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg"; // Oppenheimer poster
const MOVIE_POSTERS = [
  "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", // Oppenheimer
  "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg", // Barbie
  "https://image.tmdb.org/t/p/w500/kTeEtxwgpb1vY7HFQrtz5Xsy32I.jpg", // Dune 2
  "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg", // Inception
  "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", // Guardians 3
  "https://image.tmdb.org/t/p/w500/A7SobaUTvb6d5Z3dpOhFxPG0RQf.jpg", // Interstellar
];

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const updatedMovies = movies.map((movie, index) => ({
    ...movie,
    image: MOVIE_POSTERS[index % MOVIE_POSTERS.length]
  }));

  return (
    <div className="w-full min-h-screen bg-[#0F172A] pt-6 pb-16 relative">
      {/* Header Section */}
      <header className="flex justify-between items-center px-4 tablet:px-8">
        <div className="w-[100px] mobile:w-[150px] hover:opacity-90 transition-opacity">
          <img src={Logo} className="w-full brightness-0 invert" alt="Ustream Logo" />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/20 hover:border-blue-400/30 transition-colors">
            <img src={UserImage} className="w-full h-full object-cover" alt="User Profile" />
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="w-full mt-6 flex gap-3 px-4 tablet:px-8">
        <div className="bg-[#1E293B] border-none w-[80%] rounded-full max-w-[400px] h-[50px] flex items-center gap-3 px-4 hover:bg-[#233047] transition-colors">
          <img src={SearchIcon} alt="Search" className="w-5 h-5 brightness-0 invert opacity-70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-full w-full outline-none bg-transparent text-sm text-gray-200 placeholder:text-gray-400"
            placeholder="Search for movies..."
          />
        </div>
        <button className="bg-[#1E293B] border-none w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer hover:bg-[#233047] transition-colors">
          <img src={FilterIcon} className="w-5 h-5 brightness-0 invert opacity-70" alt="Filter" />
        </button>
        <button className="bg-[#1E293B] border-none w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer hover:bg-[#233047] transition-colors relative">
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
          <img src={NotificationIcon} className="w-5 h-5 brightness-0 invert opacity-70" alt="Notifications" />
        </button>
      </div>

      {/* Featured Movie Section */}
      <section className="relative w-full h-[50vh] tablet:h-[70vh] mt-8">
        <div className="absolute inset-0">
          <img 
            src={FEATURED_MOVIE_IMAGE}
            className="w-full h-full object-cover"
            alt="Featured movie" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end p-8 tablet:p-12 max-w-2xl">
          <h1 className="text-4xl tablet:text-6xl font-bold text-white mb-4">
            Oppenheimer
          </h1>
          <p className="text-gray-300 mb-6 line-clamp-2">
            The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
              <img src={PlayIcon} className="w-5 h-5 brightness-0 invert" alt="" />
              Play Now
            </button>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-md font-medium backdrop-blur-sm">
              <img src={DownloadIcon} className="w-5 h-5 brightness-0 invert" alt="" />
              Download
            </button>
          </div>
        </div>
      </section>

      {/* Movie Sections */}
      <section className="mt-12">
        <div className="flex items-center justify-between px-4 tablet:px-8 mb-6">
          <h2 className="text-xl font-bold text-white">New Movies</h2>
          <button className="text-sm text-white hover:text-blue-400 font-medium transition-colors">View All</button>
        </div>

        <div className="w-full flex gap-4 overflow-x-scroll movie_overflow py-4 px-4 tablet:px-8 hide-scrollbar">
          {updatedMovies.map((movie) => (
            <MovieCard
              key={movie.name}
              MovieImage={movie.image}
              PlayIcon={PlayIcon}
              movie={movie}
              FavoriteIcon={FavoriteIcon}
              StarIcon={StarIcon}
              UstreamPlay={UstreamPlay}
              DownloadIcon={DownloadIcon}
            />
          ))}
        </div>
      </section>

      {/* Romance Section */}
      <section className="mt-12">
        <div className="flex items-center justify-between px-4 tablet:px-8 mb-6">
          <h2 className="text-xl font-bold text-white">Romance</h2>
          <button className="text-sm text-white hover:text-blue-400 font-medium transition-colors">View All</button>
        </div>

        <div className="w-full flex gap-4 overflow-x-scroll movie_overflow py-4 px-4 tablet:px-8 hide-scrollbar">
          {[0, 0, 0, 0, 0, 0].map((_, index) => (
            <MovieCard
              key={index}
              MovieImage={MovieImage}
              PlayIcon={PlayIcon}
              FavoriteIcon={FavoriteIcon}
              StarIcon={StarIcon}
              UstreamPlay={UstreamPlay}
              DownloadIcon={DownloadIcon}
            />
          ))}
        </div>
      </section>

      {/* Thriller Section */}
      <section className="mt-12">
        <div className="flex items-center justify-between px-4 tablet:px-8 mb-6">
          <h2 className="text-xl font-bold text-white">Thriller</h2>
          <button className="text-sm text-white hover:text-blue-400 font-medium transition-colors">View All</button>
        </div>

        <div className="w-full flex gap-4 overflow-x-scroll movie_overflow py-4 px-4 tablet:px-8 hide-scrollbar">
          {[0, 0, 0, 0, 0, 0].map((_, index) => (
            <MovieCard
              key={index}
              MovieImage={MovieImage}
              PlayIcon={PlayIcon}
              FavoriteIcon={FavoriteIcon}
              StarIcon={StarIcon}
              UstreamPlay={UstreamPlay}
              DownloadIcon={DownloadIcon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Movies;
