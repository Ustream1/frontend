import React from 'react'
import LiveAuthorImage from '../assets/images/author_1.png';
import LiveAuthorImageTwo from '../assets/images/author_2.png';
import Verified from '../assets/images/verified.png';
import Edit from '../assets/images/edit_comment.png';
import Comment from '../assets/images/comment.png';
import QandA from '../assets/images/q&a.png';
import { DaoData } from '../DaoData';

const Community = () => {
    return (
        <div className='w-full min-h-screen pt-10 pb-24 relative text-deep_blue'>
            <h1 className='max-w-[900px] mx-auto text-xl tablet:text-3xl font-semibold text-center relative'>Community(DAO)</h1>
            <div className='max-w-[900px] mx-auto flex flex-col items-center pt-10 px-5'>
                <ul className='w-full flex items-center gap-6 overflow-auto'>
                    <li className='flex justify-between items-center min-w-[250px] w-[40%] h-[50px] bg-deep_blue rounded-full'>
                        <div className='pl-4 flex items-center gap-3 text-[white] '>
                            <img src={LiveAuthorImage} alt="" />
                            <p>Adam is live</p>
                        </div>
                        <div className='w-[50px] h-[50px] mr-[-4px] bg-[#F2F2F2] rounded-full grid place-items-center font-semibold cursor-pointer'>
                            Join
                        </div>
                    </li>
                    <li className='flex justify-between items-center min-w-[250px] w-[40%] h-[50px] bg-deep_blue rounded-full'>
                        <div className='pl-4 flex items-center gap-3 text-[white] '>
                            <img src={LiveAuthorImageTwo} alt="" />
                            <p>James</p>
                        </div>
                        <div className='w-[50px] h-[50px] mr-[-4px] bg-[#F2F2F2] rounded-full grid place-items-center font-semibold cursor-pointer'>
                            Join
                        </div>
                    </li>
                </ul>

                <div className='w-full mt-10'>
                    <ul className='w-full flex flex-col gap-y-8'>
                        {DaoData.map(data => (
                            <li className='w-full  pb-10'>
                                <div className='flex gap-x-4'>
                                    <div>
                                        <img src={data.authorImage} alt="" />
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <p className='font-semibold'>{data.postAuthor}</p>
                                            <div><img src={Verified} alt="" /></div>
                                            <small className='text-[gray]'>{data.postTime}</small>
                                        </div>
                                        <p className='text-sm'>{data.postContent}</p>
                                    </div>
                                </div>
                                <div className='w-full mt-5'>
                                    <img src={data.postImage} className='w-full object-cover' alt="" />
                                </div>
                                <div className='flex justify-between items-center text-[gray] py-5 border-b border-[#d9d9d9]'>
                                    <div className='flex items-center gap-2 cursor-pointer text-[12px] tablet:text-[15px] '>
                                        <img src={Edit} alt="" />
                                        <p>Scripts</p>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer text-[12px] tablet:text-[15px] '>
                                        <img src={Comment} alt="" />
                                        <p>Comments</p>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer text-[12px] tablet:text-[15px] '>
                                        <img src={QandA} alt="" />
                                        <p>Q & A</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Community
