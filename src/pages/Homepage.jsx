import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import Logo from "../assets/images/logo.png";
import BackgroundImage from "../assets/images/hero_image.png";
import ImageBig from "../assets/images/image_big.png";
import StarBig from "../assets/images/star_big.png";
import Coin from "../assets/images/coin.png";
import Community from "../assets/images/dao_community.png";
import Earning from "../assets/images/cash_earning.png";
import StarYellow from "../assets/images/star_icon.png";
import Location from "../assets/images/location.png";
import Email from "../assets/images/email.png";
import Call from "../assets/images/contact.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Linkedin from "../assets/images/linkedin.png";

import { Link } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import { OurUsers } from "../OurUsers";

const Homepage = () => {
  const { authenticated } = useAuth();
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div className="w-full min-h-screen bg-deep_blue">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav className="w-full h-[100px] flex items-center justify-between px-5 tablet:px-10 laptop:px-20">
          <div className="w-[120px]">
            <img src={Logo} alt="" />
          </div>
          <ul className="laptop:flex items-center hidden text-[white] gap-16 font-semibold">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li
              className={`${
                authenticated ? "hidden" : ""
              } border px-10 rounded-md py-2`}
            >
              <Link to="/login">Login</Link>
            </li>
            <li
              className={`${
                authenticated ? "hidden" : ""
              } border px-10 rounded-md py-2 text-deep_blue bg-[white]`}
            >
              <Link to="sign_up">Register</Link>
            </li>
          </ul>
          <span
            className="material-symbols-outlined text-[white] cursor-pointer laptop:hidden"
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            {openNavbar ? "close" : "menu"}
          </span>
        </nav>

        {/* Mobile Menu */}

        <div
          className={`fixed transition-[left] ease duration-300 ${
            openNavbar ? "left-[0]" : "left-[-100%]"
          } top-0 w-[70%] h-screen bg-deep_blue laptop:hidden`}
        >
          <ul className="flex flex-col px-10 text-[white] gap-6 font-semibold mt-[50px]">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li
              className={`${
                authenticated ? "hidden" : ""
              } border px-10 rounded-md py-2`}
            >
              <Link to="/login">Login</Link>
            </li>
            <li
              className={`${
                authenticated ? "hidden" : ""
              } border px-10 rounded-md py-2 text-deep_blue bg-[white]`}
            >
              <Link to="sign_up">Register</Link>
            </li>
          </ul>
        </div>

        <nav></nav>

        {/* Hero section */}

        <div className="w-full h-full flex flex-col items-center text-[white] px-5">
          <h1 className="pt-12 font-semibold text-2xl tablet:text-[45px] laptop:text-5xl text-center max-w-[750px] tablet:leading-[60px]">
            Where Entertainment Meets Crypto.
          </h1>
          <p className="w-[480px] max-w-[90%] mt-7 text-center text-sm tablet:text-[16px] tablet:leading-[25px] text-[#AAAAAA]">
            {" "}
            Welcome to Ustream a platform that brings you all in one mouth
            watering offers that earns you cash when you stream movies with the
            help of crypto.
          </p>
          <button className="mt-10">
            <Link
              to="/app/movies"
              className="bg-[white] text-deep_blue py-2 px-6 mt-5 rounded-md font-semibold"
            >
              Stream Now
            </Link>
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full relative">
        <div className="w-full relative">
          <img src={ImageBig} alt="" />
          <div className="absolute bottom-10 tablet:bottom-5 laptop:bottom-10 tablet:left-28 laptop:left-52 left-10 w-[100px] tablet:w-[200px] laptop:w-[300px]">
            <img src={StarBig} alt="" />
          </div>
          <div className="absolute bottom-10 tablet:bottom-5 laptop:bottom-10 tablet:right-28 laptop:right-52 right-10 w-[100px] tablet:w-[200px] laptop:w-[300px]">
            <img src={StarBig} alt="" />
          </div>
        </div>
        <div className="absolute top-[50%] w-full flex justify-between px-3 tablet:px-10">
          <span className="material-symbols-outlined rounded-full grid place-items-center w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px] bg-[white] text-[30px] tablet:text-[40px] cursor-pointer">
            chevron_left
          </span>
          <span className="material-symbols-outlined rounded-full grid place-items-center w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px] bg-[white] text-[30px] tablet:text-[40px] cursor-pointer">
            chevron_right
          </span>
        </div>
      </div>

      {/* Our Services */}
      <div className="mt-10 px-5 tablet:px-10 min-h-[80vh]">
        <TitleComponent title={"Our Services"} />
        <div className="flex justify-center tablet:justify-between flex-wrap w-full text-[white] px-5 tablet:px-10 pt-20 gap-10">
          <Link to="/" className="grid place-items-center gap-5 tablet:gap-7">
            <img src={Coin} alt="" />
            <p>Cryptocurrency</p>
          </Link>
          <Link
            to="/app/community"
            className="grid place-items-center gap-5 tablet:gap-7"
          >
            <img src={Community} alt="" />
            <p>DAO Community</p>
          </Link>
          <Link
            to="/app/earnings"
            className="grid place-items-center gap-5 tablet:gap-7"
          >
            <img src={Earning} alt="" />
            <p>Cash Earning</p>
          </Link>
        </div>
      </div>

      {/* Choose Plan */}
      <div className="pt-10">
        <TitleComponent title={"Choose Your Plan"} />
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          <div className="w-full max-w-[300px] h-[400px] border border-[#d2d2a2] rounded-lg flex flex-col justify-between items-center p-5 text-[white]">
            <p className="font-bold tablet:text-2xl">Free</p>
            <p className="font-bold tablet:text-4xl">$0.00</p>
            <p className="Stream movies text-[#AAAAAA]">Stream Movies</p>
            <button className="font-semibold px-5 py-1 border rounded-md">
              Set Plan
            </button>
          </div>
          <div className="w-full max-w-[300px] h-[400px] border bg-[white] rounded-lg flex flex-col justify-between items-center p-5 text-deep_blue">
            <p className="font-bold tablet:text-2xl">Premium</p>
            <p className="font-bold tablet:text-4xl">$1.00</p>
            <div>
              <p className="Stream movies text-[#AAAAAA]">Stream Movies</p>
              <p className="Stream movies text-[#AAAAAA]">Download Movies</p>
              <p className="Stream movies text-[#AAAAAA]">Earn</p>
              <p className="Stream movies text-[#AAAAAA]">Vote</p>
            </div>
            <button className="font-semibold px-5 py-1 border rounded-md bg-deep_blue text-[white]">
              Set Plan
            </button>
          </div>
        </div>
      </div>

      {/* What our user's say */}
      <div className="pt-28 pb-16 min-h-screen">
        <TitleComponent title={"What Our User's Say"} />
        <div className="flex flex-wrap justify-center tablet gap-8 mt-16 px-5 tablet:px-10 laptop:px-20">
          {OurUsers.map((user) => (
            <div
              key={user.id}
              className="w-[300px] max-w-[90%] min-h-[300px] bg-[white] rounded-xl p-5 text-deep_blue"
            >
              <div className="flex gap-10">
                <div className="max-w-[50px]">
                  <img src={user.userImage} alt="" />
                </div>
                <p className="font-bold tablet:text-xl">User {user.id}</p>
              </div>
              <div className="flex mt-3 px-3">
                <span className="material-symbols-outlined rotate-180">
                  format_quote
                </span>
                <span className="text-2xl">..</span>
              </div>
              <p className="px-5">{user.text}</p>
              <div className="flex items-center justify-end max-w-[80%] px-3">
                <span className="text-2xl">..</span>
                <span className="material-symbols-outlined pt-1">
                  format_quote
                </span>
              </div>

              <div className="w-full flex justify-end">
                {Array(user.rating)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={StarYellow} alt="" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full min-h-[60vh] bg-[#F2F2F2] text-deep_blue px-5 tablet:px-10 laptop:px-36 py-8">
        <ul className="flex flex-wrap justify-between gap-x-40 gap-y-8 border-b border-[#d9d9d9] pb-10">
          <li className="flex gap-4 ">
            <div className="bg-deep_blue w-[50px] h-[50px] grid place-items-center rounded-full">
              <img src={Location} className="w-[70%]" alt="" />
            </div>
            <div>
              <h2 className="font-semibold">Address</h2>
              <p>Akure, Nigeria 304110</p>
            </div>
          </li>
          <li className="flex gap-4 ">
            <div className="bg-deep_blue w-[50px] h-[50px] grid place-items-center rounded-full">
              <img src={Email} className="w-[60%]" alt="" />
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>Mentcheck@gmail.com</p>
            </div>
          </li>
          <li className="flex gap-4 ">
            <div className="bg-deep_blue w-[50px] h-[50px] grid place-items-center rounded-full">
              <img src={Call} className="w-[50%]" alt="" />
            </div>
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p>+234 - 890-678-3738</p>
            </div>
          </li>
        </ul>

        <ul className="flex flex-wrap justify-between gap-x-20 gap-y-8 pt-10">
          <li className="desktop:border-r border-[#d9d9d9] pr-28">
            <h2 className="font-semibold text-center">Quick links</h2>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <Link className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[white] bg-[#182A4566] h-[35px] w-[35px] rounded-full grid place-items-center">
                    trending_flat
                  </span>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[white] bg-[#182A4566] h-[35px] w-[35px] rounded-full grid place-items-center">
                    trending_flat
                  </span>
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[white] bg-[#182A4566] h-[35px] w-[35px] rounded-full grid place-items-center">
                    trending_flat
                  </span>
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="desktop:border-r border-[#d9d9d9] pr-28">
            <h2 className="font-semibold text-center">Follow Us</h2>
            <div className="flex gap-6 mt-6">
              <Link>
                <img
                  src={Facebook}
                  className="w-[30px] tablet:w-[40px] object-cover"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src={Twitter}
                  className="w-[30px] tablet:w-[40px] object-cover"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  src={Linkedin}
                  className="w-[30px] tablet:w-[40px] object-cover"
                  alt=""
                />
              </Link>
            </div>
          </li>
          <li>
            <h2 className="font-semibold text-center">Services</h2>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <Link className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[white] bg-[#182A4566] h-[35px] w-[35px] rounded-full grid place-items-center">
                    trending_flat
                  </span>
                  <p>Cryptocurrency</p>
                </Link>
              </li>
              <li>
                <Link to="/app/community" className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[white] bg-[#182A4566] h-[35px] w-[35px] rounded-full grid place-items-center">
                    trending_flat
                  </span>
                  <p>DAO Community</p>
                </Link>
              </li>
              <li>
                <Link to="/app/earnings" className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[white] bg-[#182A4566] h-[35px] w-[35px] rounded-full grid place-items-center">
                    trending_flat
                  </span>
                  <p>Earnings</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Homepage;
