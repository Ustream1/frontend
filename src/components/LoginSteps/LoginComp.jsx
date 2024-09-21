import React from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoBlue from "../../assets/images/logo_blue.png";
import GoogleIcon from "../../assets/images/google_icon.png";
import MetamaskIcon from "../../assets/images/metamask_icon.png";
import TwitterIcon from "../../assets/images/twitter_icon.png";
import { ConnectToWalletButton } from "../ConnectButton.jsx";
import { useAccount } from "wagmi";
import { useEffect } from "react";
const LoginComp = () => {
  return (
    <div className="min-w-full h-full relative px-5 tablet:px-10 laptop:px-16 flex flex-col items-center justify-center pb-6">
      <div className="mb-20 mt-10">
        <img src={LogoBlue} alt="" />
      </div>

      <h1 className="font-semibold text-xl tablet:text-3xl text-center text-deep_blue mb-10">
        Where Entertainment Meets Crypto.
      </h1>

      {/* <form action="" className="flex flex-col gap-4 w-full max-w-[450px]">
        <Link
          to="/sign_up"
          className="w-full bg-deep_blue px-4 py-[12px] rounded-md text-[white] text-center"
        >
          Sign up
        </Link>
        <button className="w-full border border-deep_blue px-4 py-[12px] rounded-md text-deep_blue flex items-center justify-center gap-2">
          <img src={GoogleIcon} alt="" />
          <p>Continue with Google</p>
        </button>
        <button className="w-full border border-deep_blue px-4 py-[12px] rounded-md text-deep_blue flex items-center justify-center gap-2">
          <img src={TwitterIcon} alt="" />
          <p>Continue with X</p>
        </button>
        <button className="w-full border border-deep_blue px-4 py-[12px] rounded-md text-deep_blue flex items-center justify-center gap-2">
          <img src={MetamaskIcon} alt="" />
          <p>Continue with Metamask</p>
        </button>
      </form> */}
      <ConnectToWalletButton />

      {/* <Link to="/sign_in" className="mt-7 text-deep_blue font-semibold">
        Login
      </Link> */}
    </div>
  );
};

export default LoginComp;
