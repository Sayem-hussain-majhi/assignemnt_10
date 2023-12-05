import { useLoaderData, useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../Home/Banner/Banner";


const CarItems = () => {
    const items = useLoaderData()
    const brandName = useParams()
    const [msg, setMsg] = useState('')
    console.log('this is a message', msg)
    
    
    const carItems = items.filter(item => item.brand === brandName.name)
    console.log( carItems.length)

    if(!carItems.length > 1){
        return setMsg('no enough product')
    }
    
     

    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            { carItems ?
                carItems?.map(item => <FoodCard item={item}></FoodCard>) :
                <>
                    <div>
                        <p>no enough product</p>
                    </div>
                </>
               
            }
        </div>
        </div>
    );
};

export default CarItems;

