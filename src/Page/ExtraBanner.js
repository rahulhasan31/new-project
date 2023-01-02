import React from 'react';
import img1 from '.././assets/Trip-pana.png'
import img2 from '.././assets/Globalization-pana.png'
import img3 from '.././assets/m.png'
import img4 from '.././assets/Buenos Aires-rafiki.png'
import { GrUserManager } from "react-icons/gr";
const ExtraBanner = () => {

    return (
        <div>
            <h1 className='text-center mt-5 text-xl font-mono'><span>TRAVIO SPECIALS</span> <br/>

        <span className='text-4xl font-bold' >Why Travel with Tutive?</span></h1>
         <div className='grid grid-cols-1 xl:grid-cols-4 p-10 gap-5'>
            <div className="card card-compact  bg-base-100 shadow-xl ">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center font-bold">2000+ Our Worldwide Guide!</h2>
 
    <div className="card-actions justify-end">
      
    </div>
  </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl ">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center font-bold">100% Trusted Tour Agency!</h2>

    <div className="card-actions justify-end">
      
    </div>
  </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl ">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-center font-bold">12+ Years of Travel Experience!</h2>

  </div>
            </div>
          <div className="card card-compact  bg-base-100 shadow-xl ">
  <figure><img src={img4} alt="Shoes" /></figure>
  <div className="card-body">

    <h2 className="card-title text-center font-bold">98% of Our Travelers are Happy!</h2>
  
   
  </div>
            </div>
            </div>
        </div>
    );
};

export default ExtraBanner;