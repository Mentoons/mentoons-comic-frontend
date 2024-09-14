import React from "react";
import AirplaneBg from "@/assets/imgs/airplaneBgHome.svg";
import FlyingBook from "@/assets/imgs/bookBgHome.svg";
import ComicsBgShelf from "@/assets/imgs/comics_audioComicsBgHome.svg";
import PortalImgHome from "@/assets/imgs/portalBgHome.svg";
import WorkshopBgHome from "@/assets/imgs/workshopBgHome.svg";
import ComicsBgHome from "@/assets/imgs/comicsBgHome.svg";
import Klement_Toonla_Home from "@/assets/imgs/klement_toonlaBgHome.svg";
import BuddyWorkshopHome from "@/assets/imgs/kidsWorkshopHome.svg";
import TeenWorkshopHome from "@/assets/imgs/teenWorkshopHome.svg";
import ElderWorkshopHome from "@/assets/imgs/elderWorkshopHome.svg";
import ComicWorkshopHome from "@/assets/imgs/comicWorkshopHome.svg";
import CharacterWorkshopHome from "@/assets/imgs/characterWorkshopHome.svg";
import workshopTextHome from "@/assets/imgs/workshopTextHome.svg";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ComicsSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-10">
      <div className="relative h-full w-full">
        <img src={ComicsBgHome} alt="comics background" />
        <div className="absolute top-[40%] flex items-center justify-center">
          <motion.img
            initial={{ x: -400 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.5 }}
            className="w-[80%]"
            src={AirplaneBg}
            alt="airplane image"
          />
        </div>
        <div className="absolute top-[50%]">
          <motion.img
            initial={{ rotateX: 10, y: -200, scale: 0 }}
            whileInView={{ rotateX: 0, y: 300, scale: 6 }}
            transition={{ delay: 0.6, duration: 2, ease: easeInOut }}
            className="w-[10%] z-[100] relative top-8 left-[85%]"
            src={Klement_Toonla_Home}
            alt="klement and toonla"
          />
        </div>
        <div className="absolute top-[30%] left-[10%]">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: [-20, -10, -20] }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute top-[30%] right-[10%]">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: [-20, -10, -20] }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute top-[60%] left-[10%]">
          <motion.img
            initial={{ y: -20, rotate: -25 }}
            animate={{ y: [-20, -10, -20], rotate: -25 }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            className="rotate-[-25deg]"
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute top-[60%] right-[10%]">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: [-20, -10, -20] }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            className="-rotate-[25deg]"
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute -bottom-12">
          <img src={ComicsBgShelf} alt="comics shelf" />
        </div>
        <div className="w-full absolute flex items-center justify-center -bottom-12">
          <img className="w-1/3" src={PortalImgHome} alt="portal" />
        </div>
      </div>
      <div className="relative">
        <img src={WorkshopBgHome} alt="workshop" />
        <div>
          <img
            className="absolute w-[45%] -left-[4%] top-[25%]"
            src={workshopTextHome}
            alt="workshop"
          />
        </div>
        <div className="w-full absolute rotate-180 flex items-center justify-center right-4 top-[14rem] ">
          <img className="w-1/3" src={PortalImgHome} alt="portal" />
        </div>
        <div className="">
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=buddy")}
            className="absolute right-[38%] top-[36%] w-[13%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={BuddyWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=teen")}
            className="absolute right-[10%] top-[40%] w-[15%] hover:scale-105 cursor-pointer rotate-2 transition-all ease-in-out duration-300"
            src={TeenWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=family")}
            className="absolute right-[25%] top-[50%] w-[13%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={ElderWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=comics")}
            className="absolute right-[36%] top-[58%] w-[13%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={ComicWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=character")}
            className="absolute right-[14%] top-[58%] w-[13%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={CharacterWorkshopHome}
            alt="workshop poster"
          />
        </div>
      </div>
    </div>
  );
};

export default ComicsSection;
