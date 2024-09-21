import React from 'react'

import Amico from '../../assets/images/amico.png';
import Bro from '../../assets/images/bro.png';
import Rafiki from '../../assets/images/rafiki.png';

const StepOne = () => {
  return (
    <div className="min-w-full h-full relative px-5 tablet:px-10 laptop:px-16">
        <div className='max-w-[550px] pt-[40px] mx-auto'>
            <div className='w-[80%] flex items-center justify-center'>
                <div className='w-full flex items-center justify-between gap-4'>
                    <div className='w-[100px] h-[60px] tablet:w-[120px] tablet:h-[80px] bg-gray-primary-200 rounded-[80%] grid place-items-center'>
                        <img src={Bro} className='w-[50%] object-cover' alt="" />
                    </div>
                    <div className='w-[100px] h-[60px] tablet:w-[120px] tablet:h-[80px] bg-gray-primary-200 rounded-[80%] grid place-items-center'>
                        <img src={Amico} className='w-[50%] object-cover' alt="" />
                    </div>
                </div>
            </div>

            <div className="w-full grid place-items-center ">
                <img src={Rafiki} className='w-[75%] tablet:w-[70%]' alt="" />
            </div>

            <h2 className='mt-10 font-semibold text-center'>Ever wondered how you can Earn cash  while
            watching your favorite movies?</h2>
            <p className='px-5 text-center text-[#4d4c4c] mt-5 text-[12px] tablet:text-sm'>Yes! you read that right, you can earn cash for streaming that movie you have always wanted</p>
        </div>
    </div>
  )
}

export default StepOne
