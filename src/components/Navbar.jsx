import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_img from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'
import { logout } from '../firebase'



export default function Navbar() {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.scrollY >= 80) {
        navRef.current.classList.add('bg-[#171717c9]');
      }else{
        navRef.current.classList.remove('bg-[#171717c9]');
      }
    })
  },[])
  return (
    <div ref={navRef} className=' fixed z-100 w-full   lg:px-[6%] px-[4%] py-5   text-[14px] text-[#efefef] flex justify-between items-center'>
      <div className='flex items-center gap-5'>
        <img src={logo} alt="" className='w-[90px] md:h-6 h-5' />
        <ul className='lg:flex gap-5 hidden'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Tv SHow</li>
            <li className='cursor-pointer'>Movies</li>
            <li className='cursor-pointer'>New & Popular</li>
            <li className='cursor-pointer'>My List</li>
            <li className='cursor-pointer'>Browse by Languages</li>
        </ul>
      </div>
      <div className='flex gap-4 items-center'>
        <img src={search_icon} alt=""  className='cursor-pointer'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='cursor-pointer' /> 
        <div className='flex items-center gap-3 relative group'>
            <img src={profile_img} alt="" className='cursor-pointer rounded sm:w-8 w-6' />
            <img src={caret_icon} alt="" className='cursor-pointer' />
            <div className='absolute top-full right-0 w-max bg-[#191919] underline rounded px-6 py-4 group-hover:opacity-100 transition-all duration-500  opacity-0'>
                <p className='cursor-pointer  text-md' onClick={()=>{logout(), scrollTo(0,0)}}>Sign Out of Netflix</p>
            </div>
        </div>

      </div>
    </div>
  )
}
