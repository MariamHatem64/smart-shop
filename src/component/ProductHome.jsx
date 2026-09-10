import React from 'react'
import Productdetails from "../data/Product.js"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import girlpho from "../assets/images/homephoto/girl.png"
import boy from "../assets/images/homephoto/boy.png"
import offer from '../data/offer.js'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import brand1 from "../assets/images/homephoto/brandlogo2.jpg"
import brand2 from "../assets/images/homephoto/brandlogo4.jpg"
import brand3 from "../assets/images/homephoto/brandlogo5.jpg"
import brand4 from "../assets/images/homephoto/brandlogo6.jpg"
import brand5 from "../assets/images/homephoto/tablogo1 (1).jpg"
import frame1 from "../assets/images/homephoto/Frame 111.jpg"
import frame2 from "../assets/images/homephoto/Frame 110.jpg"
import frame3 from "../assets/images/homephoto/Frame 112.jpg"
import { useDispatch } from "react-redux"
import { addtocart } from "../Slices/CartSlice"

const ProductHome = () => {
   const dispatch = useDispatch()  
   const [showMessage, setShowMessage] = useState(null)
// علي شان نعرض المنتجات هي جديدخ ولالا
const pro = Productdetails.filter((product) => product.isNew==="true");

// الحجم
const[selectsize,setselectsize]=useState({})


// هنا دا للوقت العرض بتاع الخضم 
const endtime=new Date(offer.endTime).getTime();
const[time,settime]=useState(endtime - new Date().getTime())

useEffect(()=>{
  const timer=setInterval(()=>{
    const now=new Date().getTime();
    const difference=endtime-now;

    if(difference>0){
      settime(difference)
    }else{
      settime(0);
      clearInterval(timer)
    }
  },1000)
  return ()=> clearInterval(timer)
}, [endtime])

const totalseconds=Math.floor(time/1000)
const days=Math.floor(totalseconds/(24*60*60))
const hours=Math.floor(totalseconds %(24*60*60)/(60*60))
const munites=Math.floor(totalseconds %(60*60)/60)
const second=totalseconds%60


//  الفئات رجالي حريمي اطفال

const[category,setcategory]=useState("رجالي")
 const filterproduct=Productdetails.filter((product)=>
product.category===category)


  return (
    
    <>

    {/* بنعرض احدث المنتجات  */}
    <section className='my-[150px]'>
        <h2 className='text-center text-xl font-bold mb-[10px]'>احدث المنتجات</h2>
        <hr className="mx-auto w-[100px]  h-[2px] border-0 bg-[#6ecddd] mb-[100px]" />
        <div className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center">
         {
            pro.map((product)=>(
                <div key={product.id} className='mb-4'>
                 
                 <div className="relative group">


<Link to={`/product/${product.id}`}>
  <img
    src={product.Image}
    alt={product.name}
    className="w-full"
  />
</Link>

  

  <div className="absolute bottom-0 left-0 right-0
                  bg-[#6ecddd]
                  text-black
                  text-center
                  py-6
                  rounded-t-md
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300">

 <button
 className='text-xl font-bold'
  onClick={() => {
    dispatch(
  addtocart({
    ...product,
    selectedSize: selectsize[product.id] || product.size[0],
    selectedColor: product.color[0]
  })
)

    setShowMessage(product.id)

    setTimeout(() => {
      setShowMessage(null)
    }, 1500)
  }}
 
>
  اضف للسلة
</button>

{showMessage === product.id && (
  <div className="bg-green-500 text-white px-4 py-2 rounded-md mt-3">
    ✓ تم إضافة المنتج للسلة
  </div>
)}
   

  </div>

</div>

               <div className='flex gap-3'>
                  <div>
                  <span className="text-yellow-400">
                     {"★".repeat(product.rating)}
                   </span>

                   <span className="text-gray-300">
                           {"☆".repeat(5 - product.rating)}
                     </span>

                   <p className='my-2'>{product.name}</p>

                 {product.size.map((size) => (
                      <button key={size}
                        onClick={() =>
                         setselectsize({
                           ...selectsize,
                         [product.id]:size 
                     })
       }
                        className={`px-3 py-1 border m-1 ${
                           selectsize[product.id] === size
                           ? "bg-[#6ecddd] text-white" : "bg-white text-black"
    }`}
  >{size}</button>
))}
                     </div>
                            <div>
                        <p className='text-[#6ecddd] text-lg'>{product.price}ج.م</p>
                        <p className='text-[#6ecddd] line-through'>{product.oldPrice}ج.م</p>
                             </div>
                     </div>
                </div>
            ))
            
         
         }

        </div>
    </section>



{/* الوقت بتاع العرض */}
  
<section className="flex flex-col md:flex-row items-center justify-between w-full min-h-[600px] bg-[#BDE6FC] overflow-hidden">

 
  <div className="w-full md:w-auto flex justify-center md:justify-start">
    <img
      src={girlpho}
      alt="girl"
      className="w-48 sm:w-56 md:w-64 lg:w-80 object-contain"
    />
  </div>


  
  <div className="flex-1 flex flex-col items-center text-center px-4 py-10 md:py-0">

    <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 whitespace-nowrap">
      اكبر خصم علي الاطلاق
    </h3>

    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#9363B5] mb-8 whitespace-nowrap">
      احدث ملابس الاطفال
    </h2>


   
    <div className="flex gap-5 md:gap-8 mb-8" dir="rtl">

  <div className="text-center">
    <p className="text-2xl md:text-3xl font-semibold">
      {String(days).padStart(2,"0")}
    </p>

    <span className="text-2xl md:text-3xl">
      يوم
    </span>
  </div>


  <div className="text-center">
    <p className="text-2xl md:text-3xl font-semibold">
     {String(hours).padStart(2,"0")}
    </p>

    <span className="text-xl md:text-3xl">
      ساعة
    </span>
  </div>


  <div className="text-center">
    <p className="text-2xl md:text-3xl font-semibold">
      {String(munites).padStart(2,"0")}
    </p>

    <span className="text-xl md:text-3xl">
      دقيقة
    </span>
  </div>


  <div className="text-center">

    <p className="text-3xl md:text-3xl font-semibold text-[#9363B5]">
     {String(second).padStart(2,"0")}
    </p>

    <span className="text-xl md:text-3xl text-[#9363B5]">
      ثواني
    </span>

  </div>

</div>

    
   <Link
  to="/Product"
  className="bg-[#9363B5] text-white px-8 py-3 text-4xl rounded-full hover:opacity-90 transition"
>
  تسوق الآن
</Link>

  </div>


 
  <div className="w-full md:w-auto flex justify-center md:justify-end">
    <img
      src={boy}
      alt="boy"
      className="w-48 sm:w-56 md:w-64 lg:w-80 object-contain"
    />
  </div>

</section>


{/* تسوق عبر الفئات */}

 <section className="w-full max-w-full overflow-hidden px-4 py-12 sm:px-5 md:px-10 lg:px-16 xl:px-[100px]">

  <div className="flex w-full max-w-full flex-col gap-8 lg:flex-row lg:items-start">

   
    <div className="w-full shrink-0 lg:w-[220px]">

      <div className="overflow-hidden rounded-lg border border-gray-200">

        <div className="border-b border-gray-200 bg-[#6ecddd] px-4 py-6 text-center text-xl font-semibold">
          تسوق عبر الفئات
        </div>

        <button
          onClick={() => setcategory("رجالي")}
          className="w-full border-b border-gray-200 px-6 py-5 text-center transition hover:bg-[#6ecddd] hover:text-white"
        >
          رجالي
        </button>

        <button
          onClick={() => setcategory("حريمي")}
          className="w-full border-b border-gray-200 px-6 py-5 text-center transition hover:bg-[#6ecddd] hover:text-white"
        >
          حريمي
        </button>

        <button
          onClick={() => setcategory("اطفالي")}
          className="w-full border-b border-gray-200 px-6 py-5 text-center transition hover:bg-[#6ecddd] hover:text-white"
        >
          أطفال
        </button>

        <button
          onClick={() => setcategory("اكسسوارات")}
          className="w-full border-b border-gray-200 px-6 py-5 text-center transition hover:bg-[#6ecddd] hover:text-white"
        >
          اكسسوارات
        </button>

        <button
          onClick={() => setcategory("العاب")}
          className="w-full px-6 py-5 text-center transition hover:bg-[#6ecddd] hover:text-white"
        >
          ألعاب
        </button>

      </div>
    </div>


   
    <div className="w-full min-w-0 max-w-full flex-1">

  <Swiper
    className="w-full "
    modules={[Navigation]}
    navigation
    slidesPerView={1}
    spaceBetween={15}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }}
  >

    {filterproduct.map((profilter) => (

      <SwiperSlide key={profilter.id}>

        <div className="w-full min-w-0">

         
          <div className="group relative w-full overflow-hidden">



<Link to={`/product/${profilter.id}`}>
  <img
    src={profilter.Image}
              alt={profilter.name}
              className="block w-full max-w-full object-contain"
  />
</Link>
            

           
            <div
              className="
                absolute bottom-0 left-0 right-0
                translate-y-full
                bg-[#6ecddd]
                py-4
                text-center
                text-black
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              
 <button
  onClick={() => {
    dispatch(
      addtocart({
        ...profilter,
        selectedSize: selectsize[profilter.id] || profilter.size[0],
        selectedColor: profilter.color[0]
      })
    )

    setShowMessage(profilter.id)

    setTimeout(() => {
      setShowMessage(null)
    }, 1500)
  }}
  className="text-xl font-bold px-5 py-2 rounded-md w-full sm:w-auto"
>
  اضف للسلة
</button>

{showMessage === profilter.id && (
  <div className="bg-green-500 text-white px-4 py-2 rounded-md mt-3">
    ✓ تم إضافة المنتج للسلة
  </div>
)}
            </div>

          </div>


         
          <div className="flex justify-between gap-3 py-4">

            
            <div className="min-w-0 flex-1">

             
              <div>
                <span className="text-yellow-400">
                  {"★".repeat(profilter.rating)}
                </span>

                <span className="text-gray-300">
                  {"☆".repeat(5 - profilter.rating)}
                </span>
              </div>


             
              <p className="my-2 break-words">
                {profilter.name}
              </p>


              {/* Sizes */}
              <div className="flex flex-wrap gap-2">

                {profilter.size.map((size) => (

                  <button
                    key={size}
                    onClick={() =>
                      setselectsize({
                        ...selectsize,
                        [profilter.id]: size,
                      })
                    }
                    className={`
                      min-w-[28px]
                      border
                      px-2
                      py-1
                      text-sm
                      transition
                      ${
                        selectsize[profilter.id] === size
                          ? "bg-[#6ecddd] text-white"
                          : "bg-white text-black"
                      }
                    `}
                  >
                    {size}
                  </button>

                ))}

              </div>

            </div>


           
            <div className="shrink-0 text-left">

              <p className="text-lg text-[#6ecddd]">
                {profilter.price} ج.م
              </p>

              <p className="text-sm text-[#6ecddd] line-through">
                {profilter.oldPrice} ج.م
              </p>

            </div>

          </div>

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

</div>

  </div>

</section> 


<section className="w-full overflow-hidden px-4 py-12">

  <h3 className="mt-16 mb-3 text-center text-2xl font-semibold sm:mt-20">
    البراندات
  </h3>

  <hr className="mx-auto mb-12 h-[2px] w-[100px] border-0 bg-[#6ecddd] sm:mb-16" />

  <div className="grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">

    <img
      src={brand2}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

    <img
      src={brand3}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

    <img
      src={brand1}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

    <img
      src={brand4}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

    <img
      src={brand2}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

    <img
      src={brand5}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

    <img
      src={brand3}
      alt="brand"
      className="h-20 w-32 object-contain sm:h-24 sm:w-36"
    />

  </div>

</section>


 <section className=' mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-items-center gap-4'>

  <div>
    <img src={frame1}></img>
    <h3 className=' my-2 text-xl font-semibold text-center '>
     استمتعي باجواء مبهره في الخروجات
    </h3>
    <p className='my-2 text-sm font-light text-center'>مع باقه من اجمل الملابس الكاجوال البناتي المودرن</p>
  </div>

  <div>
    <h3 className=' my-2 text-xl font-semibold text-center'>
     اشتري اللي يخليك شيك
    </h3>
    <p className='my-2 text-sm font-light text-center'>مع احدث واجمل ملابش الشباب الحديثه</p>
    <img src={frame2}></img>
    
  </div>

  <div>
    <img src={frame3}></img>
    <h3 className=' my-2 text-xl font-semibold text-center'>
     مع اجمل صيحات الموضه والفاشون
    </h3>
    <p className='my-2 text-sm font-light text-center'>اطلاله فريده مع افضل تشكيله ملابس شبابي
</p>
  </div>
</section> 
 
    </>
  )
}

export default ProductHome