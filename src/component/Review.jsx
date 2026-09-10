import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from "react"

const Reviews = ({ product }) => {

const [activeTab, setActiveTab] = useState("description")

  const initialValues = {
    topic: "",
    comment: "",
    name: "",
    email: "",
  }

  const validationSchema = Yup.object({
    topic: Yup.string().required("من فضلك اكتب عنوان التقييم"),
    comment: Yup.string().required("من فضلك اكتب تقييمك"),
    name: Yup.string()
      .max(25, "الاسم يجب ألا يزيد عن 25 حرف")
      .required("من فضلك اكتب اسمك"),
    email: Yup.string()
      .email("من فضلك اكتب بريد إلكتروني صحيح")
      .required("من فضلك اكتب بريدك الإلكتروني"),
  })

  return (
    <>


<div className="flex gap-8  justify-center mt-[100px]">
  <button
    onClick={() => setActiveTab("description")}
    className={`pb-3 ${
      activeTab === "description"
        ? "text-[#7FD3DF] border-b-2 border-[#7FD3DF]"
        : "text-gray-500"
    }`}
  >
    الوصف
  </button>

  <button
    onClick={() => setActiveTab("details")}
    className={`pb-3 ${
      activeTab === "details"
        ? "text-[#7FD3DF] border-b-2 border-[#7FD3DF]"
        : "text-gray-500"
    }`}
  >
    التفاصيل
  </button>

  <button
    onClick={() => setActiveTab("reviews")}
    className={`pb-3 ${
      activeTab === "reviews"
        ? "text-[#7FD3DF] border-b-2 border-[#7FD3DF]"
        : "text-gray-500"
    }`}
  >
    التقييمات
  </button>
</div>





{activeTab === "description" &&  (
  <div>
    
    <p className=" text-center mt-[100px] text-xl ">  {product.discription}</p>
  </div>
)}

{activeTab === "details" && (
  <div>
    <p className="text-center m-4 text-xl mt-[100px]  ">  {product.discription}</p>
    <p className="text-center m-4 text-xl mt-[50px]  ">  {product.name}</p>
    <p className="text-center m-4 text-xl mt-[50px] ">  {product.price}</p>
    
  </div>
)}

{activeTab === "reviews" && (
  

  <div className="flex flex-col lg:flex-row justify-center gap-10 mt-[100px] px-4 lg:px-10">

       
        
        <section className="w-full lg:w-1/2 mb-10">

          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            تقييمات المنتج
          </h2>

          <div className="flex flex-col gap-8">

            {product.reviews?.map((review) => (

              <div
                key={review.id}
                className="flex items-start gap-4 border-b pb-6"
              >

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div className="flex-1">

                  <div className="flex justify-between items-center gap-3">

                    <p className="font-bold">
                      {review.name}
                    </p>

                    <div className="text-yellow-400">
                      {"★".repeat(review.rating)}

                      <span className="text-gray-300">
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </div>

                  </div>

                  <p className="mt-3 leading-7 text-gray-600">
                    {review.comment}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        
       <section className="w-full lg:w-1/2 mb-10">

          <h2 className="text-2xl font-bold">
            أضف تقييم
          </h2>

          <p className="mt-4">
            تقييمك
          </p>


          <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={(values, { resetForm }) => {
    console.log(values)

    resetForm()
  }}
>
          

            <Form className="my-[60px]">

             
              <div>

                <div className="border rounded-full px-6 border-gray-200">
                  <Field
                    type="text"
                    name="topic"
                    placeholder="عنوان التقييم"
                    className="w-full outline-none py-2"
                  />
                </div>

                <ErrorMessage
                  name="topic"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />

              </div>


             
              <div className="mt-4">

                <div className="border rounded-md px-6 py-6 border-gray-200">

                  <Field
                    as="textarea"
                    name="comment"
                    placeholder="اكتب تقييمك هنا"
                    className="w-full h-[150px] outline-none resize-none"
                  />

                </div>

                <ErrorMessage
                  name="comment"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />

              </div>


             
              <div className="flex flex-col md:flex-row justify-between gap-6 mt-5">

               
                <div className="w-full">

                  <div className="border rounded-full px-6 border-gray-200">

                    <Field
                      type="text"
                      name="name"
                      placeholder="اسمك"
                      className="w-full outline-none py-2"
                    />

                  </div>

                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />

                </div>


              
                <div className="w-full">

                  <div className="border rounded-full px-6 border-gray-200">

                    <Field
                      type="email"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full outline-none py-2"
                    />

                  </div>

                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-xs mt-1"
                  />

                </div>

              </div>


            
              <button
                type="submit"
                className="mt-8 bg-[#7FD3DF] text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300"
              >
                أضف الآن
              </button>

            </Form>

          </Formik>

        </section>

      </div>
)}


      
    </>
  )
}

export default Reviews