import React from 'react';
import img from '../../../assets/home/01.jpg';
import { Link } from 'react-router-dom';

const ManuItem = ({ item }) => {
    const { name, img,  } = item

    const handleitem = ()=>{
        
    }

    return (
        <div className=' space-x-5 cursor-pointer'>
            <Link to={`/carItems/${name}`}>
                <img
                    // style={{borderRadius: '0 200px 200px 200px'}} 
                    className='w-[200px] mx-auto' src={img} alt="" />
                <div>
                    <h3 className='uppercase text-center text-3xl font-bold mt-3'>{name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default ManuItem;