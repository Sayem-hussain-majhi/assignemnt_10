import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img from '../../../assets/home/salad.webp'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'Shoud Try'}
                heading={'Chef recommends'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-5 my-5'>
                <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-4xl font-bold">Caeser salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-ghost hover:bg-black border-b-2 border-yellow-600 text-yellow-600 uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-4xl font-bold">Caeser salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-ghost hover:bg-black border-b-2 border-yellow-600 text-yellow-600 uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F3F3F3] shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-4xl font-bold">Caeser salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-ghost hover:bg-black border-b-2 border-yellow-600 text-yellow-600 uppercase">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;