// import React from 'react';

const About = () => {
    return (
        <div data-scroll
        data-scroll-speed="-0.1" className="bg-[#CDEB69]   w-[full] h-[90vw] relative  ">
            <div className="w-full  py-20 text-black">
                <h1 className="text-[3.5vw]  leading-none px-10   h-[12rem]  w-[75rem] tracking-tight"> Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            </div>
            <div className="border-b-[1px] w-full border-b-zinc-400 "></div>

            <div className="h-[22vw] text-black grid grid-cols-2">
                <div className="px-20 py-10">What you can expect:</div>
                <div className="flex justify-between">
                    <div className=" w-[30rem] h-[10.5rem]">
                        <div className=" px-5 py-5 text-[1rem]   h-full">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</div>
                        <div className=" px-5 py-5 text-[1rem]   h-full">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>

                    </div>
                    <div className=" w-[25rem] px-25 px-25 mx-25 my-25  h-[10rem] ">
                        <div className=" my-48 px-40 ">
                            S:
                            {['Instagram', 'Behance', 'Facebook', 'Linkedin'].map((value, key) => (
                                <div key={key} className="border-b  border-b-black"> {value}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* border between two components */}
            <div className="border-b border-b-gray-400"></div>
            <div className=" flex justify-between px-10 py-4">
                <div className="text-black  ">
                    <div className="text-[3rem] pb-5">Our approach:</div>
                    <div className="bg-black gap-5  rounded-full text-white h-[3rem] w-[10rem] items-center flex justify-center text-center">
                        <button className=" uppercase">read more</button> <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                </div>

                <div className=" rounded-md"><img className="rounded-md" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
            </div>

        </div>
    );
}

export default About;
