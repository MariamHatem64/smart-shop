import React, { useState } from 'react'
import { ChevronLeft, LayoutGrid } from "lucide-react"
import Productdetails from "../data/Product.js"
import "../component/shopingproduct.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Grid, Pagination } from "swiper/modules"
import "../component/shopping.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtocart } from "../Slices/CartSlice"

const Shopping = () => {

  const dispatch = useDispatch()

  // رسالة إضافة المنتج للسلة
  const [showMessage, setShowMessage] = useState(null)

  // الرينج
  const [minprice, setminprice] = useState(10)
  const [maxprice, setmaxprice] = useState(10000)

  const products = Productdetails.filter((product) => {
    return (
      product.price >= minprice &&
      product.price <= maxprice
    )
  })

  // ترتيب حسب السعر
  const [sorttype, setsorttype] = useState("")

  const sortedproduction = [...products].sort((a, b) => {

    if (sorttype === "low") {
      return a.price - b.price
    }

    if (sorttype === "high") {
      return b.price - a.price
    }

    return 0
  })

  // الحجم
  const [selectsize, setselectsize] = useState({})

  // عدد المنتجات المعروضة
  const [viewCount, setViewCount] = useState(6)

  return (
    <>

      <section className="my-[100px] mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-3 lg:px-8">

      
        <div className="lg:col-span-1">

     
          <div className="mb-7">

            <div className="flex">
              <ChevronLeft />

              <h4 className="text-2xl font-medium mb-4">
                الفئات
              </h4>
            </div>

            <div className="flex justify-between my-2">
              <p>الاكسسوارات</p>
              <p>+</p>
            </div>

            <div className="flex justify-between my-2">
              <p>الملابس</p>
              <p>+</p>
            </div>

            <div>
              <p>الالكترونيات</p>
            </div>

            <div className="flex justify-between my-2">
              <p>الاثاث</p>
              <p>+</p>
            </div>

            <div>
              <p>الاحذيه</p>
            </div>

            <div className="flex justify-between my-2">
              <p>المجوهرات</p>
              <p>+</p>
            </div>

            <div className="flex justify-between my-3">
              <p>اخري</p>
              <p>+</p>
            </div>

          </div>


 
          <div className="mb-7">

            <div className="flex mt-3">

              <ChevronLeft />

              <h4 className="text-2xl font-medium mb-4">
                السعر
              </h4>

            </div>

            <div className="flex justify-between text-sm mb-4">

              <span>
                {minprice} جنيه
              </span>

              <span>
                {maxprice} جنيه
              </span>

            </div>

            <div className="relative h-8">

              <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded-full z-0" />

              <div
                className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#6ecddd] rounded-full z-10"
                style={{
                  left: `${100 - ((maxprice - 10) / (10000 - 10)) * 100}%`,
                  right: `${((minprice - 10) / (10000 - 10)) * 100}%`,
                }}
              />

        
              <input
                type="range"
                min="10"
                max="10000"
                value={minprice}
                onChange={(e) => {

                  const value = Number(e.target.value)

                  if (value < maxprice) {
                    setminprice(value)
                  }

                }}
                className="price-range absolute w-full top-1/2 -translate-y-1/2 z-30"
              />

         
              <input
                type="range"
                min="10"
                max="10000"
                value={maxprice}
                onChange={(e) => {

                  const value = Number(e.target.value)

                  if (value > minprice) {
                    setmaxprice(value)
                  }

                }}
                className="price-range absolute w-full top-1/2 -translate-y-1/2 z-20"
              />

            </div>

          </div>


          {/* Size */}
          <div className="mb-7">

            <div className="flex mt-3">

              <ChevronLeft />

              <h4 className="text-2xl font-medium mb-4">
                size
              </h4>

            </div>

            <div className="flex gap-2">

              <p className="py-2 px-4 border text-lg">
                s
              </p>

              <p className="py-2 px-4 border text-lg">
                m
              </p>

              <p className="py-2 px-4 border text-lg">
                l
              </p>

              <p className="py-2 px-4 border text-lg">
                xl
              </p>

            </div>

          </div>


          {/* Color */}
          <div className="mb-7">

            <div className="flex mt-3">

              <ChevronLeft />

              <h4 className="text-2xl font-medium mb-4">
                color
              </h4>

            </div>

            <div className="flex gap-2">

              <div className="py-2 px-2 border rounded-full bg-red-600"></div>

              <div className="py-2 px-2 border rounded-full bg-orange-500"></div>

              <div className="py-2 px-2 border rounded-full bg-blue-500"></div>

              <div className="py-2 px-2 border rounded-full bg-purple-500"></div>

              <div className="py-2 px-2 border rounded-full bg-green-500"></div>

            </div>

          </div>


         
          <div className="mb-7">

            <div className="flex mt-3">

              <ChevronLeft />

              <h4 className="text-2xl font-medium mb-4">
                العلامه التجاريه
              </h4>

            </div>

            <p className="my-2">
              سوني
            </p>

            <p className="my-2">
              لينوفو
            </p>

            <p className="my-2">
              جونسون & هاندسون
            </p>

            <p className="my-2">
              ابل
            </p>

            <p className="my-2">
              جوجل
            </p>

            <p className="my-2">
              سامسونج
            </p>

          </div>


          {/* Featured Products */}
          <div className="mb-7">

            <div className="flex mt-3">

              <ChevronLeft />

              <h4 className="text-2xl font-medium mb-4">
                العناصر المميزه
              </h4>

            </div>

            {[
              Productdetails[6],
              Productdetails[5],
              Productdetails[1],
            ].map((product) => (

              <div
                key={product.id}
                className="flex gap-3"
              >

                <img
                  src={product.Image}
                  alt={product.name}
                  className="w-[80px] m-3"
                />

                <div>

                  <p className="text-lg mt-2">
                    {product.name}
                  </p>

                  <p className="text-xl mt-4">
                    {product.price}ج.م
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


       
        <div className="lg:col-span-2">

     
          <div className="flex flex-wrap items-center justify-between gap-4 border rounded-2xl p-4">

      
            <div className="flex items-center gap-4">

              <p>
                عرض
              </p>

              <div className="bg-[#7FD3DF] text-white p-2 border rounded-lg">

                <LayoutGrid size={15} />

              </div>

            </div>


           
            <div className="flex items-center gap-3 flex-wrap">

              <h4>
                المشاهده
              </h4>

              {[6, 12, 18, 24, 30].map((count) => (

                <button
                  key={count}
                  onClick={() => setViewCount(count)}
                  className={
                    viewCount === count
                      ? "text-[#6ecddd] font-bold"
                      : "text-black"
                  }
                >
                  {count}
                </button>

              ))}

            </div>


         
            <div className="flex items-center gap-2">

              <p>
                ترتيب حسب
              </p>

              <select
                className="border rounded-lg bg-[#7FD3DF] text-white px-4 py-2"
                value={sorttype}
                onChange={(e) => setsorttype(e.target.value)}
              >

                <option value="">
                  ترتيب حسب
                </option>

                <option value="low">
                  اقل سعر
                </option>

                <option value="high">
                  اعلي سعر
                </option>

              </select>

            </div>

          </div>


   
          <div className="my-6">

            <div className="w-full min-w-0 max-w-full flex-1">

              <Swiper
                className="productSwiper w-full"
                modules={[Navigation, Pagination, Grid]}
                navigation
                pagination={{
                  clickable: true,
                }}
                spaceBetween={15}
                slidesPerView={1}

                grid={{
                  rows: 1,
                  fill: "row",
                }}

                breakpoints={{

                  640: {

                    slidesPerView: 2,

                    spaceBetween: 20,

                    grid: {
                      rows: 2,
                      fill: "row",
                    },

                  },

                  1024: {

                    slidesPerView: 3,

                    spaceBetween: 20,

                    grid: {
                      rows: 3,
                      fill: "row",
                    },

                  },

                }}

              >

                {sortedproduction
                  .slice(0, viewCount)
                  .map((profilter) => (

                    <SwiperSlide key={profilter.id}>

                      <div className="w-full min-w-0">

                        {/* Product Image */}
                        <div className="group relative w-full overflow-hidden">

                          <Link to={`/product/${profilter.id}`}>

                            <img
                              src={profilter.Image}
                              alt={profilter.name}
                              className="block h-[280px] w-full max-w-full object-contain"
                            />

                          </Link>

                          <div

  className="
    absolute bottom-0 left-1/2
    w-[90%]
    -translate-x-1/2
    translate-y-full
    bg-[#6ecddd]
    py-2
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


                           
                            <div className="flex flex-nowrap gap-1">

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
                                    whitespace-nowrap
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

        </div>

      </section>

    </>
  )
}

export default Shopping