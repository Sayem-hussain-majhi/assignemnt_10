import React from 'react';
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div className='space-y-9'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
        {/* main cover */}
           <SectionTitle
           subHeading={"Don't Miss"}
           heading={"Today's Offer"}
           ></SectionTitle>

            {/* offerd menu items */}
           <MenuCategory items={offered}></MenuCategory>
           
           {/* desert menu items */}
           <MenuCategory
           items={dessert}
           title={'dessert'}
           coverImg={dessertImg}
           ></MenuCategory>

            {/* Piza menu items */}
           <MenuCategory items={pizza} title={'pizza'}
           coverImg={pizzaImg}
           ></MenuCategory>

           {/* salads menu items */}
           <MenuCategory items={salad} title={'salad'}
           coverImg={saladImg}
           ></MenuCategory>

           {/* Soups menu items */}
           <MenuCategory items={soup} title={'soup'}
           coverImg={soupImg}
           ></MenuCategory>
        </div>
    );
};

export default Menu;