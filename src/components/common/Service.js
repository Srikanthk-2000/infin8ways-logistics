import React from 'react'
import cargo from "../../assets/cargo..jpg"
import Flight from "../../assets/Flightcargo.jpg"
import truck from "../../assets/transportation.jpg"
import Rail from "../../assets/rail.jpg"
import CustomsBrokerage from "../../assets/Customs Brokerage.jpg"
import Warehousing from "../../assets/Warehouse.jpg"
import Courier from "../../assets/Courier.jpg"
import ConsultingServices from "../../assets/Consulting Services.jpg"

const Service = () => {
    return (
        <>
            <section className="container mx-auto p-4" id="service">
                <div className='my-6'>
                    <div className="flex items-center justify-center mt-8 md:mt-1">
                        <h1 className="text-[28px] md:text-[52px] text-black font-serif text-center font-bold mb-2 md:mb-3 pr-2">1</h1>
                        <h1 className="text-black text-[20px] md:text-[40px] font-serif text-center font-bold">FOR ALL & ALL FOR ONE</h1>
                    </div>
                    <div className="flex justify-center my-6">
                        <p className="text-gray-900 block text-2xl mb-8 leading-tight text-center">
                            <span className="text-black font-serif  block text-sm md:text-lg lg:text-xl">
                                Empowering Together as a Stakeholders Company - To foster a community where every stakeholder thrives through collaboration, transparency, shared success and to be the epitome of stakeholder-driven excellence, inspiring positive change and sustainable growth in every interaction.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                    {/* //Ocean // */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg ease-in-out transition-transform duration-200 group-hover:scale-110">
                            <img className="w-full" src={cargo} alt="cargoShips" />
                            <div className="px-8 py-4">
                                <div className="font-bold text-xl mb-2">OCEAN</div>
                                <p className="text-gray-700 text-base">
                                    Cornerstone of global trade, facilitates the movement of goods across vast distances with cost-efficiency and reliability.
                                    Leveraging ships and vessels, it accommodates large-volume shipments,
                                    and diverse commodities, contributing significantly to international commerce.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* //Flight// */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={Flight} alt="Sunset" />
                            <div className="px-8 py-4">
                                <div className="font-bold text-xl mb-2">AIR</div>
                                <p className="text-gray-700 text-base">
                                    Air transportation is a vital mode of logistics by speed,reliability.
                                    Utilizing aircraft,it offers rapid delivery of over long distances,high-value cargo enabling businesses to meet demanding customer expectations and maintain competitive advantages</p>
                            </div>
                        </div>
                    </div>

                    {/* //Truck// */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={truck} alt="Truck" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">ROAD</div>
                                <p className="text-gray-700 text-base">
                                    Utilizing trucks and trailers, it efficiently transports goods over road networks,
                                    serving diverse industries and supply chain needs. Despite challenges like fuel costs,
                                    trucking remains indispensable for local and regional distribution,
                                    ensuring timely and efficient movement of goods to end destinations.</p>
                            </div>

                        </div>
                    </div>

                    {/* //RAIL// */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={Rail} alt="Train" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">RAIL</div>
                                <p className="text-gray-700 text-base">
                                    Utilizing trains and railway networks, it accommodates bulk shipments, heavy goods,
                                    and intermodal operations, contributing to sustainable supply chains.rail remains a vital mode for connecting regions
                                    Despite challenges such as infrastructure maintenance and scheduling constraints
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {/* //Customs Brokerage // */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={CustomsBrokerage} alt="ships" />
                            <div className="px-8 py-4">
                                <div className="font-bold text-xl mb-2">CUSTOM BROKERAGE</div>
                                <p className="text-gray-700 text-base">
                                    A customs broker acts as an intermediary between importers and exporters, ensuring that goods move smoothly through customs while complying with all necessary regulations. In this guide, we'll explore the ins and outs of customs brokerage and how it can benefit your business.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* //Courier// */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={Courier} alt="Courier" />
                            <div className="px-8 py-4">
                                <div className="font-bold text-xl mb-2">COURIER</div>
                                <p className="text-gray-700 text-base">
                                    Highlight the speed at which courier services deliver packages, especially compared to traditional postal services. Emphasize same-day or next-day delivery options.
                                    Discuss the reliability of courier services, with advanced tracking systems that allow customers to monitor their shipments in real-time.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* //3 PL-Warehousing, Distribution & Fulfillment// */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={Warehousing} alt="wareHousing" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">WAREHOUSING</div>
                                <p className="text-gray-700 text-base">
                                    Warehousing is a cornerstone of effective supply chain management, providing critical support for storage, inventory management, and order fulfillment. By leveraging efficient warehousing solutions, businesses can enhance their operational efficiency, reduce costs, and improve customer satisfaction.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* //Consulting Services// */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4 group">
                        <div className="max-w-sm rounded overflow-hidden border shadow-lg transition-transform duration-200 group-hover:scale-110 ease-in-out">
                            <img className="w-full" src={ConsultingServices} alt="consultingService" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">CONSULTING SERVICES</div>
                                <p className="text-gray-700 text-base">
                                    Consulting services provide businesses with specialized knowledge, strategic insights, and actionable solutions to overcome challenges and seize opportunities. In this blog, we'll explore the various facets of consulting services and how they can drive your business to new heights.
                                    Consulting services are a powerful tool for businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service