import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CategoryData } from '../CategoryData';

import SearchIcon from '../assets/images/search.png';
import Favorite from '../assets/images/favorite.png';


const Category = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(CategoryData);


    const handleFavorite = (id) => {
        // Make a copy of the array to avoid mutating the original state
        const updatedCategoryData = filteredData.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
        );

        // Update the state with the modified array
        setFilteredData(updatedCategoryData);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter the data based on the search query
        const filteredCategories = CategoryData.filter((item) =>
        item.catName.toLowerCase().includes(query)
        );

        setFilteredData(filteredCategories);
    };



    return (
        <div className='w-full h-full relative px-5 tablet:px-10 laptop:px-16 py-10 flex flex-col items-center'>
            <h1 className='text-xl text-center tablet:text-4xl text-deep_blue font-semibold'>Select 5 of your favorite Categories</h1>

            <div className='bg-gray-primary w-full rounded-md max-w-[550px] mt-10 h-[50px] flex items-center gap-3 px-3'>
                <img src={SearchIcon} alt="" />
                <input
                    type="text"
                    className='h-full w-full outline-none bg-[transparent]'
                    placeholder='Search your favorite categories'
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className='w-full max-w-[550px] mx-auto flex flex-wrap items-center justify-between gap-6 mt-10'>
                {filteredData.map((data) => (
                    <div className='category_card relative' key={data.id} onClick={() => handleFavorite(data.id)}>
                        <div className='overflow-hidden rounded-full'>
                            <img src={data.image} className='w-full object-cover' alt="" />
                        </div>
                            {data.favorite ? (
                                <img
                                    src={Favorite}
                                    className="absolute top-[0] right-0 tablet:top-[5px] tablet:right-[20px]"
                                    alt=""
                                />
                                ) 
                                : 
                            null}
                        <p className='text-deep_blue text-center mt-2 font-semibold'>{data.catName}</p>
                    </div>
                ))}

            </div>

            <Link to='/app/movies' className='mt-8 bg-deep_blue text-center px-20 py-2 rounded-full text-[white]'>Done</Link>

        </div>
    )
}

export default Category
