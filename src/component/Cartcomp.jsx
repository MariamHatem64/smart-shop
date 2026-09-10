import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {
  increasequantity,
  decreasequantity,
  removefromcart,
  clearcart,
} from "../Slices/CartSlice"

const Cartcomp = () => {

  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)
  const [couponMessage, setCouponMessage] = useState("")
  const [updateMessage, setUpdateMessage] = useState("")
  const [paymentMessage, setPaymentMessage] = useState("")

  const coupons = {
    SMART10: 10,
    SMART20: 20,
    WELCOME15: 15
  }

  const dispatch = useDispatch()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )


  const handleCoupon = (e) => {

    e.preventDefault()

    const code = coupon.trim().toUpperCase()

    if (coupons[code]) {

      setDiscount(coupons[code])

      setCouponMessage(
        `تم تطبيق خصم ${coupons[code]}%`
      )

    } else {

      setDiscount(0)

      setCouponMessage(
        "الكوبون غير صحيح"
      )

    }

  }


  const discountAmount =
    (totalPrice * discount) / 100


  const finalPrice =
    totalPrice - discountAmount


  const handleUpdate = () => {

    setUpdateMessage("تم تحديث السلة")

    setTimeout(() => {
      setUpdateMessage("")
    }, 1500)

  }


  const handlePayment = () => {

    const orderData = {

      products: cartItems,

      coupon: coupon,

      discount: discount,

      subtotal: totalPrice,

      discountAmount: discountAmount,

      total: finalPrice

    }


    console.log("Order:", orderData)


    dispatch(clearcart())


    setCoupon("")
    setDiscount(0)
    setCouponMessage("")


    setPaymentMessage(
      "تم الدفع وتأكيد الطلب بنجاح"
    )


    setTimeout(() => {
      setPaymentMessage("")
    }, 2000)

  }


  return (

    <>

      <h2 className="ms-6 text-3xl my-3 font-bold">
        سلة التسوق
      </h2>


      <section className="my-10 lg:my-[70px] flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8">


      

        <section className="flex-1 min-w-0">


          

          <section className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b pb-5">

            <div>

              <p className="text-xl font-bold">
                المنتج
              </p>

            </div>


            <div className="flex justify-center">

              <p className="text-lg font-bold">
                السعر
              </p>

            </div>


            <div className="flex justify-center">

              <p className="text-lg font-bold">
                الكمية
              </p>

            </div>


            <div className="flex justify-center">

              <p className="text-lg font-bold">
                المجموع
              </p>

            </div>

          </section>


         

          <section>

            {cartItems.map((item) => (

              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="border-b py-6"
              >


                

                <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] items-center">

                

                  <div className="flex items-center gap-6 min-w-0">

                    <div className="shrink-0">

                      <img
                        src={item.Image}
                        alt={item.name}
                        className="w-[100px]"
                      />

                    </div>


                    <div className="min-w-0">

                      <p className="font-medium text-lg">
                        {item.name}
                      </p>


                      <p className="text-gray-500 mt-2">
                        اللون: {item.selectedColor}
                      </p>


                      <p className="text-gray-500">
                        الحجم: {item.selectedSize}
                      </p>

                    </div>

                  </div>


                 

                  <div className="flex justify-center">

                    <p>
                      {item.price} ج.م
                    </p>

                  </div>


                  

                  <div className="flex justify-center">

                    <div className="flex border items-center rounded-full w-[120px] h-[40px] overflow-hidden bg-gray-400">

                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
  increasequantity({
    id: item.id,
    selectedColor: item.selectedColor,
    selectedSize: item.selectedSize
  })
)
                        }
                        className="px-4"
                      >
                        +
                      </button>


                      <p className="bg-white h-full flex-1 flex items-center justify-center">
                        {item.quantity}
                      </p>


                      <button
                        type="button"
                        onClick={() =>
                           dispatch(
      decreasequantity({
        id: item.id,
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize
      })
    )
                        }
                        className="px-4"
                      >
                        -
                      </button>

                    </div>

                  </div>


                

                  <div className="flex justify-center">

                    <p className="font-medium">
                      {item.price * item.quantity} ج.م
                    </p>

                  </div>

                </div>


              

                <div className="lg:hidden flex flex-col sm:flex-row gap-5">

                  

                  <div className="flex justify-center sm:justify-start">

                    <img
                      src={item.Image}
                      alt={item.name}
                      className="w-[130px] sm:w-[120px]"
                    />

                  </div>


                 

                  <div className="flex-1">

                    <p className="font-medium text-lg">
                      {item.name}
                    </p>


                    <p className="text-gray-500 mt-2">
                      اللون: {item.selectedColor}
                    </p>


                    <p className="text-gray-500">
                      الحجم: {item.selectedSize}
                    </p>


                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4">

                      <p>
                        السعر: {item.price} ج.م
                      </p>


                    

                      <div className="flex border items-center rounded-full w-[120px] h-[40px] overflow-hidden bg-gray-400">

                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              increasequantity(item.id)
                            )
                          }
                          className="px-4"
                        >
                          +
                        </button>


                        <p className="bg-white h-full flex-1 flex items-center justify-center">
                          {item.quantity}
                        </p>


                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              decreasequantity(item.id)
                            )
                          }
                          className="px-4"
                        >
                          -
                        </button>

                      </div>


                      <p className="font-medium">
                        المجموع: {item.price * item.quantity} ج.م
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}


           

            <div className="flex justify-end mt-6">

              <h2 className="text-xl font-bold">
                الإجمالي: {totalPrice} ج.م
              </h2>

            </div>

          </section>

        </section>


   

        <section className="w-full lg:w-[40%] lg:max-w-[550px]">


          <div className="border rounded-md p-5">

            <form onSubmit={handleCoupon}>


              

              <h3 className="text-xl font-bold">
                الكوبون
              </h3>


              <p className="text-gray-400 mt-3 text-sm">
                أدخل رمز الكوبون الخاص بك إذا كان لديك واحد.
              </p>


              <div className="flex flex-col sm:flex-row gap-3 my-5">

                <input
                  type="text"
                  placeholder="ادخل الكوبون"
                  value={coupon}
                  onChange={(e) =>
                    setCoupon(e.target.value)
                  }
                  className="border rounded-md p-3 flex-1 min-w-0 outline-none"
                />


                <button
                  type="submit"
                  className="border rounded-md px-4 py-3 text-white bg-[#7FD3DF] whitespace-nowrap"
                >
                  تأكيد الكوبون
                </button>

              </div>


             

              {couponMessage && (

                <p
                  className={
                    discount > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {couponMessage}
                </p>

              )}


              

              <h3 className="text-xl font-bold mt-6">
                ملحوظة
              </h3>


              <p className="text-gray-400 mt-3 text-sm">
                اضافة ملحوظة للبائع ...
              </p>


              <textarea
                placeholder="اكتب ملحوظتك هنا..."
                className="border rounded-md w-full h-[150px] mt-3 p-3 resize-none outline-none"
              >
              </textarea>


              

              <div className="border-t mt-6 pt-5">


              

                <div className="flex justify-between items-center gap-4">

                  <p className="text-md">
                    المجموع الفرعي
                  </p>


                  <p className="font-medium whitespace-nowrap">
                    {totalPrice} ج.م
                  </p>

                </div>


               

                {discount > 0 && (

                  <div className="flex justify-between items-center gap-4 mt-4">

                    <p className="text-md">
                      الخصم
                    </p>


                    <p className="text-green-500 whitespace-nowrap">
                      - {discountAmount} ج.م
                    </p>

                  </div>

                )}


              

                <div className="flex justify-between items-center gap-4 mt-5">

                  <p className="text-lg font-bold">
                    المجموع الإجمالي
                  </p>


                  <p className="text-lg font-bold whitespace-nowrap">
                    {finalPrice} ج.م
                  </p>

                </div>

              </div>


             

              <p className="text-gray-400 mt-5 text-sm">
                الشحن والضرائب محسوبة عند الدفع
              </p>


             

              <div className="flex flex-col sm:flex-row gap-3 mt-5">

                <button
                  type="button"
                  onClick={handleUpdate}
                  className="border rounded-md px-4 py-3 text-white bg-[#7FD3DF] w-full sm:w-auto"
                >
                  تحديث السلة
                </button>


                <button
                  type="button"
                  onClick={handlePayment}
                  className="border rounded-md px-6 py-3 text-white bg-[#7FD3DF] w-full sm:w-auto"
                >
                  الدفع
                </button>

              </div>


             

              {updateMessage && (

                <p className="text-green-500 mt-3">
                  ✓ {updateMessage}
                </p>

              )}


            

              {paymentMessage && (

                <p className="text-green-500 mt-3">
                  ✓ {paymentMessage}
                </p>

              )}

            </form>

          </div>

        </section>

      </section>

    </>

  )
}

export default Cartcomp