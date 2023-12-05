import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
    const data = useLoaderData()
    console.log(data)

    const handleDelete = (id) => {
         fetch(`https://car-store-server-theta.vercel.app/addToCartItems/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        if(data.deletedCount > 0){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Car is Deleted successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }

    }





    return (
        <div className="overflow-x-auto pt-32">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.map((car, index) =>
                            <>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={car.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {car.productName}
                                    </td>
                                    <td>{car.brand}</td>
                                    <th>
                                        {car.price}
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(car._id)} className="btn btn-ghost btn-xs">delete</button>
                                    </th>
                                </tr>
                            </>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyCart;