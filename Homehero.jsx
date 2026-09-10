import React from 'react'
import photo from "../assets/images/homephoto/herophoto.jpg"
import photo2 from "../assets/images/homephoto/Frame 112.jpg"
import photo3 from "../assets/images/homephoto/photo3.png"
import photo4 from "../assets/images/homephoto/photo4.png"
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "./Homestyle.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Truck ,Smartphone ,Gift ,HandCoins } from "lucide-react"





const Homehero = () => {

  const navigate = useNavigate()
  const heroSlides = [
  {
    image: photo,
    topText: "براندات نسائي عالميه",
    title: "احدث ادوات الجمال",
    bottomText: "براندات نسائي عالميه",
  },
  {
    image: photo2,
    topText: "براندات رجالي عالميه",
    title: "احدث ادوات الجمال",
    bottomText: "براندات رجالي عالميه",
  },
]
  return (
   <>
   
   
  <Swiper
  className="heroSwiper"
  modules={[Navigation, Pagination]}
  navigation
  pagination
  slidesPerView={1}
>

    {heroSlides.map((slid)=>(
    <SwiperSlide key={slid.image}>
      
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 md:px-10 lg:px-16  xl:px-[240px] gap-8 lg:gap-0 py-[100px] ">

        <div className="text-center lg:text-start ">
          <p className="text-xl md:text-2xl lg:text-4xl font-light lg:ms-[50px] mb-3"> {slid.topText}  </p>

          <p className="text-3xl md:text-3xl lg:text-5xl font-normal">
            {slid.title}
          </p>

          <p className="text-xl md:text-2xl lg:text-4xl font-light lg:ms-[50px] my-5">
           {slid.bottomText}
          </p>

          <button className="text-sm md:text-base bg-[#6ecddd] text-white px-7 md:px-9 py-3 rounded-full lg:ms-[100px]"
           onClick={() => {
    navigate("/Product")}}>
            اكتشف الان
          </button>
        </div>


       <div className="w-full max-w-[380px] md:w-[400px] lg:w-[500px]">
          <img
            src={slid.image}
            className="w-full"
          />
        </div>

      </div>
     
    </SwiperSlide>
 ))}
    </Swiper>


<section className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-8 sm:px-8 md:px-12 lg:px-0 lg:gap-10 xl:gap-[110px] mt-[60px] lg:mt-[100px] mb-[60px] lg:mb-[100px] ">

  <div className="flex items-center gap-4">
    <div className="w-12 h-12 shrink-0 border border-[#6ecddd] rounded-lg flex items-center justify-center text-[#6ecddd]">
      <Truck size={30} />
    </div>
    <div>
      <h3>توصيل مجاني</h3>
      <p className="font-light">للطلبات أعلى من 200 جنيه</p>
    </div>
  </div>

  <div className="flex items-center gap-4">
    <div className="w-12 h-12 shrink-0 border border-[#6ecddd] rounded-lg flex items-center justify-center text-[#6ecddd]">
      <Smartphone size={30} />
    </div>
    <div>
      <h3>دعم فني</h3>
      <p className="font-light">دعم على مدار الساعة</p>
    </div>
  </div>

  <div className="flex items-center gap-4">
    <div className="w-12 h-12 shrink-0 border border-[#6ecddd] rounded-lg flex items-center justify-center text-[#6ecddd]">
      <HandCoins size={30} />
    </div>
    <div>
      <h3>استرجاع الأموال</h3>
      <p className="font-light">استرداد آمن لأموالك أو الاستبدال</p>
    </div>
  </div>

  <div className="flex items-center gap-4">
    <div className="w-12 h-12 shrink-0 border border-[#6ecddd] rounded-lg flex items-center justify-center text-[#6ecddd]">
      <Gift size={30} />
    </div>
    <div>
      <h3>عروض حصرية</h3>
      <p className="font-light">خصومات كبيرة على منتجاتنا</p>
    </div>
  </div>

</section>


<hr className="mx-auto w-full max-w-[500px] h-[2px] border-0 bg-[#6ecddd]"></hr>




<section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[70px] mt-[80px] lg:mt-[150px] px-5">

 
  <div className="flex items-center w-full lg:w-[600px] h-[280px] sm:h-[300px] bg-[#dff7fa] p-5 sm:p-6">

    <div className="w-[45%] h-full flex items-center justify-center">
      <img
        className="w-full h-full object-contain"
        src={photo3}
      />
    </div>

    <div className="w-[55%] text-start ps-5">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3">
        ملابس الأطفال
      </h2>

      <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-3">
        خصم 50%
      </p>

      <button className="text-base sm:text-lg lg:text-xl  underline">
        تسوق الآن
      </button>
      
    </div>

  </div>

  <div className="flex items-center w-full lg:w-[600px] h-[280px] sm:h-[300px] bg-[#fde4ec] p-5 sm:p-6">

    <div className="w-[45%] h-full flex items-center justify-center">
      <img
        className="w-full h-full object-contain"
        src={photo4}
      />
    </div>

    <div className="w-[55%] text-start ps-5">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3">
        فساتين بناتي
      </h2>

      <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-3">
        خصم كبير
      </p>

      <button className="text-base sm:text-lg lg:text-xl  underline">
        تسوق الآن
      </button>
    </div>

  </div>

</section>
   </>
  );
};

export default Homehero;