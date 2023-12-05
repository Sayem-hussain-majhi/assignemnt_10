import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/banner-1.webp'
import img2 from '../../../assets/banner-2.webp'
import img3 from '../../../assets/banner-3.webp'
import img4 from '../../../assets/canner-4.webp'
import img5 from '../../../assets/banner-5.webp'
import img6 from '../../../assets/banner-6.webp'

const Banner = () => {
    return (
        <div >
            <Carousel >
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;