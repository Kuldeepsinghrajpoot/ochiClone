import { motion } from "framer-motion";


const Screen = () => {
    return (
      // here start the green section
        <div data-scroll
        data-scroll-speed="0.1"
         className=" py-10 uppercase bg-green-900 w-full overflow-hidden rounded-tr-3xl  rounded-tl-3xl">
            <div className="text border-t-2 border-b-2 flex justify-left overflow-hidden whitespace-nowrap ">
              <div className="flex justify-between">
              <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:5}} className="text-[12rem] font-semibold px-4">{" "} we are OCHI</motion.h1>
                <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:5}} className="text-[12rem] font-semibold px-4">{" "} we are OCHI</motion.h1>
                
                <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:"linear",duration:5}} className="text-[12rem] font-semibold px-4">{" "} we are OCHI</motion.h1>
              </div>
            </div>
        </div>
    );
}
 
export default Screen;
