import React, { useState } from "react";
import ReactPlayer from "react-player";
import Logo from "../assets/images/logo_blue.png";
import UserImage from "../assets/images/user_image.png";
import { useLocation } from "react-router-dom";
const MovieStreams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const link = queryParams.get("link");

  const [watchedTime, setWatchedTime] = useState(0);
  const [streamingPoints, setStreamingPoints] = useState(0);

  const handleProgress = (progress) => {
    const { playedSeconds } = progress;
    setWatchedTime(playedSeconds);
    const points = calculateStreamingPoints(playedSeconds);
    setStreamingPoints(points);
    // console.log({ streamingPoints });
  };

  const calculateStreamingPoints = (watchedTime) => {
    const pointsPerMinute = 10;
    const watchedMinutes = Math.floor(watchedTime / 60);
    return watchedMinutes * pointsPerMinute;
  };
  const handleStreamEnd = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      user = {
        streamingHistory: [],
      };
    }
    const newStreamingHistory = [
      ...user.streamingHistory,
      {
        movieName: name,
        watchedTime: watchedTime,
        streamingPoints: streamingPoints,
      },
    ];
    user.streamingHistory = newStreamingHistory;
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="w-full min-h-screen pt-6 pb-16 relative">
      <div className="tablet:mx-8 w-[100px] mobile:w-[150px]">
        <img src={Logo} className="w-full" alt="" />
      </div>

      <div className="mx-2 tablet:mx-8 mt-4">
        <img src={UserImage} alt="" />
      </div>
      <div className="w-full mx-auto py-5">
        <ReactPlayer
          onProgress={handleProgress}
          pip={true}
          onEnded={handleStreamEnd}
          controls={true}
          config={{
            youtube: {
              playerVars: { showinfo: 2 },
            },
          }}
          style={{
            width: "100%",
            margin: "auto",
          }}
          url={link}
        />
      </div>
    </div>
  );
};

export default MovieStreams;
