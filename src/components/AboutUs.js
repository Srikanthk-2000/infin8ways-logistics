import React from 'react';
import Trust from '../assets/trust 2.jpg';
import Commitment from '../assets/commitment 2.jpg';
import Values from '../assets/valuess 2 (2).jpg';
import Welfare from '../assets/welfare 2.jpg';
import Serve from '../assets/co.jpg';
import Services from '../assets/service 2.jpg';
import Ethics from '../assets/ethics 2.jpg';
import Discipline from '../assets/discipline2.jpg';
import circle from '../assets/circle.jpg';
import polite from '../assets/polite img.jpg';
import humbleimage from '../assets/humble pic.jpg';

const AboutUs = () => {
    return (
        <main>

            <div className="flex justify-center p-4">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    At 8 Ways, We are driven by the following principles
                </h2>
            </div>

            {/* Circle Image */}
            <div className="container mx-auto flex justify-center">
                <div className="w-full h-54 lg:w-1/2 lg:h-[600px]">
                    <img className="h-full w-full object-cover" src={circle} alt="Trustimage" />
                </div>
            </div>

            {/* Humble Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={humbleimage} alt="humbleimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Humble</span></h2>
                    <p className="mt-4">
                        Humble logistics prioritizes listening to stakeholders, fostering collaboration, and embracing continuous improvement. By staying open to feedback, we optimize processes and deliver exceptional service.
                        Our approach cultivates trust and long-lasting partnerships in the logistics industry.
                    </p>
                </div>
            </div>

            {/* Trust Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Trust} alt="Trustimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Trust</span></h2>
                    <p className="mt-4">
                        Trust forms the foundation of our company. We believe in building trust with our clients, employees, and stakeholders through transparency, reliability, and integrity.
                        We strive to earn and maintain trust by consistently delivering on our promises and acting with honesty and accountability in all our interactions.
                    </p>
                </div>
            </div>

            {/* Commitment Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Commitment} alt="Commitmentimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'> Commitment</span></h2>
                    <p className="mt-4">
                        Commitment is our unwavering dedication to achieving excellence in everything we do. We are committed to meeting the needs of our customers,
                        fulfilling our obligations to our employees, and contributing positively to the communities we serve.
                        Our commitment drives us to continuously improve and innovate, ensuring that we remain at the forefront of our industry.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Values} alt="Valuesimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Values</span></h2>
                    <p className="mt-4">
                        Our values guide our actions and decisions, shaping the culture of our organization. We are guided by values such as respect, integrity, teamwork, and diversity.
                        These values define who we are as a company and influence how we conduct business, treat others, and contribute to society.
                    </p>
                </div>
            </div>

            {/* Welfare Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Welfare} alt="Welfareimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Welfare</span></h2>
                    <p className="mt-4">
                        We prioritize the welfare and well-being of our stakeholders, recognizing that they are our most valuable asset. We are committed to creating a safe, inclusive, and
                        supportive work environment where everyone can thrive and reach their full potential. We invest in stakeholders development,
                        provide competitive benefits, and promote work-life balance to ensure the welfare of our community as a whole.
                    </p>
                </div>
            </div>

            {/* Serve Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Serve} alt="Serveimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Serve</span></h2>
                    <p className="mt-4">
                        Service is at the heart of everything we do. We are dedicated to serving our customers with excellence, anticipating their needs, and exceeding their expectations.
                        We approach every interaction with a spirit of helpfulness and a commitment to delivering exceptional value.
                        Serving our customers is not just a duty but a privilege that we take seriously.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Services} alt="Servicesimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Services</span></h2>
                    <p className="mt-4">
                        We take pride in the quality and reliability of the services we offer. Whether it's providing innovative solutions, delivering exceptional products, or offering top-notch customer support,
                        we are committed to excellence in every aspect of our services.
                        We continuously strive to exceed industry standards and deliver unparalleled value to our clients.
                    </p>
                </div>
            </div>

            {/* Ethics Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Ethics} alt="Ethicsimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Ethics</span></h2>
                    <p className="mt-4">
                        Ethical behavior is the cornerstone of our company. We adhere to the highest standards of honesty, integrity, and fairness in all our dealings.
                        We are committed to conducting business ethically, ensuring compliance with laws and regulations,
                        and fostering a culture of transparency and accountability. Our ethical principles guide our decisions and actions, earning us the trust and respect of our stakeholders.
                    </p>
                </div>
            </div>

            {/* Discipline Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={Discipline} alt="Disciplineimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Discipline</span></h2>
                    <p className="mt-4">
                        Discipline is the key to our success. We believe in maintaining a disciplined approach to our work, upholding high standards, and consistently delivering results.
                        Our disciplined practices enable us to stay focused, meet deadlines, and achieve our goals. We instill discipline in every aspect of our operations,
                        ensuring that we operate efficiently and effectively while maintaining the highest level of quality.
                    </p>
                </div>
            </div>

            {/* Polite Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mx-auto lg:max-w-5xl xl:max-w-6xl mt-12">
                <div className="w-full lg:w-1/2">
                    <img className="h-full w-full object-cover" src={polite} alt="politeimage" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-12 shadow-lg">
                    <h2 className="text-2xl font-medium uppercase bg-gray-300 p-2 lg:text-4xl"><span className='ml-1'>Polite</span></h2>
                    <p className="mt-4">
                        Politeness is a fundamental value that guides our interactions with others. We believe in treating everyone with respect, kindness, and courtesy.
                        We foster a positive and inclusive work environment where individuals feel valued and appreciated.
                        Our polite demeanor extends beyond our organization to our customers, partners, and the community, creating a culture of mutual respect and collaboration.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default AboutUs;
