import React from 'react';
import img1 from '../../../assets/banner-3.webp'
import img2 from '../../../assets/banner-2.webp'
import img3 from '../../../assets/banner-5.webp'
import img4 from '../../../assets/banner-6.webp'

const NewsReviews = () => {
    return (
        <div className='my-24'>
            <h1 className='text-6xl font-bold mt-12 mb-5'>News And Reviews</h1>
            <div className='grid grid-cols-2 gap-5'>
                <img className='w-full' src={img1} alt="" />
                <img className='w-full' src={img2} alt="" />
                <img className='w-full' src={img3} alt="" />
                <img className='w-full h-full' src={img4} alt="" />
            </div>
        </div>
    );
};

export default NewsReviews;