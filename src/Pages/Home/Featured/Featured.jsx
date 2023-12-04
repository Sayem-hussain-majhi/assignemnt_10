import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>

            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center py-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                   <p> March 20, 2023</p>
                   <p> WHERE CAN I GET SOME?</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn  uppercase border-0  border-b-4 mt-3 btn-outline'>read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;