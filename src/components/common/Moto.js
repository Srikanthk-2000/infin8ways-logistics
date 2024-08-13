import React from 'react'
import vision from "../../assets/vision 2.jpg"
import mission from "../../assets/ship.jpg"

const Moto = () => {
  return (
    <> 
      <section className="bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-white sm:text-lg ">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white">VISION</h1>
            <p className="mb-4">To be the epitome of stakeholder-driven excellence, inspiring positive change and sustainable growth in every interaction.
            Our vision is to revolutionize global commerce through innovative and sustainable shipping,logistics & supply chain services & solutions that drive economic growth, foster environmental stewardship, and enrich the lives of people worldwide.
            </p>
        </div>
        <div className="grid grid- gap-4 mt-8">
            <img className="" src={vision} alt ="Vision" />
        </div>
       </div>
      </section>

     <section className="bg-gray-900">
       <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> 
         <div className="grid grid- gap-4 mt-8">
            <img className="" src={mission} alt ="Mission" />
        </div>
        <div className="font-light text-white sm:text-lg ">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white">MISSION</h1>
            <p className="mb-4"> To foster a community where every stakeholder thrives through collaboration, transparency, and shared success.
            Develop a comprehensive plan for executing the mission. This involves determining the logistics requirements, selecting transportation modes, scheduling shipments, and allocating resources such as vehicles, personnel, and equipment.
            </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Moto
