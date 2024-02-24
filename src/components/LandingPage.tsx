// import React from 'react'
import { motion } from "framer-motion"
import { HiArrowLongRight } from "react-icons/hi2"


const LandingPage = () => {
    return (
        <div data-scroll
        data-scroll-speed="-0.4" className="w-full h-screen  text-black ">
            <div className=" textstructure py-40 px-10">
                <div className=" masker ">
                    {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((value, key) => (
                        <div className="flex justify-start ">
                            <div className="left side w-fit flex ">
                                {key == 1 && (<motion.div initial={{ width: 10 }} animate={{ width: '10rem' }} transition={{ ease: [0.32, 0, 0.67, 0], duration: 1 }} className="  rounded-md h-[5rem] px-2  mt-1 pt-1  "><img className=" rounded-md h-[4.5rem] w-full bg-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3JKXVj1gPCQY0o9L8dp27b0ISLuEW02sA0ETbDrOpeO8_5LKMN6H78XUeV1IyHyPedU&usqp=CAU" alt="" /></motion.div>)}
                                <h1 key={key} className=" 0 font-bold uppercase text-8xl leading-[5.5vw]  tracking-tighter ">
                                    {value}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-[0.5px] border-zinc-600"></div>
            <div className="w-full h-20 px-10 ">

                <div className="flex justify-between text-center pt-2  items-center">
                    {['For public and private companies', 'From the first pitch to IPO'].map((value, key) => (
                        <div key={key}>{value}</div>
                    ))}
                    <div className="statbutton flex justify-between ">
                        <div className="flex justify-center items-center px-1 py-1">
                            <button className=" rounded-2xl  uppercase  border px-3 py-1 items-center text-center w-full  h[2rem]  justify-center ">
                                Start  the project
                            </button>
                        </div>

                        <div className="flex justify-center items-center border rounded-full  text-center w-[2.5vw] h-[2.5vw] rotate-[300deg] ">

                            <HiArrowLongRight />

                        </div>
                    </div>
                </div>

            </div>
        </div>
        // <div className="bg-red-800">hi</div>
    )
}

export default LandingPage
