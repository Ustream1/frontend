import React from 'react';
import { Link } from 'react-router-dom'

import LogoBlue from '../assets/images/logo_blue.png';

const VerifyAddress = () => {
    return (
        <div className='w-full max-w-[480px] mx-auto h-full relative px-5 tablet:px-10 laptop:px-16 pt-24 flex flex-col'>
            <div className='w-full flex justify-center'>
                <div>
                    <img src={LogoBlue} alt="" />
                </div>
            </div>

            <h2 className='text-deep_blue font-semibold mt-8'>Verify email address</h2>
            <p className='text-[13px] text-[#AAAAAA] mt-2'>To verify your email, we have sent you a One Time Password (OTP) to Dayoadams31@gmaiL.com </p>
            <p className='text-deep_blue font-semibold mt-3 mb-6 text-sm'>(Change)</p>
            <input type="text" className='w-full py-2 px-3 outline-none border border-[#d9d9d9] rounded-md' />
            <div className='w-full flex justify-center mt-10'>
                <button className='bg-deep_blue px-7 w-[fit-content] py-2 rounded-md text-[white]'>
                    Create your Ustream account
                </button>
            </div>
            <small className='text-[12px] text-deep_blue mt-3 font-semibold'>By creating an account, you agree to Ustream’s condition of Use and Privacy Notice.  </small>
            <Link className='mt-7 font-semibold text-center'>Resend OTP</Link>
        </div>
    )
}

export default VerifyAddress;
