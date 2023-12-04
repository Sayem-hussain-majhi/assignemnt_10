import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChifService/ChifService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import NewsReviews from "../News&reviews/News&reviews";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            {/* <Category></Category> */}
            {/* <ChefService></ChefService> */}
            <PopularMenu></PopularMenu>
            {/* <ChefRecommends></ChefRecommends> */}
            {/* <Featured></Featured> */}
            {/* <Testimonials></Testimonials> */}
            <NewsReviews></NewsReviews>
        </div>
    );
};

export default Home;