import axios from "axios";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Detailes = () => {
    const data = useLoaderData()
    const { productName, img, brand, price, details } = data
    console.log(data)



    const handleAddToCart = () => {
        const info = {
            productName,
            brand,
            details,
            price,
            img,
        }
         fetch('https://car-store-server-theta.vercel.app/addToCartItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info),
        })
        .then(res => res.json())
        .then(data => console.log(data.acknowledged))
        if(data.acknowledged){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Car is added successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }

    }






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
                    <button onClick={handleAddToCart} className="btn text-xl font-bold mt-6">Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Detailes;