import React from 'react'
import logo from '../assets/left.png'
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div>
       <div className="flex justify-around items-center">
                <img src={logo} alt="" />
                <div className="flex justify-center items-center gap-20">
                    <TiSocialTwitter className='text-amber-700 text-4xl'/>
                    <FaFacebookSquare className='text-amber-700 text-4xl' />
                    <AiFillInstagram className='text-amber-700 text-4xl'/>



                </div>
                <p className="text-xl text-gray-400">Copywright 2020 Bella Onojie.com</p>
            </div>
    </div>
  )
}

export default Footer
