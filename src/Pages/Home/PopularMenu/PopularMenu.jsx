import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManuItem from "../../Shared/ManuItem/ManuItem";
import useMenu from "../../../Hooks/useMenu";
import { useEffect } from "react";

const PopularMenu = () => {
const [menu] = useMenu()
// const [items] = useIt()
// console.log(menu)

// useEffect(()=>{
//     fetch('item.json')
//     .then(res => res.json())
//     .then(data => console.log(data))
// },[])

    return (
        <section className="mb-12">
            <SectionTitle
            heading={'From our menu'}
            subHeading={'Check it out'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center ">
                {
                    menu.map(item => <ManuItem key={item._id} item={item}></ManuItem>)
                }
            </div>
            <div className="flex justify-center mt-5">
            {/* <button className='btn  uppercase border-0 border-b-4 mt-3 btn-outline text-yellow-500'>view full menu</button> */}
            </div>
        </section>
    );
};

export default PopularMenu;