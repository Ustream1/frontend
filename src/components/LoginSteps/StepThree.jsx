import React from 'react'

import SkipTwoImage from '../../assets/images/skip_three_image.png';

const StepThree = () => {
  return (
    <div className="min-w-full h-full relative px-5 tablet:px-10 laptop:px-16">

      <div className='max-w-[550px] pt-[100px] mx-auto'>
        <div className='w-full flex items-center justify-center'>
        </div>

        <div className="w-full grid place-items-center ">
          <img src={SkipTwoImage} className='w-[75%] tablet:w-[70%]' alt="" />
        </div>

        <h2 className='mt-10 font-semibold text-center'>You can Earn cash by you just subscribing with Fiat or your $Stream token </h2>
        <p className='px-5 text-center text-[#4d4c4c] mt-5 text-[12px] tablet:text-sm'>All you need to do to Earn cash is subscribe with Fiat or your $stream token without no hassle</p>
      </div>
    </div>
  )
}

export default StepThree
