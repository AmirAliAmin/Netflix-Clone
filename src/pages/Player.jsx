import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

export default function Player() {
  const {id} = useParams();
  const naviagte = useNavigate();
  const [apiData,setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI0YmZhMTE3OThkOTljZDFkYWE5MWMyN2Q0MzFkMSIsIm5iZiI6MTc0NjA3MjAxMi45ODQsInN1YiI6IjY4MTJmMWNjYmM4MmNhNjBiYWEwZWNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TaL9rFThQlCW7BSHi5GNUDJFl3LoPezKK4sYNWg7NCc'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <img src={back_arrow_icon} alt=""  className='absolute top-2 left-2 w-12.5 cursor-pointer' onClick={()=>{naviagte(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height={'90%'} frameborder="0" title='trailer' allowFullScreen className='rounded-lg'></iframe>
      <div className='flex flex-wrap justify-between items-center w-[90%] '>
        <p>{apiData.published_at} </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}
