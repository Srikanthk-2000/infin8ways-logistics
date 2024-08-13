import React from 'react'
import Trust from "../assets/trust 2.jpg"
import Commitment from "../assets/commitment 2.jpg"
import Values from "../assets/valuess 2 (2).jpg"
import Welfare from "../assets/welfare 2.jpg"
import Serve from "../assets/serve 2.jpg"
import Services from "../assets/service 2.jpg"
import Ethics from "../assets/ethics 2.jpg"
import Discipline from "../assets/discipline2.jpg"
import circle from "../assets/circle.jpg"
import polite from "../assets/polite img.jpg"
import humbleimage from "../assets/humble pic.jpg"



const AboutUs = () => {
    return (
        <main>

         
<div className="flex justify-center p-4">
  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
    At 8 Ways, We are driven by the following principles
  </h2>
</div>


{/* //image// */}
<div className="container mx-auto flex justify-center">
  <div className="w-full h-54 lg:w-1/2 lg:h-[600px]">
    <img className="h-full w-full object-cover" src={circle} alt="Trustimage" />
  </div>
</div>



<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

<div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
    <img className="h-full w-full object-cover" src={humbleimage} alt="humbleimage" />
</div>

<div
    className="max-w-lg bg-white md:max-w-2xl  md:shadow-lg  md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
    <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Humble</span></h2>
        <p className="mt-4">
        Humble logistics prioritizes listening to stakeholders, fostering collaboration, and embracing continuous improvement. By staying open to feedback, we optimize processes and deliver exceptional service. 
        Our approach cultivates trust and long-lasting partnerships in the logistics industry.
        </p>
        
    </div>
</div>

</div>





            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Trust} alt="Trustimage" />
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Trust</span></h2>
                        <p className="mt-4">
                        Trust forms the foundation of our company. We believe in building trust with our clients, employees, and stakeholders through transparency, reliability, and integrity.
                         We strive to earn and maintain trust by consistently delivering on our promises and acting with honesty and accountability in all our interactions.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>

            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Commitment} alt="Commitmentimage" />
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'> Commitment</span></h2>
                        <p className="mt-4">
                        Commitment is our unwavering dedication to achieving excellence in everything we do. We are committed to meeting the needs of our customers, 
                        fulfilling our obligations to our employees, and contributing positively to the communities we serve. 
                        Our commitment drives us to continuously improve and innovate, ensuring that we remain at the forefront of our industry.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Values} alt="Valuesimage" />
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl  md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Values</span></h2>
                        <p className="mt-4">
                        Our values guide our actions and decisions, shaping the culture of our organization. We are guided by values such as respect, integrity, teamwork, and diversity. 
                        These values define who we are as a company and influence how we conduct business, treat others, and contribute to society.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Welfare} alt="Welfareimage" />
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Welfare</span></h2>
                        <p className="mt-4">
                        We prioritize the welfare and well-being of our stakeholders, recognizing that they are our most valuable asset. We are committed to creating a safe, inclusive, and 
                        supportive work environment where everyone can thrive and reach their full potential. We invest in employee development, 
                        provide competitive benefits, and promote work-life balance to ensure the welfare of our community as a whole.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Serve} alt="Serveimage" />
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-16 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Serve</span></h2>
                        <p className="mt-4">
                        Service is at the heart of everything we do. We are dedicated to serving our customers with excellence, anticipating their needs, and exceeding their expectations. 
                        We approach every interaction with a spirit of helpfulness and a commitment to delivering exceptional value. 
                        Serving our customers is not just a duty but a privilege that we take seriously.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>



            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Services} alt="Servicesimage" />
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Services</span></h2>
                        <p className="mt-4">
                        We take pride in the quality and reliability of the services we offer. Whether it's providing innovative solutions, delivering exceptional products, or offering top-notch customer support,
                         we are committed to excellence in every aspect of our services.
                         We continuously strive to exceed industry standards and deliver unparalleled value to our clients.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                <div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Ethics} alt="Ethics"/>
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Ethics</span></h2>
                        <p className="mt-4">
                        Ethical behavior is non-negotiable for us. We adhere to the highest ethical standards in all our business practices, ensuring fairness, honesty, and 
                        integrity in every decision we make. We conduct ourselves with respect for the law, the environment, and the rights of all individuals. 
                        Upholding ethical principles is not just a responsibility but a fundamental part of who we are as a company.
                        </p>
                        {/* <div className="mt-8">
                            <a href="#"
                                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                                More</a>
                        </div> */}
                    </div>
                </div>

            </div>



            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
<                div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
                    <img className="h-full w-full object-cover" src={Discipline} alt="Disciplineimage"/>
                </div>

                <div
                    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
                    <div className="flex flex-col p-12 md:px-16">
                         <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Discipline</span></h2>
                         <p className="mt-4">
                         Discipline is the key to our success. We maintain disciplined processes, procedures, and behaviors to ensure efficiency, consistency, 
                         and reliability in everything we do. We set high standards for ourselves and hold ourselves accountable for achieving them. Through discipline,
                         we are able to stay focused on our goals, overcome challenges, and drive continuous improvement.
        </p>
        {/* <div className="mt-8">
            <a href="#"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                More</a>
        </div> */}
    </div>
</div>

</div>


<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

<div className="w-full h-64 lg:w-1/2 lg:h-[400px]">
    <img className="h-full w-full object-cover" src={polite} alt="poilteimage" />
</div>

<div
    className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:mt-14 xl:ml-12">
    <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-medium uppercase bg-gray-300 lg:text-4xl ml-0 p-2"><span className='ml-1'>Polite</span></h2>
        <p className="mt-4">
        Polite logistics values courteous communication, respects diverse perspectives, and prioritizes customer satisfaction. Through attentive service and respectful interactions, we build strong relationships and uphold professional standards. 
        Our commitment to politeness enhances the reputation and reliability of our logistics operations
        </p>
        
    </div>
</div>

</div>




        </main>
    )
}

export default AboutUs