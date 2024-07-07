import React, { useEffect } from 'react'
import { GifState } from '../context/git-context';
import Gif from '../components/gif';

export const Home = () => {
  const { gf, filter, setFilter, setGifs,gifs } = GifState();
  const fetchTrendingGifs=async()=>{
    const {data}=await gf.trending({
      limit:20,
      type:filter,
      rating:"r",
    });

    setGifs(data);
  }

  useEffect(()=>{
    fetchTrendingGifs();
  },[filter])

  return (
    <div>
      <img src="/banner.gif" alt="earth banner" className='mt-2 rounded w-full' />
      {/* <FilterGif/> */}
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gifs.map((gif)=>{
          return <Gif gif={gif} key={gif.title}/>
        })}
      </div>
    </div>
  )
}

export default Home;