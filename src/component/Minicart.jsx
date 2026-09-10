import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  increasequantity,
  decreasequantity,
  removefromcart
} from "../Slices/CartSlice"

const MiniCart = ({ onClose }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handlePayment = () => {
    navigate("/Sala")
    onClose()
  }

  const handleViewCart = () => {
    navigate("/Sala")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">

      

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20"
      >
      </div>


      

      <section className="absolute left-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-xl flex flex-col">

        

        <div className="flex justify-start p-5 border-b">

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>


       

        <div className="flex-1 overflow-y-auto">

          {cartItems.length === 0 ? (

            <div className="flex items-center justify-center h-full">

              <p className="text-gray-500 text-lg">
                السلة فارغة
              </p>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="border-b border-[#dcecf0] p-4"
              >

                <div className="flex items-center gap-3">

                 
 <img
                    src={item.Image}
                    alt={item.name}
                    className="w-[80px] h-[80px] object-cover rounded-md shrink-0"
                  />

               

                  <div className="flex-1 text-right min-w-0">

                    <p className="font-bold text-lg truncate">
                      {item.name}
                    </p>

                    <p className="text-[#6ecddd] mt-1">
                      {item.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      ×{item.quantity}
                    </p>


                   

                    <div className="flex items-center justify-between bg-[#e1f2f6] rounded-md h-[40px] mt-2 px-2">

                      <button
                        onClick={() =>
                           dispatch(
      decreasequantity({
        id: item.id,
        selectedColor: item.selectedColor,
        selectedSize: item.selectedSize
      })
    )
                        }
                        className="px-2"
                      >
                        -
                      </button>

                      <p>
                        {item.quantity}
                      </p>

                      <button
                        onClick={() =>
                          dispatch(
  increasequantity({
    id: item.id,
    selectedColor: item.selectedColor,
    selectedSize: item.selectedSize
  })
)
                        }
                        className="px-2"
                      >
                        +
                      </button>

                    </div>

                  </div>


                

                 




                  <button
                  className="text-xl font-bold"
                    onClick={() =>
  dispatch(
    removefromcart({
      id: item.id,
      selectedColor: item.selectedColor,
      selectedSize: item.selectedSize
    })
  )
}
                  >
                    ×
                  </button>
                </div>

              </div>

            ))

          )}

        </div>


       

        {cartItems.length > 0 && (

          <div className="bg-[#7fd3df] p-5">

            <div className="flex items-center justify-between gap-4">

              <button
                onClick={handlePayment}
                className="bg-white rounded-lg px-8 py-3 font-bold text-lg"
              >
                ادفع
              </button>

              <p className="font-bold text-lg">
                المجموع : {totalPrice} جنيه
              </p>

            </div>


            <button
              onClick={handleViewCart}
              className="w-full bg-white rounded-lg py-3 mt-4 font-medium"
            >
              عرض السلة
            </button>

          </div>

        )}

      </section>

    </div>
  )
}

export default MiniCart