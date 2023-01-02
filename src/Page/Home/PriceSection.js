import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import { BiTime } from 'react-icons/bi';

const PriceSection = () => {
    return (
        <div>
            <div className="">
      <div className=" mb-10 md:mx-auto sm:text-center  md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          MODERN & BEAUTIFUL
          </p>
        </div>
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">   Our</span>
          </span>{' '}
        Most Popular Adventures
        </h2>
       
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 p-4 h-auto ">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className=" relative w-full h-96">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
                <div className='flex items-center gap-2'>
                <h1 className='flex text-yellow-400 text-lg'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className='text-slate-300  '><AiFillStar/></span></h1>
                <p className='text-lg font-semibold'>1 Review</p>
                </div>
                
              <div className="text-xl   font-bold hover:text-red-500  ">Moscow Red City Land</div>
              
              <p className="text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                doloremque.
              </p>
              <div className="mt-1 mb-4 mr-1 text-red-500 text-4xl font-bold sm:text-3xl">
                $12<span className='text-lg text-black'>/ Per Person</span>
                
              </div>
              <div className="text-sm justify-center items-center font-medium bg-gray-100 rounded-sm mb-1 text-gray-500 py-2 flex  "><span><BiTime></BiTime></span> <h1 className=''>5 Day | G87P, Birmingham</h1></div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Basic
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-96 ">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
            <div className='flex items-center gap-2'>
                <h1 className='flex text-yellow-400 text-lg'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className='text-slate-300  '><AiFillStar/></span></h1>
                <p className='text-lg font-semibold'>1 Review</p>
                </div>

              <div className="text-xl font-bold hover:text-red-500">Moscow Red City Land</div>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never was so close.
              </p>
              <div className="mt-1 mb-4 mr-1 text-red-500 text-4xl font-bold sm:text-3xl">
                $38<span className='text-lg text-black'>/ Per Person</span>
              </div>
              <div className="text-sm justify-center items-center font-medium bg-gray-100 rounded-sm mb-1 text-gray-500 py-2 flex  "><span><BiTime></BiTime></span> <h1 className=''>5 Day | G87P, Birmingham</h1></div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Advanced
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-96">
            <img
              src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
            <div className='flex items-center gap-2'>
                <h1 className='flex text-yellow-400 text-lg'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className='text-slate-300  '><AiFillStar/></span></h1>
                <p className='text-lg font-semibold'>1 Review</p>
                </div>
              <div className="text-xl font-bold hover:text-red-500">Moscow Red City Land</div>
              <p className="text-sm text-gray-900">
                We never had the chance to. Maybe it was the eleven 
              </p>
              <div className="mt-1 mb-4 mr-1 text-red-500 text-4xl font-bold sm:text-3xl">
                $78<span className='text-lg text-black'>/ Per Person</span>
              </div>
              <div className="text-sm justify-center items-center font-medium bg-gray-100 rounded-sm mb-1 text-gray-500 py-2 flex  "><span><BiTime></BiTime></span> <h1 className=''>5 Day | G87P, Birmingham</h1></div>                   
            </div>
            
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400  bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Pro
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PriceSection;