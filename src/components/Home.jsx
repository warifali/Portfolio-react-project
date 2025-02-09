import React from 'react'
import pic from "../../public/Profile-image.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";


import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";



import { ReactTyped } from "react-typed";



function Home() {
  return (
    <React.Fragment>
      <div name="Home" className='container max-w-screen-2xl mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-2xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a </h1>
        {/* <span>Developer</span> */}
        <ReactTyped
        className='text-red-700 font-bold'
          strings={["Warif Ali", "Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in fuga, odio minima ratione ipsam dolores deserunt nostrum dignissimos magni veniam, officiis quae nesciunt laborum iure? Repellat ad ullam, animi laborum illum quos porro non minus possimus, sit excepturi velit error ipsum quaerat quam ex incidunt. Facilis numquam voluptatum id, velit quis aliquam ipsam aperiam dolore sint error minus quae.</p>
        <br />
        {/* Social Media icons */}
        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold md:text-start text-center'>Available on</h1>
            <ul className='flex space-x-5'>
                <li><a href="https://www.facebook.com/" target='_blank'>
                <FaSquareFacebook className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                </a>
                </li>
                <li><a href="https://web.whatsapp.com/" target='_blank'>
                <FaSquareWhatsapp className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                </a>
                </li>
                <li><a href="https://in.linkedin.com/" target='_blank'>
                <FaLinkedin className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                </a>
                </li>
                <li><a href="https://web.telegram.org/" target='_blank'>
                <FaTelegram className='text-2xl hover:scale-110 duration-200 cursor-pointer'/>
                </a>
                </li>
            </ul>
        </div>
        <div className='space-y-2'>
            <h1 className='font-bold text-center'>Currently working on</h1>
            <div className='flex space-x-5'>
               <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/> 
               <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
               <FaBootstrap className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
               <SiNextdotjs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
            </div>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className='rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px]' alt="" />
      </div>
      </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Home
 