import { useLoaderData, useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useEffect } from "react";
import { useState } from "react";


const CarItems = () => {
    const items = useLoaderData()
    const brandName = useParams()
    
    
    
    const carItems = items.filter(item => item.brand === brandName.name)
    console.log( carItems)
     

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                carItems?.map(item => <FoodCard item={item}></FoodCard>)
               
            }
        </div>
    );
};

export default CarItems;

