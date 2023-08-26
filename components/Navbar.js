"use client"
import React, { useState } from 'react';
import { Link } from "react-scroll";

const link=[
  {
    id:1,
    href:'home',
    name:'Home'
  },
  {
    id:2,
    href:'about',
    name:"About"
  },
  {
    id:3,
    href:'education',
    name:'Education'
  },
  {
    id:4,
    href:'skills',
    name:'Skills'
  },
  {
    id:5,
    href:'contact',
    name:'Contact'
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" p-4 sticky top-0 ">
      <div className="lg:flex ">
        <div className='flex justify-between w-full'>
          <div className="  border border-blue-600  text-xl "><span className='bg-blue-600 px-2'>Vik</span>ash</div>
          <button
          type='button'
          role='button'
            aria-labelledby="navigation"
            onClick={toggleMenu}
            className="block lg:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 8H5v-2h14v2zm0 5H5v-2h14v2zm0 5H5v-2h14v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
              )}
            </svg>
          </button>
        </div>
       
        <ul
          className={`lg:flex space-y-2 lg:space-y-0 lg:space-x-4 ${menuOpen ? 'block' : 'hidden'
            }`}
        >
          {
            link.map((link,index)=>{
              return(
                <li key={link.id}>
                  <Link activeClass="active" to={link.href} spy={true} smooth={true} offset={50} duration={500}  aria-current="page" 
                    comingsoon="false"
                    scroll="false"
                    className='cursor-pointer nav-link  '  >{link.name}</Link>
                </li>
              )
            })
          }
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
