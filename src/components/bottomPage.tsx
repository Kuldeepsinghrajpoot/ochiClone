// import React from 'react';

const BottomPage = () => {
    return (
        <div data-scroll data-scroll-speed="0.2" className="bg-[#CDEA68]   w-full pt-40 gap-10  relative ">
            <div className=" text-center text-[10rem] text-black text-wrap  upparcase  leading-tight">

                {['Ready ', 'to', 'start', 'project ?'].map((item, key) => (
                    <div key={key}>
                        <div className="  leading-[9rem] tracking-tighter uppercase font-bold   ">{item}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center pb-2 w-full h-full pt-24 text-black ">
                <div className="bg-black flex justify-center items-center w-[13rem] gap-4 text-white border-black rounded-full  text-2xl h-[3rem]">
                    <button className="upparcase  border bg-black text-white border-black rounded-full  text-lg h-[3rem] ">Start the project</button>
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
            </div>
            <div className=" items-center text-center text-black text-2xl">OR</div>
            <div className="flex justify-center items-center pb-2 w-full h-full pt-4 text-black ">
                <div className=" border flex justify-center items-center w-[13rem] gap-4 text-black border-black rounded-full  text-2xl h-[3rem]">
                    <button className="upparcase  border-black   text-lg h-[3rem] ">Start the project</button>
                    <div className=" bg-black w-2 h-2 rounded-full"></div>
                </div>
            </div>
            <div className="my-10 py-10">

            </div>
        </div>
    );
}

export default BottomPage;
