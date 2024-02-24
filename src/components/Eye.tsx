// import { transform } from 'framer-motion';
import { useEffect, useState } from 'react';

function Eye() {
    const [Rotate, setRotate] = useState<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            let mousex: number = e.clientX;
            let mousey: number = e.clientY;
            let deltaX: number = mousex - window.innerWidth / 2;
            let deltaY: number = mousey - window.innerHeight / 2;

            let Rotate: number = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(Rotate + 180);
        };

        window.addEventListener('mousemove', handleMouseMove);

  
    }, []);

    // Eye section
    console.log(Rotate);

    return (
        <div className="h-screen relative w-full overflow-hidden">
            <div data-scroll data-scroll-speed="-0.7" className='relative h-full flex justify-center items-center text-center  bg-cover w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className="flex justify-between gap-20   rounded-full">
                    <div className="bg-white rounded-full  flex justify-center items-center h-[15rem] w-[15rem]">
                        <div className="bg-black  flex justify-center items-center rounded-full h-[10rem] w-[10rem]">
                            <div className='absolute uppercase text-4xl  font-bold'>play</div>
                            <div className={` h-full w-full flex justify-center  items-center`}>
                              
                                <div style={{transform:`translate(-0%,-0%) rotate(${Rotate}deg)`}} className={`lineforcircle  w-1 h-full     `}>
                                    <div className={`bg-white  text-  w-[2rem] h-[2rem] flex justify-center rotate-[${Rotate}deg]  rounded-full`}>
                                        {/* PLAY */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-full  flex justify-center items-center h-[15rem] w-[15rem]">
                        <div className="bg-black  flex justify-center items-center rounded-full h-[10rem] w-[10rem]">
                        <div className='absolute uppercase text-4xl  font-bold'>play</div>
                           
                            <div className={` h-full w-full flex justify-center  items-center`}>
                              
                                <div style={{transform:`translate(-0%,-0%) rotate(${Rotate}deg)`}} className={`lineforcircle  w-1 h-full     `}>
                                    <div className={`bg-white   w-[2rem] h-[2rem] flex justify-center rotate-[${Rotate}deg]  rounded-full`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eye;
