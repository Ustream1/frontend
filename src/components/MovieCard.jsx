import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const MovieCard = ({
  MovieImage,
  PlayIcon,
  FavoriteIcon,
  StarIcon,
  UstreamPlay,
  DownloadIcon,
  movie,
}) => {
  return (
    <Link to={`/app/stream?name=${movie?.name}&link=${movie?.link}`}>
      <div className="min-w-[150px] h-[200px] shadow-xl overflow-hidden rounded-md flex flex-col">
        <div className="w-full h-[107px] max-h-[55%] relative">
          <img src={MovieImage} alt="" />
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={PlayIcon}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              alt=""
            />
            <p className="text-[white] text-[8px] absolute left-2 bottom-0">
              {movie?.name}
            </p>
          </div>
        </div>
        <div className="w-full h-[93px] bg-deep_blue p-2 relative">
          <div className="w-full flex items-center justify-between">
            <img src={FavoriteIcon} alt="" />
            <div className="flex items-center gap-1">
              <div>
                <img src={StarIcon} alt="" />
              </div>
              <small className="text-gray-primary text-[10px]">4</small>
            </div>
          </div>
          <div className="w-full flex items-center justify-between absolute left-0 bottom-[10px] px-1">
            <div className="w-[45%] h-[20px] flex items-center justify-between bg-gray-primary p-[2px] rounded-sm">
              <small className="text-[8px] font-semibold">Stream</small>
              <img src={UstreamPlay} alt="" />
            </div>
            <div className="w-[45%] h-[20px] flex items-center justify-between bg-gray-primary p-[2px] rounded-sm">
              <small className="text-[8px] font-semibold">Download</small>
              <img src={DownloadIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
