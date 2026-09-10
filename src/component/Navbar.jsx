
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MiniCart from './Minicart';
import {
  Store,
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";

import detailsproduct from '../data/Product';

const Navbar = () => {

const navigate = useNavigate()
const[CartOpen,setCartOpen]=useState(false)

const [searchOpen, setSearchOpen] = useState(false)
const [searchTerm, setSearchTerm] = useState("")
const searchResults = detailsproduct.filter((product) =>
  product.name.includes(searchTerm)
)

  const navLinks = [
  { to: "/", label: "الرئيسيه" },
  { to: "/Product", label: "المنتجات" },
   { to: "/Sala", label: "السله" },
  { to: "/service", label: "الخدمات" },
  { to: "/about", label: "نبذه عن" },
  { to: "/rules", label: "الشروط والاحكام" },
  { to: "/contact", label: "اتصل بنا" },
]

  const [isOpen, setIsOpen] = useState(false)
const [isUserOpen, setIsUserOpen] = useState(false)
  return (
    <nav className="w-full ">

      <div className="mx-auto flex items-center justify-between px-6 py-5 sm:gap-10 sm:px-16 sm:py-7 lg:justify-center lg:gap-16">

        
        <div className="lg:translate-x-16">

          <div className="flex items-center gap-1">

            <div>
              <p className="text-xs font-semibold md:text-sm">
                Smart
              </p>

              <p className="text-xs font-semibold md:text-sm">
                Shop
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 sm:h-10 sm:w-10">
              <Store
                className="text-white"
                size={18}
              />
            </div>

          </div>

        </div>


        
        <div className="hidden items-center gap-4 text-base lg:flex">

          <ul className="flex gap-4">

          {
            navLinks.map((link)=>(
              <li key={link.to}>
                <NavLink to={link.to}
                className={({isActive})=>
                isActive? "text-[#6ecddd]":"text-black"}>
                  {link.label}
                </NavLink>
              </li>
            ))
          }

          </ul>

        </div>


     
        <div className="flex items-center gap-3 md:-me-4">

          
     <div className="relative">

  <button onClick={() =>{ setSearchOpen(!searchOpen)
    setIsUserOpen(false)
  }}>
    <Search size={25} />
  </button>

  {searchOpen && (

    <div className="absolute top-10 right-1/2 translate-x-1/2 w-[280px] bg-white shadow-lg rounded-lg p-3 z-50">

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن منتج..."
        className="w-full border rounded-md px-3 py-2 outline-none"
      />

      {searchTerm && (
        <div className="mt-3 max-h-[300px] overflow-y-auto">

          {searchResults.length > 0 ? (

            searchResults.map((product) => (

              <div
  key={product.id}
  onClick={() => {
    navigate(`/Product/${product.id}`)
    setSearchOpen(false)
    setSearchTerm("")
  }}
  className="flex items-center gap-3 p-2 border-b hover:bg-gray-50 cursor-pointer"
>

                <img
                  src={product.Image}
                  alt={product.name}
                  className="w-[50px] h-[50px] object-cover rounded"
                />

                <div className="text-right">

                  <p className="font-semibold text-sm">
                    {product.name}
                  </p>

                  <p className="text-[#6ecddd] text-sm">
                    {product.price} جنيه
                  </p>

                </div>

              </div>

            ))

          ) : (

            <p className="text-center text-gray-500 py-3">
              مفيش منتجات مطابقة
            </p>

          )}

        </div>
      )}

    </div>

  )}

</div>

          
          <div className="relative">
  <button onClick={() =>{ setIsUserOpen(!isUserOpen)
  setSearchOpen(false)}
  }>
    <User size={25} />
  </button>

  {isUserOpen && (
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[180px] h-auto bg-white shadow-md rounded-md p-4 z-50">
      <NavLink
        to="/signin"
        className="block py-2 text-sm hover:text-[#6ecddd]"
        onClick={() => setIsUserOpen(false)}
      >
        تسجيل الدخول
      </NavLink>

      <NavLink
        to="/signup"
        className="block py-2 text-sm hover:text-[#6ecddd]"
        onClick={() => setIsUserOpen(false)}
      >
        إنشاء حساب
      </NavLink>

    </div>
  )}
</div>

          <Heart size={25} />
          
<button
  onClick={() => setCartOpen(true)}
>
  <ShoppingCart size={25} />
</button>

{CartOpen && (
  <MiniCart
    onClose={() => setCartOpen(false)}
  />
)}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>


      
      {isOpen && (
        <div className="border-t px-6 py-5 lg:hidden">

          <ul className="flex flex-col gap-5 text-base">

            {
            navLinks.map((link)=>(
              <li key={link.to}>
                <NavLink to={link.to}
                className={({isActive})=>
                isActive? "text-[#6ecddd]":"text-black"}
                 onClick={() => setIsOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))
          }

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar

