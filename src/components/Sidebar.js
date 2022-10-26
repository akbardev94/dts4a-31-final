import React from 'react';
import { Link } from "react-router-dom";
import { BiStation, BiBriefcase, BiBong, BiVideoRecording, BiFirstAid, BiTennisBall, BiDevices, BiCategory } from "react-icons/bi";

function Sidebar(props) {
    const handleSidebar = () => {
        document.querySelector('aside').classList.toggle('-translate-x-full')
    }
    return (
        <>
            <div onClick={handleSidebar} className="fixed shadow-lg shadow-yellow-600 block sm:hidden top-5 right-5 bg-yellow-400 p-1 hover:bg-yellow-500 cursor-pointer text-gray-700 z-50 rounded-md">
                <BiCategory size={20} />
            </div>
            <aside className="fixed left-0 z-40 w-full sm:w-fit transform -translate-x-full sm:translate-x-0 transition duration-500 ease-in-out">
                <div id="Main" className="overflow-auto xl:rounded-r min-h-[100vh] flex justify-start items-start h-full sm:w-64 bg-gray-900 flex-col">

                    <div className="rounded-r bg-gray-900 xl:hidden flex w-full px-6 py-3 items-center ">
                        <div className="flex w-full items-end">
                            <img className="w-12" src={props.logo} alt="react news" />
                            <p className="text-xl leading-6 text-white">react News</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full">
                        <p className="text-sm leading-5  uppercase text-left  text-white flex justify-between items-center w-full py-5 space-x-14">Categories</p>
                        <div id="menu1" className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
                            <Link to="/" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiStation size={20} />
                                <p className="text-base leading-4">General</p>
                            </Link>
                            <Link to="/business" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiBriefcase size={20} />
                                <p className="text-base leading-4">Business</p>
                            </Link>
                            <Link to="/science" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52 cursor-pointer">
                                <BiBong size={20} />
                                <p className="text-base leading-4">Science</p>
                            </Link>
                            <Link to="/entertainment" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiVideoRecording size={20} />
                                <p className="text-base leading-4">Entertainment</p>
                            </Link>
                            <Link to="/health" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiFirstAid size={20} />
                                <p className="text-base leading-4">Health</p>
                            </Link>
                            <Link to="/sports" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">

                                <BiTennisBall size={20} />
                                <p className="text-base leading-4">Sports</p>
                            </Link>
                            <Link to="/technology" className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52 cursor-pointer">
                                <BiDevices size={20} />
                                <p className="text-base leading-4  ">Technology</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar