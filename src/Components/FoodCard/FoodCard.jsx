import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { name, img, price, productName, brand, details, _id} = item
    

    return (
        <div>
            <div className="card w-96 bg-slate-500 shadow-xl">
                <figure className="w-full">
                    <img className="w-full" src={img} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 px-4 rounded-xl py-2 m-4">${price}</p>
                <div className="card-body flex flex-col ">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="font-bold text-2xl">{productName}</p>
                    <p className="font-bold text-xl">{brand}</p>
                    <p>{details}</p>
                    <div className="space-x-32">
                    <Link to={`/update/${_id}`}>
                            <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-200 uppercase ">Update</button>
                        </Link>
                       
                        <Link to={`/detailes/${_id}`}>
                            <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-200 uppercase ">Detailes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;