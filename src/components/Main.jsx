import React from 'react'
import mainone from '../assets/mainone.png'
import phonee from '../assets/phonee.png'
import phoneetwo from '../assets/phonetwo.png'
import bgtwo from '../assets/pasuda.jpg'

const Main = () => {
    return (
        <div>
            <div className="h-1 w-150 bg-gray-200 ml-120 mb-30"></div>
            <h1 className="text-center font-bold text-4xl mb-30">How the app works</h1>
            <div className="flex justify-center items-center gap-60 mb-30">
                <img src={mainone} alt="" className='h-120' />
                <div>
                    <p className="text-amber-700 font-bold text-2xl">Create an account</p>
                    <h1 className="pt-5 text-4xl font-bold">Create/login to an existing <br />
                        account to get started</h1>
                    <p className="pt-10">An account is created with your email <br />
                        and a desired password</p>
                </div>
            </div>


            <div className="flex justify-center items-center gap-60 mb-30">
                <div>
                    <p className="text-amber-700 font-bold text-2xl">Explore varieties</p>
                    <h1 className="pt-5 text-4xl font-bold">Shop for your favorites <br />
                        meal as e dey hot.</h1>
                    <p className="pt-10">Shop for your favorite meals or drinks <br />
and enjoy while doing it.</p>
                </div>
                <img src={phonee} alt="" className='h-120' />
            </div>


            <div className="flex justify-center items-center gap-60 mb-30">
                <img src={phoneetwo} alt="" className='h-120' />
                <div>
                    <p className="text-amber-700 font-bold text-2xl">Checkout</p>
                    <h1 className="pt-5 text-4xl font-bold">Create/login to an existing <br />
                        account to get started</h1>
                    <p className="pt-10">An account is created with your email <br />
                        and a desired password</p>
                </div>
            </div>

            <div className="bg-cover bg-center h-120 w-full relative mb-20  "
                    style={{ backgroundImage: `url(${bgtwo})` }}>
                        <div className="absolute inset-0 bg-black/50 "></div>
                        <div className=' relative pt-30 pl-30'> 
                    
                    <h1 className="text-5xl text-white font-bold text-center">Download the app now.</h1>
                   <p className="pt-5 text-white ml-115">Available on your favorite store. Start your premium experience now</p>
                   <div className="flex justify-center items-center gap-20 mt-10">
                    <button className="h-15 w-40 bg-none border-2 rounded-2xl font-bold text-white hover:bg-amber-600 text-white">Playstore</button>
                    <button className="h-15 w-40 bg-none border-2 rounded-2xl font-bold text-white hover:bg-amber-600 text-white">AppStore</button>
                   </div>
                </div>

            </div>
           
        </div>
    )
}

export default Main
