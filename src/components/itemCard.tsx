// import React from 'react';

const ItemCard = () => {
    return (
        <div className=" h-[25rem] w-full  bg-gray-100 ">
            <div className=" h-[25rem] w-full flex justify-between  items-center px-20 gap-10">
                <div className="bg-green-900 h-full w-full justify-center items-center  rounded-md">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-24 h-24  flex justify-center items-center  resize-none bg-no-repeat ">
                            {/* img of the icon */}
                            <div className="w-full h-full flex justify-center items-center ">
                                <img className=" justify-center items-center" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                            </div>
                        </div>
                        <div className=" rounded-full absolute border  translate-y-[10rem] -translate-x-[16rem] ">

                            <div className="py-1 px-1 rounded-full">
                                <button className=" py-0 px-2 w-full   rounded-full">&#9400; {new Date().getFullYear()}</button>

                            </div>


                        </div>
                    </div>

                </div>
                <div className=" h-full w-full flex justify-between gap-10">
                    <div className="bg-[#212121] h-full w-full justify-center items-center  rounded-md">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-24 h-24  flex justify-center items-center  resize-none bg-no-repeat ">
                                {/* img of the icon */}
                                <div className="w-full h-full flex justify-center items-center ">
                                    <img className=" justify-center items-center" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

                                </div>
                            </div>
                            <div className=" rounded-full absolute border  translate-y-[10rem] -translate-x-[2rem] ">

                                <div className="py-1 px-1 rounded-full">
                                    <button className=" py-0 px-2 w-full   rounded-full uppercase">Rating 0.5 on clutch</button>

                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="bg-[#212121] h-full w-full justify-center items-center  rounded-md">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-24 h-24  flex justify-center items-center  resize-none bg-no-repeat ">
                                {/* img of the icon */}
                                <div className="w-full h-full flex justify-center items-center ">
                                    <img className=" justify-center items-center" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

                                </div>
                            </div>
                            <div className=" rounded-full absolute border  translate-y-[10rem]  ">

                                <div className="py-1 px-1 rounded-full">
                                    <button className=" py-0 px-2 w-full   rounded-full uppercase">business botcamp allumni</button>

                                </div>


                            </div>
                        </div>

                    </div>
                    {/* <div className="w-full h-full bg-black rounded-md"></div> */}

                </div>
            </div>
            {/* sdf */}
        </div>
    );
}

export default ItemCard;
