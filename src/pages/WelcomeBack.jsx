import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import LogoBlue from "../assets/images/logo_blue.png";
import GoogleIcon from "../assets/images/google_icon.png";
import ConnectToWalletButton from "../components/ConnectButton";

const WelcomeBack = () => {
  const { setAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState("Sign in");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    let valid = true;

    if (formData.password === "") {
      newErrors.password = "Password cannot be empty";
      valid = false;
    }
    if (formData.username === "") {
      newErrors.username = "Username cannot be empty";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const LoginUser = async () => {
    setIsLoading("Signing in...");
    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://ustream.onrender.com/api/users/login",
        requestOptions
      );

      const result = await response.text();
      const parsedResult = JSON.parse(result);
      if (response.ok) {
        const token = parsedResult.data.token;
        localStorage.setItem("token", token);
      }

      setIsLoading("Sign in");
      setMessage(parsedResult.message);
      setAuthenticated(true);

      if (parsedResult.status === 0) {
        navigate("/categories");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      LoginUser();
    } else {
      console.log(errors);
    }
  };

  return (
    <div className="w-full max-w-[480px] mx-auto h-full relative px-5 tablet:px-10 laptop:px-16 pt-20 pb-6 flex flex-col items-center">
      <div>
        <img src={LogoBlue} alt="" />
      </div>

      <h2 className="text-deep_blue font-semibold mt-8">Welcome back</h2>
      <p className="text-[13px] mt-2 text-[#AAAAAA] mb-3">
        Welcome back! Please connect your wallet.
      </p>
      {message && (
        <p className="py-3 mt-2 w-full max-w-[450px] mx-auto text-[white] text-center bg-[#642400]">
          {message}
        </p>
      )}
      {/* <form action="" onSubmit={handleFormSubmit} className={`w-full flex flex-col ${!message && 'mt-8'}`}>
                <label htmlFor="" className='block text-sm mb-1 text-deep_blue font-semibold'>Username</label>
                <input
                    type="text"
                    className={`w-full py-2 px-3 outline-none border ${errors.username ? 'mb-[3px]' : ''} border-[#AAAAAA] rounded-md`}
                    placeholder='Username'
                    value={formData.username}
                    onChange={(e)=> setFormData({...formData, username: e.target.value })}
                    />
                {errors.username && <small className='text-[#dc3545] font-semibold mb-2'>{errors.username}</small>}
                
                <label htmlFor="" className='block text-sm mt-6 mb-1 text-deep_blue font-semibold'>Password</label>
                <input
                    type="password"
                    className={`w-full py-2 px-3 outline-none border mt-3 ${errors.password ? 'mb-[3px]' : ''} border-[#AAAAAA] rounded-md`}
                    placeholder='Password'
                    value={formData.password}
                    onChange={(e)=> setFormData({...formData, password: e.target.value })}
                    />
                {errors.password && <small className='text-[#dc3545] font-semibold mb-2'>{errors.password}</small>}

                <div className='w-full flex justify-between items-center mt-3 font-semibold text-deep_blue text-[12px] mobile:text-sm'>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <p>Remember Me</p>
                    </div>
                    <Link to='/forgot_password'>Forgot password</Link>
                </div>

                <button className='w-full bg-deep_blue px-4 py-2 text-center rounded-md text-[white] mt-6'>
                    {isLoading}
                </button>
                <button className='w-full border border-[#AAAAAA] px-4 py-2 rounded-md text-deep_blue flex items-center justify-center gap-2 mt-3'>
                <img src={GoogleIcon} alt="" />
                    <p>Sign in with Google</p>
                </button>
                <p className='text-deep_blue text-[12px] mt-6 text-center'>Don't have an account yet? <Link to='/sign_up' className='font-semibold'>Sign Up</Link></p>
            </form> */}
      <ConnectToWalletButton />
    </div>
  );
};

export default WelcomeBack;
