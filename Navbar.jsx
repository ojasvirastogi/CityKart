import React from "react";
import Logo from "../../assets/logo(1) .png";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
 import Darkmode from "../Darkmode";
 import { Link } from 'react-router-dom';
 import { IoMdArrowDropdown } from "react-icons/io";

 const Menu = [
  
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];
  const DropdownLinks = [{
    id: 1,
    name: "Trending Products",
    link: "/#",

  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
      name:"Top Rated",
        link: "/#",
  },
  {
    id: 4,
    name: "Trending Products",
    link: "/#",

  },
  {
    id: 5,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 6,
      name:"Top Rated",
        link: "/#",
  }]
  

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10 " /> CityKart
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search here"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300  py-1
                  focus: outline-none 
                  focus:border-1
                focus:border-primary px-[20px]
                dark:border-gray-500
                dark:bg-gray-800
                text-black"
              />
              <IoSearchSharp
                className="text-gray-500 
                group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 "
              />
            </div>
          </div>
          {/* order  section  */}
          <button onClick={() => alert("Order section")} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group ">
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
            <IoCartSharp className="text-xl text-white drop-shadow-sm cursor pointer" />
          </button>
          {/* darkmode switch */}
          <div>
            <Darkmode/>
          </div>


        </div>
      </div>
      {/* lower navbar */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 flex justify-center">
      
        <ul className="sm:flex hidden items-center gap-4">
            {
                Menu.map((data)=>(
                    <li key={data.id}>
                        <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.name}</Link>
                    </li>
                ))}
                {/* simple dropdown and links */}
                <li className="group relative cursor pointer">
                  <a href="#" className="flex items-center gap-[2px] py-2">Trending Products
                    
                    <span>
                    <IoMdArrowDropdown  className="transition-all duration-200 group-hover:rotate-180"/>
                    </span>
                   </a>  
                  <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
                    <ul>
                        {DropdownLinks.map((data)=>(
                            <li key={data.id}>
                                <a href={data.link} className='inline-block w-full rounded-md py-4 px-2 hover:bg-primary/20'>{data.name}</a>

                            </li>
                        ))}
                    </ul>
                  </div>

              </li>
        </ul>
      </div>
</div>
  );
};

export default Navbar;
