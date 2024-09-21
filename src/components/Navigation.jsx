import React from 'react'
import { Link } from 'react-router-dom'
import { NavRouting } from './NavRouting'

const Navigation = () => {
  return (
    <div className='fixed left-0 bottom-0 w-full h-14 bg-deep_blue px-2 tablet:px-8'>
        <ul className='w-full h-full flex items-center justify-center gap-6 mobile:gap-8 tablet:gap-20 mobile:text-[8px] text-[6px] tablet:text-[12px]'>
            
            {NavRouting.map(route => (
                <li className='h-full' key={route.id}>
                    <Link to={route.navLink} className={`flex flex-col items-center justify-center ${route.navLink === '/app/tn_cinema' ? 'gap-[10px] tablet:py-[5px]' : 'gap-1'} h-full py-1`}>
                        <img src={route.navImage} alt="" />
                        <p className={`text-gray-primary`}>{route.navName}</p>
                    </Link>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Navigation
