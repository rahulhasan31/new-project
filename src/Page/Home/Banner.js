import React from 'react';
import { BsSearch } from 'react-icons/bs';
import img from'./../../assets/w.png'
const Banner = () => {
    return (
        <div className=''>
      <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} alt='' className=" w-80  rounded-lg  " />
    <div>
      <h1 className="text-5xl font-bold">Explore</h1>
      <h1 className="text-5xl font-bold"><span className='text-red-500'>Your Travels</span></h1>
      <p className="py-6 text-black font-semibold">Discover your next great adventure, become an explorer to get started!</p>
      <button className="btn bg-red-500 hover:bg-yellow-400 rounded-xl border-0  gap-1"><p className=' font-bold text-lg'><BsSearch></BsSearch></p> Find Now </button>
    </div>
  </div>
</div>

    {/* <div>
      <img src={img} alt=' ' className='w-96'/>
    </div>
    <div>
      <h1 className=''>Explore</h1>
      <h1>Your Travels</h1>
    </div> */}
       
        </div>

    );
};

export default Banner;