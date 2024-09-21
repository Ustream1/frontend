import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className='w-full max-w-[480px] mx-auto h-full relative px-5 tablet:px-10 laptop:px-16 pt-20 pb-6 flex flex-col items-center text-deep_blue'>
           <div className='bg-[#26252580] h-[70px] w-[70px] tablet:h-[100px] tablet:w-[100px] rounded-full flex items-center justify-center flex-col'>
                <span className="material-symbols-outlined icon_filled tablet:text-4xl">lock</span>
                <span>*****</span>
            </div>
            <h2 className='mt-4 font-semibold'>Forgot your password?</h2>
            <form action="" className='mt-7'>
                <label htmlFor="" className='font-semibold text-sm'>Please enter your email</label>
                <input type="text" className='py-2 px-2 rounded-md w-full outline-none border  border-[#d9d9d9]' />

                <button className='w-full mt-8 bg-deep_blue text-[white] py-2 rounded-md'>
                    <Link to='/verification_code' className='w-full h-full py-2'>SEND VERIFICATION CODE</Link>
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword
