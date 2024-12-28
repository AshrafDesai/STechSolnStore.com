import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-blue-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Surfatech Integrated Solutions offers high-quality powder coatings that are durable, easy to apply, and eco-friendly. Their wide range of finishes and excellent customer service make them a reliable choice for industrial and commercial needs..</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Harinder Singh</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Rajesh Powder Coating</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0IhjJOzg0jzzdbgPwKWKSBYTynTsUtREbA&s" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Surfatech Integrated Solutions' industrial guns are high-quality, durable, and efficient, providing excellent performance for coating applications. A great choice for professionals seeking reliability..</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Adam Khan</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Supreme Creations Pvt Ltd.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInsm0mLFfyrhskwfWF_XeEp-E3wNZZw-GXw&s" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Surfatech Integrated Solutions provides excellent services for converted powder coating plants, offering customized solutions to upgrade and optimize existing plants. Their expertise ensures seamless conversion, improving performance, efficiency, and coating quality</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Datta Babar</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Patel Powder coating Pvt Ltd.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial