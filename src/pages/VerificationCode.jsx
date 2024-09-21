import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'

const VerificationCode = () => {

    const [codes, setCodes] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const newCodes = [...codes];
        newCodes[index] = value;
        setCodes(newCodes);

        if (value && index < codes.length - 1) {
        inputRefs.current[index + 1].focus();
        } else if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className='w-full max-w-[480px] mx-auto h-full relative px-5 tablet:px-10 laptop:px-16 pt-20 pb-6 flex flex-col items-center text-deep_blue'>
            <div className='bg-[#26252580] h-[70px] w-[70px] tablet:h-[100px] tablet:w-[100px] rounded-full flex items-center justify-center flex-col'>
                <span className="material-symbols-outlined icon_filled tablet:text-4xl">lock</span>
                <span>*****</span>
            </div>
            <h2 className='mt-4 font-semibold'>Enter verification code</h2>
            <p className='mt-4 text-[12px] '>A 6 digit verification code has been sent to ola***********21@gmail.com, please check your email and enter the code below</p>
            <form action="" className='mt-7 w-full'>
                <div className='flex justify-center gap-2'>
                    {codes.map((code, index) => (
                        <input
                            key={index}
                            type="text"
                            className='py-2 px-2 rounded-md w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px] text-center outline-none border border-[#d9d9d9]'
                            maxLength={1}
                            value={code}
                            onChange={(e) => handleChange(index, e.target.value)}
                            ref={(el) => (inputRefs.current[index] = el)}
                        />
                    ))}      
                </div>

                <p className='mt-3 text-[12px] text-center'>Didn't recieve a verification code? <span className='font-semibold'>Resend</span></p>

                <button className='w-full mt-8 bg-deep_blue text-[white] py-2 rounded-md'>
                    <Link to='' className='w-full h-full py-2 outline-none'>VERIFY</Link>
                </button>
            </form>
        </div>
    )
}

export default VerificationCode
