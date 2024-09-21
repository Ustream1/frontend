import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLoading, setIsLoading] = useState('Sign up');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
    if (passwordRef.current.type === 'text') {
      passwordRef.current.type = 'password';
      confirmPasswordRef.current.type = 'password';
    }
    else {
      passwordRef.current.type = 'text';
      confirmPasswordRef.current.type = 'text';
    }
  }

  const [errors, setErrors] = useState({})

  const validate = () => {
    let newErrors = {};
    let valid = true;

    if (formData.email === '') {
      newErrors.email = 'Email cannot be empty';
      valid = false;
    }

    if (formData.password === '') {
      newErrors.password = 'Password cannot be empty';
      valid = false;
    }

    if (formData.confirmPassword === '') {
      newErrors.confirmPassword = 'Confirm password cannot be empty';
      valid = false;
    }

    if (formData.username === '') {
      newErrors.username = 'Username cannot be empty';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }
  
  const registerUser = async () => {
    setIsLoading('Signing up...');
    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };

    try {
      const response = await fetch("https://ustream.onrender.com/api/users/register", requestOptions);
      const result = await response.text();
      const parsedResult = JSON.parse(result);
      setIsLoading('Signing up');
      setMessage(parsedResult.message);

      if (parsedResult.status === 0) {
        navigate('/sign_in');
      }
    } catch (error) {
      console.error('Error:', error);
    };
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      registerUser();
    }
    else {
      console.log(errors);
    }
  }

  return (
    <div className='w-full h-full relative px-5 tablet:px-10 laptop:px-16 pt-24 pb-6 flex flex-col items-center'>
      <h1 className='font-semibold text-deep_blue text-xl'>Sign up</h1>
      <p className='text-[#AAAAAA] text-sm'>Create an account</p>
      {message && <p className='py-3 mt-2 w-full max-w-[450px] mx-auto text-[white] text-center bg-[#642400]'>{message}</p>}
      <form action="" onSubmit={handleFormSubmit} className={`flex flex-col ${message ? 'mt-2' : 'mt-8'} w-full max-w-[450px]`}>
        <input
          type="text"
          className={`w-full py-2 px-3 outline-none border ${errors.username ? 'mb-[3px]' : 'mb-4'} border-[#AAAAAA] rounded-md`}
          placeholder='Username'
          value={formData.username}
          onChange={(e)=> setFormData({...formData, username: e.target.value })}
        />
        {errors.username && <small className='text-[#dc3545] font-semibold mb-2'>{errors.username}</small>}
        <input
          type="email"
          className={`w-full py-2 px-3 outline-none border ${errors.email ? 'mb-[3px]' : 'mb-4'} border-[#AAAAAA] rounded-md`}
          placeholder='Email'
          value={formData.email}
          onChange={(e)=> setFormData({...formData, email: e.target.value })}
        />
        {errors.email && <small className='text-[#dc3545] font-semibold mb-2'>{errors.email}</small>}

        <div className='flex items-center justify-end gap-2 my-1'>
          <div className={`${showPassword ? 'bg-deep_blue' : 'bg-[#AAAAAA]'} transition-bg ease duration-300 w-[35px] h-[20px] rounded-full p-1 relative cursor-pointer`} onClick={handleShowPassword}>
            <div className={`w-[15px] h-[15px] bg-[#f2f2f2] rounded-full absolute transition-[left] ease duration-300 ${showPassword ? 'left-[48%]' : 'left-[7%]'} top-[50%] translate-y-[-50%]`}>

            </div>
          </div>
          <small className='text-[#AAAAAA]'>Show password</small>
        </div>
        <input
          type="password"
          className={`w-full py-2 px-3 outline-none border mt-3 ${errors.password ? 'mb-[3px]' : 'mb-4'} border-[#AAAAAA] rounded-md`}
          placeholder='Password'
          ref={passwordRef}
          value={formData.password}
          onChange={(e)=> setFormData({...formData, password: e.target.value })}
        />
        {errors.password && <small className='text-[#dc3545] font-semibold mb-2'>{errors.password}</small>}
        <input
          type="password"
          className={`w-full py-2 px-3 outline-none border ${errors.confirmPassword ? 'mb-[3px]' : 'mb-4'} border-[#AAAAAA] rounded-md`}
          ref={confirmPasswordRef}
          placeholder='Confirm password'
          value={formData.confirmPassword}
          onChange={(e)=> setFormData({...formData, confirmPassword: e.target.value })}
        />
        {errors.confirmPassword && <small className='text-[#dc3545] font-semibold mb-2'>{errors.confirmPassword}</small>}
        <p className='text-deep_blue text-[12px] text-center'>Already have an account?<Link to='/sign_in' className='font-semibold ml-1'>Login</Link></p>
        <div className='w-full flex justify-center mt-5'>
          <button className='bg-deep_blue px-7 w-[fit-content] py-2 rounded-md text-[white]'>
            {isLoading}
          </button>
        </div>
      </form>
       
    </div>
  )
}

export default Signup
