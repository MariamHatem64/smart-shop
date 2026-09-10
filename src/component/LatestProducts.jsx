
import React from 'react'
import photolatest from "../assets/images/productphoto/photolatest.jpg"

const LatestProducts = () => {
  return (
    <section className="relative w-full overflow-hidden">

      <img
        src={photolatest}
        className="block w-full h-auto"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <h1 className="text-center text-xl text-white sm:text-xl md:text-4xl">
          تسوق احدث المنتجات العصريه
        </h1>

        <p className="mt-4  text-center text-sm text-white sm:text-lg md:text-xl">
          الرئيسيه <span className="text-red-500">/</span> المنتجات
        </p>

      </div>

    </section>
  )
}

export default LatestProducts

