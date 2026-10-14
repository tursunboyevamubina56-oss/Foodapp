import React from 'react'
import logo from '../assets/left.png'
import bgimage from '../assets/cool.jpg'
import first from '../assets/cooler.png'
import second from '../assets/smoller.png'
const Header = () => {
  return (
    <div className='mb-150'>
      <nav className="flex justify-between items-center pt-5 mb-5">
        <img src={logo} alt="" />
        <ul className='flex justify-center items-center gap-10 mr-5'>
            <li><a href="#" className=' font-bold hover:text-amber-700'>Home</a></li>
            <li><a href="#" className=' font-bold hover:text-amber-700'>Product</a></li>
            <li><a href="#" className=' font-bold hover:text-amber-700'>Faq</a></li>
            <li><a href="#" className=' font-bold hover:text-amber-700'>Contact</a></li>
        </ul>
      </nav>
           <div className="bg-cover bg-center h-150 w-full relative  "
        style={{ backgroundImage: `url(${bgimage})` }}>
                 <div className="absolute inset-0 bg-black/50 "></div>
                <div className='relative z-10 pt-30 px-10'> 
                    <p className="text-center text-white text-2xl pb-10 font-bold">Prouducts</p>
                    <h1 className="text-5xl text-white font-bold text-center">Why stay hungry when  <br />
you can order form Bella Onojie</h1>
                   <p className="pt-5 text-white ml-140">Download the bella onoje’s food app now on</p>
                   <div className="flex justify-center items-center gap-20 mt-10">
                    <button className="h-15 w-40 bg-none border-2 rounded-4xl font-bold text-white hover:bg-amber-600 text-white">Playstore</button>
                    <button className="h-15 w-40 bg-none border-2 rounded-4xl font-bold text-white hover:bg-amber-600 text-white">AppStore</button>
                   </div>
                </div>

                <div className=' flex  justify-center items-center relative ml-70'>
                    <img src={first} alt="" className='h-150 absolute left-20 bottom-10'/>
                    <img src={second} alt="" className='h-130 mt-25'/>
                </div>

        </div>
      

        </div>

  )
}

export default Header
