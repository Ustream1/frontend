import React from 'react'
import UserImage from '../assets/images/user_image.png';
import { ProfileComp } from '../ProfileComp';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='w-full min-h-screen pt-10 relative text-deep_blue'>
            <h1 className='max-w-[900px] mx-auto text-deep_blue text-xl tablet:text-3xl font-semibold text-center relative'>Profile</h1>
            <div className="max-w-[900px] mx-auto flex flex-col items-center pt-10 pb-20">
                <h2 className='bg-[#040B2E1A] italic w-full px-5 py-[10px] font-semibold text-[gray]'>My Ustream Account</h2>
                <ul className='mt-6 w-full flex flex-col gap-8'>
                    {ProfileComp.slice(0, 6).map(profile => (
                        <li className='w-full'>
                            <Link to={`/${profile.link}`} className='flex items-center justify-between w-full px-5'>
                                <div className='flex items-center gap-3'>
                                    <img src={profile.image} alt="" />
                                    <p className='font-semibold'>{profile.name}</p>
                                </div>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <h2 className='bg-[#040B2E1A] italic w-full px-5 py-[10px] font-semibold text-[gray] mt-8'>About Ustream</h2>
                <ul className='mt-6 w-full flex flex-col gap-8'>
                    {ProfileComp.slice(6, 10).map(profile => (
                        <li className='w-full'>
                            <Link to={`/${profile.link}`} className='flex items-center justify-between w-full px-5'>
                                <div className='flex items-center gap-3'>
                                    <img src={profile.image} alt="" />
                                    <p className='font-semibold'>{profile.name}</p>
                                </div>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='w-full flex justify-center mt-16'>
                    <button className='px-8 py-2 rounded-md bg-deep_blue text-[white]'>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
