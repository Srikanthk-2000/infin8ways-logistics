import React from "react";

const Megamenu = () => {
    return (
        <div className="relative group">
            <li>
                <a
                    href="/"
                    className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white lg:hover:text-gray-400"
                    aria-current="page"
                >
                    Our Services
                </a>
            </li>
            <div className="absolute top-6 left-0 transition transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible duration-500 ease-in-out z-50 min-w-[360px]">
                <div className="relative p-6 bg-gray-900 rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-gray-900 transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                    <div className="relative">
                        <div className="mt-4 grid grid-cols-2 gap-6">
                            <div className="border-r border-white">
                                {/* <h4 className="uppercase tracking-wider font-extrabold text-lg">
                  Fruits & Vegetables
                </h4> */}
                                <ul className="mt-3 text-[15px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            OCEAN
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            AIR
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            ROAD
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            RAIL
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* <h4 className="uppercase tracking-wider font-extrabold text-lg">
                  Eggs & Meat
                </h4> */}
                                <ul className="mt-3 text-[15px]">
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            CUSTOM BROKERAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            COURIER
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            WAREHOUSING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="py-1 text-white hover:text-gray-400 block font-normal"
                                        >
                                            CONSULTING SERVICES
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Megamenu;
