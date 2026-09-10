import React, { useState, useEffect } from 'react'
import productdetails from "../data/Product.js"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtocart } from "../Slices/CartSlice"
import {
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaFacebookF
} from "react-icons/fa"
import Reviews from '../component/Review.jsx'

const AboutProduct = () => {

  const [counter, setCounter] = useState(1)

  const [selectedColor, setSelectedColor] = useState(null)

  const [selectedSize, setSelectedSize] = useState(null)

  const [showMessage, setShowMessage] = useState(false)

  const dispatch = useDispatch()

  const { id } = useParams()

  const navigate = useNavigate()
  const product = productdetails.find(
    (product) => product.id === Number(id)
  )


  
  useEffect(() => {

    if (product) {

     
      setSelectedColor(product.color[0])

    
      if (product.size.includes("M")) {
        setSelectedSize("M")
      } else {
        setSelectedSize(product.size[0])
      }

    }

  }, [product])


  return (

    <>

      <section className="flex flex-col lg:flex-row gap-8 justify-center mt-6 px-4 lg:px-10">


      

        <div className="w-full lg:w-[530px]">

          <div className="w-full">

            <img
              src={product.Image}
              alt={product.name}
              className="w-full max-w-[530px] mx-auto"
            />

          </div>


          <div className="flex gap-2 mt-3 justify-center flex-wrap">

            <img
              src={product.Image}
              alt={product.name}
              className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] object-cover cursor-pointer"
            />

            <img
              src={product.Image}
              alt={product.name}
              className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] object-cover cursor-pointer"
            />

            <img
              src={product.Image}
              alt={product.name}
              className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] object-cover cursor-pointer"
            />

            <img
              src={product.Image}
              alt={product.name}
              className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] object-cover cursor-pointer"
            />

            <img
              src={product.Image}
              alt={product.name}
              className="w-[70px] sm:w-[90px] h-[70px] sm:h-[90px] object-cover cursor-pointer"
            />

          </div>

        </div>


      

        <div className="w-full lg:max-w-[530px]">


         

          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {product.name}
          </p>


       

          <div className="flex gap-3 mt-6 items-center">

            <p className="text-xl">
              {product.price} ج.م
            </p>

            <p className="line-through text-gray-500">
              {product.oldPrice} ج.م
            </p>

          </div>


        

          <div className="my-3">

            <span className="text-yellow-400">
              {"★".repeat(product.rating)}
            </span>

            <span className="text-gray-300">
              {"☆".repeat(5 - product.rating)}
            </span>

          </div>


          

          <p className="my-6 leading-7">
            {product.discription}
          </p>


      

          <div className="mt-3">

            <p>
              اللون :
            </p>

            <div className="flex gap-2 flex-wrap">

              {product.color.map((color, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                </button>

              ))}

            </div>

          </div>


          

          <div className="mt-3">

            <p className="my-2">
              المقاس :
            </p>

            <div className="flex gap-2 flex-wrap">

              {product.size.map((size, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedSize === size
                      ? "bg-[#7FD3DF] text-white border-[#7FD3DF]"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>


         

          <div className="flex flex-col sm:flex-row gap-4 my-6">


          

            <div className="flex border items-center rounded-full w-[120px] h-[40px] overflow-hidden bg-gray-400">

              <button
                onClick={() => setCounter(counter + 1)}
                className="px-4"
              >
                +
              </button>


              <p className="bg-white h-full flex-1 flex items-center justify-center">
                {counter}
              </p>


              <button
                onClick={() => {

                  if (counter > 1) {
                    setCounter(counter - 1)
                  }

                }}
                className="px-4"
              >
                -
              </button>

            </div>


           

            <div className="w-full sm:w-auto">

              <button
                onClick={() => {

                  dispatch(
                    addtocart({
                      ...product,
                      selectedColor,
                      selectedSize,
                      quantity: counter
                    })
                  )

                  setShowMessage(true)

                  setTimeout(() => {
                    setShowMessage(false)
                  }, 1500)

                }}
                className="bg-[#7FD3DF] text-white px-5 py-2 rounded-md w-full sm:w-auto"
              >
                اضف للسلة
              </button>


              {showMessage && (

                <div className="bg-green-500 text-white px-4 py-2 rounded-md mt-3">
                  ✓ تم إضافة المنتج للسلة
                </div>

              )}

            </div>

          </div>


         

          
<button
className="bg-[#7FD3DF] text-white px-5 py-3 rounded-md w-full"
  onClick={() => {
    dispatch(
      addtocart({
        ...product,
        selectedColor,
        selectedSize,
        quantity: counter
      })
    )

    navigate("/Sala")
  }}
>
  اشتري الآن
</button>

        

          <div className="my-6">

            <p>
              شارك عبر مواقع التواصل
            </p>


            <div className="my-6 flex gap-2">


              <div className="bg-blue-400 transition duration-300 hover:scale-110 rounded-full p-3">

                <FaTwitter
                  size={15}
                  className="text-white"
                />

              </div>


              <div className="bg-blue-600 transition duration-300 hover:scale-110 rounded-full p-3">

                <FaFacebookF
                  size={15}
                  className="text-white"
                />

              </div>


              <div className="bg-red-500 transition duration-300 hover:scale-110 rounded-full p-3">

                <FaYoutube
                  size={15}
                  className="text-white"
                />

              </div>


              <div className="bg-green-400 transition duration-300 hover:scale-110 rounded-full p-3">

                <FaWhatsapp
                  size={15}
                  className="text-white"
                />

              </div>


            </div>

          </div>


        </div>

      </section>


      <Reviews product={product} />

    </>

  )
}

export default AboutProduct