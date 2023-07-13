import React from 'react'
import { useState } from 'react';
import {close,logo,menu} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="Hoo bank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id}
          className={`font-poppins cursor-pointer font-normal tex-[16px] hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-1 motion-safe: :transition-shadow  ${index === navLinks.length-1 ? 'mr-0' :'mr-10'} text-white`}
          
          >
            <a href="{`#${nav.id}`}">
              {nav.title}
            </a>

          </li>

        ))}

      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close:menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={()=>setToggle((prev)=> !prev)} />
        <div className={`${toggle ? 'block': 'hidden'} p-6 bg-black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          {/* same ul */}
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li
          key={nav.id}
          className={`font-poppins cursor-pointer font-normal tex-[16px] ${index === navLinks.length-1 ? 'mr-0' :'mb-4'} text-white`}
          
          >
            <a href="{`#${nav.id}`}">
              {nav.title}
            </a>

          </li>

        ))}

      </ul>


        </div>

      </div>

    </nav>
  
  )
}

export default Navbar;