import Swal from 'sweetalert2';

const Update = () => {

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target
        const food_name = form.fname.value
        const pic = form.img.value
        const category = form.category.value
        const quantity = form.quantity.value
        const price = form.price.value
        const origin = form.foodOrigin.value
        const description = form.description.value

        const item = {
            food_name,
            pic,
            category,
            price,
            description,
            email: user.email,
            quantity,
            origin
        }

        fetch('https://restaurent-management-server-side-ltybsoexv.vercel.app//brandItems/:id', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Update Car Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })



        form.reset()
    }

    return (
        <div>
            <div>
                <h1 className="text-6xl font-bold text-center">Update a <span className="text-stone-400-700">Car</span></h1>
            </div>
            <div className="my-16 max-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" w-full max-w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                {/*food name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Car Name</span>
                                    </label>
                                    <input type="text"
                                        name="fname"
                                        placeholder="car name" className="input input-bordered" />
                                </div>
                                {/* food img */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Car Image</span>
                                    </label>
                                    <input type="text"
                                        name="img"
                                        placeholder="car image" className="input input-bordered" />
                                </div>
                                {/* Food Category */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Car Category</span>
                                    </label>
                                    <input type="text"
                                        name="category"
                                        placeholder="car category" className="input input-bordered" />
                                </div>
                                {/* quantity */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text"
                                        name="quantity"
                                        placeholder="quantity" className="input input-bordered" />
                                </div>
                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text"
                                        name="price"
                                        placeholder="price" className="input input-bordered" />
                                </div>
                                {/* added by */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Added By</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        className="input input-bordered" />
                                </div>
                                {/* Food Origin  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Car Origin </span>
                                    </label>
                                    <input type="text"
                                        name="foodOrigin"
                                        placeholder="car origin " className="input input-bordered" />
                                </div>
                                {/* Description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name="description" className="input input-bordered" id="" cols="30" rows="5"></textarea>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button
                                className="btn btn-primary">Update Car</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;