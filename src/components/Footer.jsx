import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import facebook_icon from '../assets/facebook_icon.png'
import instagram_icon from '../assets/instagram_icon.png'


export default function Footer() {
  return (
    <div className='lg:px-40 md:px-20 px-5 pt-20 pb-2 text-gray-500'>
      <div className='flex gap-4'>
        <img className='w-5 cursor-pointer ' src={youtube_icon} alt="" />
        <img className='w-5 cursor-pointer ' src={twitter_icon} alt="" />
        <img className='w-5 cursor-pointer ' src={facebook_icon} alt="" />
        <img className='w-5 cursor-pointer ' src={instagram_icon} alt="" />
      </div>
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-6 text-sm'>
        <li className='hover:underline cursor-pointer'>FAQ</li>
        <li className='hover:underline cursor-pointer'>Help Center</li>
        <li className='hover:underline cursor-pointer'>Account</li>
        <li className='hover:underline cursor-pointer'>Media Center</li>
        <li className='hover:underline cursor-pointer'>Investor Relations</li>
        <li className='hover:underline cursor-pointer'>Jobs</li>
        <li className='hover:underline cursor-pointer'>Netflix Shop</li>
        <li className='hover:underline cursor-pointer'>Redeem Gift Cards</li>
        <li className='hover:underline cursor-pointer'>Buy Gift Cards</li>
        <li className='hover:underline cursor-pointer'>Ways to Watch</li>
        <li className='hover:underline cursor-pointer'>Terms of Use</li>
        <li className='hover:underline cursor-pointer'>Speed Test</li>
        <li className='hover:underline cursor-pointer'>Cookie Preferences</li>
        <li className='hover:underline cursor-pointer'>Corporate Information</li>
        <li className='hover:underline cursor-pointer'>Contact Us</li>
        <li className='hover:underline cursor-pointer'>Speed Test</li>
        <li className='hover:underline cursor-pointer'>Legal Notices</li>
        <li className='hover:underline cursor-pointer'>Only on Netflix</li>
        <li className='hover:underline cursor-pointer'>Do Not Sell or Share Personal Information</li>
        <li className='hover:underline cursor-pointer'>Ad Choices</li>
      </ul>
      <button className='text-sm border py-2 px-2'>Service Code</button>
      <p className='mt-3 text-xs'>© 1997 - 2024 Netflix, Inc.</p>
    </div>
  )
}
