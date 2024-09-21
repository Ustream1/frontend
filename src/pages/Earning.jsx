import React, { useEffect, useRef, useState } from "react";

import VideoIcon from "../assets/images/ustream_play_icon.png";
import Money from "../assets/images/money.png";
import { Link } from "react-router-dom";

const Earning = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const streamingHistory = user.streamingHistory;
      const uniqueMovies = Array.from(
        new Set(streamingHistory.map((item) => item.movieName))
      ).map((movieName) => {
        const movie = streamingHistory.find(
          (item) => item.movieName === movieName
        );
        return {
          movieName,
          streamingPoints: movie.streamingPoints,
          watchedTime: movie.watchedTime,
        };
      });
      setMovies(uniqueMovies);
    }
  }, []);
  const [convert, setConvert] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const navbarOutsideClick = (e) => {
      if (!wrapperRef.current.contains(e.target)) {
        setConvert(false);
      } else {
        setConvert(true);
      }
    };

    document.addEventListener("mousedown", navbarOutsideClick);

    return () => {
      document.removeEventListener("mousedown", navbarOutsideClick);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-screen pt-10 relative">
      <h1 className="text-deep_blue text-xl tablet:text-3xl font-semibold text-center">
        Earnings
      </h1>
      <div className="max-w-[900px] mx-auto pt-10 px-5">
        <div className="text-deep_blue font-semibold flex justify-between">
          <p>Streams</p>
          <p>Earned</p>
        </div>
        <ul className="w-full mt-5 flex flex-col gap-y-6">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="w-full flex justify-between border-b border-[#d9d9d9] pb-2"
            >
              <div className="flex items-center gap-2">
                <p>
                  <img src={VideoIcon} alt="" />
                </p>
                <p className="text-[11px] mobile:text-[13px] tablet:text-sm">
                  {movie.movieName}
                </p>
              </div>
              <p className="flex items-center gap-1">
                <img src={Money} alt="" />
                <span>{movie.streamingPoints} points</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center mt-6">
          <button
            className="px-8 py-2 rounded-md bg-deep_blue text-[white]"
            onClick={() => setConvert(true)}
          >
            Convert
          </button>
        </div>
      </div>

      <div
        className={`fixed transition-[bottom] ease duration-500 ${
          convert ? "bottom-[0]" : "bottom-[-100%]"
        } left-0 w-full h-full bg-[#26252580] pt-24 z-10`}
      >
        <div
          className="w-full h-full bg-[white] rounded-tl-[40px] rounded-tr-[40px] tablet:rounded-tl-[50px] tablet:rounded-tr-[50px] pt-1 px-5 tablet:px-8"
          ref={wrapperRef}
        >
          <p
            className="w-[50px] h-[5px] rounded-2xl bg-[#26252580] mx-auto cursor-pointer"
            onClick={() => setConvert(false)}
          ></p>
          <h2 className="pt-10 font-semibold text-deep_blue text-sm tablet:text-[18px]">
            Convert your $stream to cash
          </h2>
          <p className="text-[gray] text-[12px] tablet:text-sm">
            Convert your $stream and get cash deposited into your bank account
          </p>
          <form
            action=""
            onSubmit={handleFormSubmit}
            className="w-full mt-10 flex flex-col gap-y-20"
          >
            <div className="w-full h-[50px] border border-[#d9d9d9] rounded-md flex items-center justify-between px-3">
              <p>($stream)</p>
              <input
                type="text"
                className="outline-none border-0 w-full h-full text-end text-deep_blue"
                placeholder="Enter Amount"
              />
            </div>
            <div className="w-full h-[50px] border border-[#d9d9d9] rounded-md flex items-center justify-between px-3">
              <p>(USD)</p>
              <input
                type="text"
                className="outline-none border-0 w-full h-full text-end text-deep_blue"
                placeholder="Enter Amount"
              />
            </div>
            <div className="w-full flex justify-center ">
              <button className="px-8 py-2 rounded-md bg-deep_blue text-[white]">
                Withdraw
              </button>
            </div>
            <p className="mt-[-20px] text-[12px] mobile:text-sm">
              Haven't added card yet?{" "}
              <Link className="text-deep_blue font-semibold">Add card</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Earning;
