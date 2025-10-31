import React from 'react'
import Navbar from '../components/Navbar'
import hero_title from '../assets/hero_title.png'
import hero_banner from '../assets/hero_banner.png'
import { FaPlay } from "react-icons/fa6";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import TitleCard from '../components/TitleCard';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='relative'>
        <img src={hero_banner} alt="" className='w-full sm:h-auto h-85' />
        <div className='absolute inset-0 bg-linear-to-r from-black via-transparent to-black opacity-75'></div>
        <div className='absolute w-full px-10  bottom-0 lg:top-25 md:top-20 top-17' >
          <div className='w-50 h-20 sm:h-fit sm:w-fit mb-2 '>
            <img src={hero_title} alt="max-w-[280px] sm:max-w-[300px] md:max-w-[400px] hidden sm:block lg:max-w-[450px]" />

          </div>
            <p className='lg:max-w-[500px] lg:text-lg md:text-sm text-xs sm:mb-5 mb-3'>Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.</p>
            <div className='flex flex-col sm:flex-row items-center gap-3'>
              <button className='flex justify-center items-center gap-1 text-md bg-white hover:bg-[#ffffffbf] text-black py-3 rounded font-medium px-10 cursor-pointer w-full sm:w-fit'><FaPlay className='text-xl' /> play</button>
              <button className='flex items-center justify-center gap-1 text-md bg-[#6d6d6eb3] hover:bg-[#ffffff92] text-white py-3 rounded font-medium px-10 cursor-pointer w-full sm:w-fit'><AiTwotoneExclamationCircle className='text-xl' />More Info</button>
            </div>
            <div className='hidden lg:block'>
            <TitleCard title={'Popular on Netflix'} category={''}/>
            </div>
        </div>
      </div>
        <div className='pl-10 lg:pt-30'>
            <TitleCard title={' Top 10 Movies'} category={'popular'}/>
            <TitleCard title={'Blockbuster Movies'} category={'top_rated'}/>
            <TitleCard title={'Upcoming'} category={'upcoming'}/>
            <TitleCard title={'Only on Netflix'} category={'now_playing'}/>
        </div>
        <Footer/>
    </div>
  )
}
