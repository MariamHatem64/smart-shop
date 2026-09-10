
import React from 'react'
import {
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaFacebookF
} from "react-icons/fa";

const Footerr = () => {
  return (
    <section className="w-full max-w-full overflow-x-hidden bg-[#54A4AF] mt-[100px]">

      <div className="w-full px-4 py-12">

        <div className="text-sm md:text-base lg:text-xl">

          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-4 text-center text-white md:mt-12">

            <li>الرئيسيه</li>
            <li>المنتجات</li>
            <li>السله</li>
            <li>نبذه عنا</li>
            <li>الشروط والاحكام</li>
            <li>اتصل بنا</li>

          </ul>

        </div>

        <div className="my-8 flex justify-center gap-6">
        
<div className="bg-blue-400  transition duration-300 hover:scale-110 rounded-full p-3"> 
          <FaTwitter
            size={25}
            className="text-white"
          />
</div>

<div className="bg-blue-600 transition duration-300 hover:scale-110 rounded-full p-3"> 
          <FaFacebookF
            size={25}
            className="text-white "
          />
</div>

       <div className="bg-red-500 transition duration-300 hover:scale-110 rounded-full p-3"> 
          <FaYoutube
            size={25}
            className="text-white"
          />

          </div>


<div className="bg-green-400 transition duration-300 hover:scale-110 rounded-full p-3"> 
          <FaWhatsapp
            size={25}
            className='text-white'
            
          />
          </div> 
        </div>

        <div>

          <h3 className="mb-10 text-center text-2xl text-white md:text-3xl">
            ابق علي تواصل
          </h3>

          <p className="text-center text-sm text-white md:text-lg">
            جميع حقوق النشر محفوظة لشركة اسمارت كود
          </p>

        </div>

      </div>

    </section>
  )
}

export default Footerr

