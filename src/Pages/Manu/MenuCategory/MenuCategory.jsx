import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ManuItem from "../../Shared/ManuItem/ManuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    items.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
            <Link className="flex justify-center my-10" 
            to={`/order/${title}`}>
                <button className='btn  uppercase border-0 border-b-4 mt-3 btn-outline '>order now</button>
            </Link>

        </div>
    );
};

export default MenuCategory;