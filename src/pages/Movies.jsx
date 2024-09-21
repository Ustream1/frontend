import React from "react";
import { Link } from "react-router-dom";

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
const Movies = () => {
  return (
    <div className="w-full min-h-screen pt-6 pb-16 relative">
      <div className="tablet:mx-8 w-[100px] mobile:w-[150px]">
        <img src={Logo} className="w-full" alt="" />
      </div>

      <div className="mx-2 tablet:mx-8 mt-4">
        <img src={UserImage} alt="" />
      </div>

      <div className="w-full h-[35px] tablet:h-[50px] mt-6 flex gap-3 px-2 tablet:px-8">
        <div className="bg-[#040B2E0D] w-[80%] rounded-md max-w-[400px] h-full flex items-center gap-3 px-3">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            className="h-full w-full outline-none bg-[transparent] text-[12px] tablet:text-sm"
            placeholder="Search for movies"
          />
        </div>
        <div className="bg-[#040B2E0D] min-w-[35px] tablet:min-w-[50px] rounded-full grid place-items-center cursor-pointer ">
          <img src={FilterIcon} className="w-[50%] object-cover" alt="" />
        </div>
        <div className="bg-[#040B2E0D] min-w-[35px] tablet:min-w-[50px] rounded-full grid place-items-center cursor-pointer">
          <img src={NotificationIcon} className="w-[50%] object-cover" alt="" />
        </div>
      </div>

      <div className="w-full h-[50px] bg-[#040B2E0D] text-deep_blue font-semibold px-2 tablet:px-8 flex items-center mt-8">
        New Movies
      </div>

      <div className="w-full flex gap-4 overflow-x-scroll movie_overflow mt-5 py-5 px-2 tablet:px-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.name}
            MovieImage={MovieImage}
            PlayIcon={PlayIcon}
            movie={movie}
            FavoriteIcon={FavoriteIcon}
            StarIcon={StarIcon}
            UstreamPlay={UstreamPlay}
            DownloadIcon={DownloadIcon}
          />
        ))}
      </div>

      <div className="w-full h-[50px] bg-[#040B2E0D] text-deep_blue font-semibold px-2 tablet:px-8 flex items-center mt-12">
        Romance
      </div>

      <div className="w-full flex gap-4 overflow-x-scroll movie_overflow mt-5 py-5 px-2 tablet:px-8">
        {[0, 0, 0, 0, 0, 0].map(() => (
          <MovieCard
            MovieImage={MovieImage}
            PlayIcon={PlayIcon}
            FavoriteIcon={FavoriteIcon}
            StarIcon={StarIcon}
            UstreamPlay={UstreamPlay}
            DownloadIcon={DownloadIcon}
          />
        ))}
      </div>

      <div className="w-full h-[50px] bg-[#040B2E0D] text-deep_blue font-semibold px-2 tablet:px-8 flex items-center mt-12">
        Triller
      </div>

      <div className="w-full flex gap-4 overflow-x-scroll movie_overflow mt-5 py-5 px-2 tablet:px-8">
        {[0, 0, 0, 0, 0, 0].map(() => (
          <MovieCard
            MovieImage={MovieImage}
            PlayIcon={PlayIcon}
            FavoriteIcon={FavoriteIcon}
            StarIcon={StarIcon}
            UstreamPlay={UstreamPlay}
            DownloadIcon={DownloadIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
