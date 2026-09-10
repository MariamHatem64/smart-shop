import React,{useEffect} from 'react'
import sighnphoto from "../assets/images/Signs/sighnphoto.jpg"
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPinterest
} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {signin} from "../Slices/SignSlice"
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'



const intialvalues={
 
  email:"",
  password:""

}
const validationschema=Yup.object({
  
  email:Yup.string().email().required("you must write your email please"),
  password:Yup.string().min(8,"your password must be more than 7 sympoles").required("please enter your password")
})


const Signin = () => {

  const dispatch=useDispatch()
  const navigate = useNavigate()
const user=useSelector((state)=>state.sign.user)
const error = useSelector((state) => state.sign.error)
 const isLoggedIn = useSelector((state) => state.sign.isLoggedIn)
   useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])
  return (


    
   <section className="flex flex-col lg:flex-row bg-white min-h-screen">

  {/* Image Section */}
  <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-screen relative overflow-hidden">

    <img
      src={sighnphoto}
      alt="Smart Shop"
      className="absolute inset-0 w-full h-full object-contain"
    />

    {/* Login / Signin Buttons */}
    <div
      className="
        absolute
        top-1/2
        -translate-y-1/2
        left-0
        flex
        flex-col
        items-start
        z-10
      "
    >

      <button
        className="
          bg-white
          text-black
          px-6 sm:px-7
          py-3
          rounded-r-full
          shadow-sm
          text-sm
          mb-2
          hover:px-9
          transition-all
          duration-300
        "
      > إنشاء حساب
       
      </button>

      <button
        className="
          bg-[#6ecddd]
          text-white
          px-6 sm:px-7
          py-3
          rounded-r-full
          shadow-sm
          text-sm
          hover:px-9
          transition-all
          duration-300
        "
      >
         تسجيل الدخول
       
      </button>

    </div>

  </div>


  {/* Form Section */}
  <div
    className="
      w-full
      lg:w-1/2
      min-h-[calc(100vh-300px)]
      sm:min-h-[calc(100vh-400px)]
      lg:min-h-screen
      flex
      flex-col
      items-center
      justify-center
      px-5
      sm:px-8
      md:px-10
      py-12
      lg:py-0
    "
  >

    {/* Logo */}
    <h1
      className="
        text-4xl
        md:text-5xl
        font-semibold
        text-black
        mb-16
        lg:mb-24
      "
    >
      Smart Shop
    </h1>


    {/* Form Container */}
    <div className="w-full max-w-[500px]">

      {/* Title */}
      <div className="text-center mb-10">

        <h2 className="text-2xl font-bold text-black mb-2">
           تسجيل دخول
        </h2>

        <p className="text-sm text-gray-400">
           تسجيل الدخول للمتابعه في موقعنا
        </p>

      </div>


      {/* Form */}
      <Formik
        initialValues={intialvalues}
        validationSchema={validationschema}
        onSubmit={(values) => {
          dispatch(signin(values))
          console.log(values)
          
        }}
      >

        {({ isSubmitting }) => (

          <Form>


            {/* Email */}
            <div className="min-h-16 border-b border-gray-200 flex flex-col items-start justify-center">

              <Field
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className="w-full outline-none py-2"
              />

              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />

            </div>


            {/* Password */}
            <div className="min-h-16 border-b border-gray-200 flex flex-col items-start justify-center">

              <Field
                type="password"
                name="password"
                placeholder="كلمة المرور"
                className="w-full outline-none py-2"
              />

              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />

            </div>


            {/* Button */}
            <div className="flex items-center justify-between mt-9">

              <button
                type="submit"
                
                className="
                  bg-[#6ecddd]
                  text-white
                  px-7
                  py-3
                  rounded-md
                  text-sm
                  hover:bg-[#5bc1d2]
                  transition
                  duration-300
                "
              >
                {isSubmitting ? "Submitting..." : " تم تسجيل الدخول"}
              </button>

              <button
                type="button"
                className="text-[#63b9ff] text-sm hover:underline"
              >
                هل نسيت كلمة المرور؟
              </button>

            </div>

          </Form>

        )}

      </Formik>
      {error && (
  <p className="text-red-500 text-sm text-center mt-4">
    {error}
  </p>
)}


      {/* Social Login */}
      <div className="text-center mt-9">

        <h3 className="font-bold text-lg text-black mb-5">
          او سجل الدخول عبر:
        </h3>

        <div className="flex justify-center gap-3">

          <button className="w-14 h-14 rounded-full bg-[#55ace3] text-white flex items-center justify-center hover:scale-105 transition">
            <FaTwitter size={25} />
          </button>

          <button className="w-14 h-14 rounded-full bg-[#287be0] text-white flex items-center justify-center hover:scale-105 transition">
            <FaFacebook size={25} />
          </button>

          <button className="w-14 h-14 rounded-full bg-[#df2633] text-white flex items-center justify-center hover:scale-105 transition">
            <FaPinterest size={25} />
          </button>

          <button className="w-14 h-14 rounded-full bg-[#1475c9] text-white flex items-center justify-center hover:scale-105 transition">
            <FaLinkedin size={25} />
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
  );
};

export default Signin;