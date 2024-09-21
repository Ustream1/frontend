import React, { useState, useEffect } from 'react';

import StepOne from '../components/LoginSteps/StepOne'
import StepTwo from '../components/LoginSteps/StepTwo'
import StepThree from '../components/LoginSteps/StepThree'
import LoginComp from '../components/LoginSteps/LoginComp'

import Logo from '../assets/images/logo.png';

const Login = () => {

  const [showDiv, setShowDiv] = useState(true);
  const [counter, setCounter] = useState(0);
  
  const increaseCounter = () => {
    if (counter < 3) {
      setCounter(prev => prev + 1)
    }
  }
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(false);
    }, 2000);
  }, []);



  return (
    <div className="w-full h-screen bg-gray-primary relative overflow-x-hidden">
      
      {counter < 3 && <p className='fixed top-[10px] right-[3%] cursor-pointer outline-none z-10' onClick={() => setCounter(3)}>Skip</p>}

      <div className={`w-full flex`} style={{transform: `translateX(-${counter}00%)`}}>
        <StepOne />
        <StepTwo />
        <StepThree />
        <LoginComp />
      </div>

      {counter < 3 && <div className='fixed bottom-3 mt-10 w-full px-5 tablet:px-10 laptop:px-16 bg-gray-primary'>
        <div className="w-full max-w-[550px] mx-auto flex items-center justify-between">
          <span className='material-symbols-outlined w-[40px] h-[40px] rounded-full grid place-items-center text-[#6a6969] border cursor-pointer hover:bg-deep_blue hover:text-[white] transition-all duration-300 ease select-none' onClick={decreaseCounter}>arrow_back</span>

          <div className='flex items-center gap-2'>
            <span className={`w-[10px] h-[10px] cursor-pointer rounded-full ${counter === 0 ? 'bg-deep_blue' : 'bg-gray-primary-200'}`}></span>
            <span className={`w-[10px] h-[10px] cursor-pointer rounded-full ${counter === 1 ? 'bg-deep_blue' : 'bg-gray-primary-200'}`}></span>
            <span className={`w-[10px] h-[10px] cursor-pointer rounded-full ${counter === 2 ? 'bg-deep_blue' : 'bg-gray-primary-200'}`}></span>
          </div>

          <span className='material-symbols-outlined w-[40px] h-[40px] rounded-full grid place-items-center text-[#6a6969] border cursor-pointer hover:bg-deep_blue hover:text-[white] transition-all duration-300 ease select-none' onClick={increaseCounter}>arrow_forward</span> 
        </div>
      </div>}

      {showDiv && <div className='fixed z-20 top-0 left-0 h-full w-full bg-deep_blue flex items-center justify-center'>
        <img src={Logo} className='pre_loader' alt="" />
      </div>}
    </div>
  )
}

export default Login;
