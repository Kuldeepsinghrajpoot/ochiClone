// import React from 'react';

interface Features {
    title: string;
    img: string;
}

const Feature = () => {

    const feature: Features[] = [{
        title: "FYDE",
        img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"

    }, {

        title: 'VISE',
        img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    }, {
        title: 'TRAWA',
        img: 'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg',

    }, {
        title: 'PREMIUM BLEND',
        img: 'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'
    }


    ];

    return (
        <div className="py-20  w-full bg-gray-100 text-black">
            <div className="text-black text-[4vw] px-20">Featured projects</div>
            <div className=" py-5 border-b border-b-gray-400"></div>
            <div className="grid grid-cols-2 items-center justify-center px-20  rounded-md py-20  h-full w-full ">

                {feature.map((item, index) => (
                    // const{}=item;
                    <div className=" gap-20 relative py-10" key={index}>
                        <div className="flex justify-start items-center gap-5">
                            <div className="bg-black w-3 h-3 rounded-full"></div>
                            <div className="">{item.title}</div>
                        </div>
                        <div className="py-5">
                            <img className="rounded-md" src={item.img} alt="" />

                        </div>
                        <div>
                            {index === 0 && (
                                <div className="flex justify-left gap-5 py-2">
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">Audit</button>
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">copywrite </button>
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">sales deck</button>
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">slides design</button>

                                </div>
                            )}
                            {index === 1 && (
                                <div className="flex justify-left gap-5 py-2">
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">Agency</button>
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">company presentation </button>
                                </div>
                            )}
                            {index === 2 && (
                                <div className="flex justify-left gap-5 py-2">
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">brand identity</button>
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">design research </button>
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">investor desk</button>


                                </div>
                            )}
                            {index === 3 && (
                                <div className="flex justify-left gap-5 py-2">
                                    <button className=" uppercase  border border-zinc-800 rounded-full py-1 px-3">brand template</button>

                                </div>
                            )}
                        </div>
                    </div>
                ))}


            </div>
            <div className="flex justify-center items-center  w-full h-10 text-white">
                <div className="flex h-[3rem] w-[15rem] rounded-full gap-5 px-5 py-5 bg-black justify-center items-center">
                    <button className="upparcase rounded-full  text-lg"> view all case studies</button>
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
