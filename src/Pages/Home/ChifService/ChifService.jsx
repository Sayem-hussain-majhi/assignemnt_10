import chifImg from '../../../assets/home/chef-service.jpg'
import './ChifService.css';

const ChefService = () => {
    return (
        <div className='my-11'>
            <div  className='chif-img bg-fixed relative'>
                <img className='' src={chifImg} alt="" />
                <div className='bg-white mx-auto w-3/4 h-72 absolute top-20 left-32  rounded-xl'>
                    <div className=' text-center'>
                        <div className='p-20'>
                            <h2 className='text-4xl pb-3 uppercase'>Bistro Boss</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, fugit architecto qui aperiam officiis amet pariatur enim aliquam labore atque cupiditate deleniti aut rem dolore omnis sint libero, ex quis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefService;