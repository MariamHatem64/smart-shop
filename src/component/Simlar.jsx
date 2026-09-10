import React, { useState } from 'react'
import Productdetails from "../data/Product"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addtocart } from "../Slices/CartSlice"

const Simlar = () => {

  const dispatch = useDispatch()
const [selectsize, setselectsize] = useState({})
  const [showMessage, setShowMessage] = useState(null)

  return (
    <>

      <section className="mt-20">

        <h2 className="mb-8 text-2xl font-semibold text-center">
          منتجات مشابهة
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {Productdetails.slice(0, 5).map((product) => (

            <div
              key={product.id}
              className="mx-auto w-full max-w-[300px] min-w-0 lg:max-w-none"
            >

              <div className="group relative w-full overflow-hidden">

                <Link to={`/product/${product.id}`}>

                  <img
                    src={product.Image}
                    alt={product.name}
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
                    className="text-xl font-bold px-5 py-2 rounded-md w-full sm:w-auto"
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

              <div className="flex justify-between gap-3 py-4">

                <div className="min-w-0 flex-1">

                
                  <div>

                    <span className="text-yellow-400">
                      {"★".repeat(product.rating)}
                    </span>

                    <span className="text-gray-300">
                      {"☆".repeat(5 - product.rating)}
                    </span>

                  </div>

                  <p className="my-2 break-words">
                    {product.name}
                  </p>

                  <div className="flex flex-nowrap gap-1">

                   {product.size.map((size) => (
  <button
    key={size}
    onClick={() =>
      setselectsize({
        ...selectsize,
        [product.id]: size
      })
    }
    className={`
      min-w-[28px]
      border
      px-2
      py-1
      text-sm
      whitespace-nowrap
      ${
        selectsize[product.id] === size
          ? "bg-[#6ecddd] text-black"
          : ""
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
                    {product.price} ج.م
                  </p>

                  <p className="text-sm text-[#6ecddd] line-through">
                    {product.oldPrice} ج.م
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </>
  )
}

export default Simlar