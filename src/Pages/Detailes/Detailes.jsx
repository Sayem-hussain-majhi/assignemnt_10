import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Detailes = () => {
    const data = useLoaderData()
    const {productName, img, brand, price, details} = data
    console.log(data)
    
    


    return (
        <div className="flex items-end">
            <div className="w-1/2 h-screen ">
                <img className="w-full" src={img} alt="" />
            </div>
            <div className="flex-1 h-screen  ">
                <div className="mt-24 pl-5">
                <p className="text-5xl font-bold">{productName}</p>
                <p className="text-4xl font-bold">{brand}</p>
                <p className="text-2xl font-bold">{price}</p>
                <p className="text-xl font-bold">{details}</p>
                </div>
            </div>
                       
        </div>
    );
};

export default Detailes;