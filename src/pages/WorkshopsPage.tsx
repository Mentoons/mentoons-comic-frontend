import React, { useCallback, useEffect, useRef, useState } from "react";
import WorkshopHero from "@/assets/imgs/workshop_home.png";
import WorkshopHeroSmall from "@/assets/imgs/workshop-home-small.png";
import WorkshopCardSmall from "@/assets/imgs/workshop-card-small2.png";
import WorkshopAlarm from "@/assets/imgs/Workshops_Page_.png";
import workshopStar from "@/assets/imgs/Workshops_Page_ 7.png";
import workshopBlueBg from "@/assets/imgs/workshop-bg1.png";
import workshopArrow from "@/assets/imgs/workshop-arrow.png";
import { workshopDetails } from "@/constant/comicsConstants";
import { useQuery } from "@/pages/AudioComicPage";
import WorkshopForm from "@/components/common/WorkshopForm";
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";

export interface WorkshopItems {
  name: string;
  desc: string;
  img: string;
  video: string;
  pageUrl: string;
}

const ComicWorkshop: React.FC = () => {
  const currType = useQuery();
  const workshop = currType.get("workshop");
  const activeWorkshop =
    workshop == "buddy"
      ? 0
      : workshop == "teen"
      ? 1
      : workshop == "family"
      ? 2
      : workshop == "comic"
      ? 3
      : 4;

  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItems>(
    workshopDetails[activeWorkshop]
  );
  const [showForm, setShowForm] = useState<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const workshopRefLg = useRef<HTMLDivElement>(null);
  const workshopRefSm = useRef<HTMLDivElement>(null);

  const handleCardClick = (item: WorkshopItems) => {
    setSelectedWorkshop(item);
    if (imagesLoaded) {
      if (workshopRefLg.current) {
        workshopRefLg.current.scrollIntoView({ behavior: "smooth" });
      }
      if (workshopRefSm.current) {
        workshopRefSm.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleImageLoad = useCallback(() => {
    setImagesLoaded(true);
  }, []);

  useEffect(() => {
    handleCardClick(workshopDetails[activeWorkshop]);
  }, [workshop, imagesLoaded]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div>
          <img
            className="hidden md:block h-full w-full"
            src={WorkshopHero}
            alt="Workshop background"
            onLoad={handleImageLoad}
          />
          <img
            className="block md:hidden w-full"
            src={WorkshopHeroSmall}
            alt="Workshop background"
            onLoad={handleImageLoad}
          />
        </div>
        <div className="absolute w-[70%] md:w-1/2 text-white md:left-[27%] top-10 pl-6 md:pl-0 text-start md:top-1/2 md:-translate-y-[60%] md:-translate-x-1/2 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Making mentoring accessible, engaging, and impactful for all.
          <div className="relative right-14 md:left-32">
            .<span className="font-extrabold">.</span>.
          </div>
          <div>
            <img
              className="hidden md:block w-14 absolute -bottom-14 left-2/3"
              src={workshopArrow}
              alt="fun icon"
            />
            <img
              className="block md:hidden w-14 absolute top-10 left-[110%]"
              src={workshopArrow}
              alt="fun icon"
            />
          </div>
        </div>
      </div>

      {/* Workshop Listing Section */}
      <div className="relative flex flex-col items-center bg-darkClouds bg-cover bg-no-repeat pt-20 gap-4">
        <div className="absolute -top-14 left-4 md:-top-32 lg:-top-44 md:left-20">
          <img
            className="w-1/3 md:w-[50%] lg:w-2/3"
            src={WorkshopAlarm}
            alt="alarm image"
          />
        </div>
        {/* First row: 3 images */}
        <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-0 w-full gap-12 md:gap-4">
          {workshopDetails.slice(0, 3).map((item, index) => (
            <div
              onClick={() => handleCardClick(item)}
              className="flex justify-center w-full lg:w-1/3"
              key={index}
            >
              <img
                className="w-[70%] md:w-[85%] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))}
        </div>
        {/* Second row: 2 centered images */}
        <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-0 w-full gap-12 md:gap-4">
          {workshopDetails.slice(3).map((item, index) => (
            <div
              onClick={() => handleCardClick(item)}
              className="flex justify-center w-full lg:w-1/3"
              key={index}
            >
              <img
                className="w-[70%] md:w-[80%] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))}
        </div>

        {/* Workshop Section */}
        <div
          ref={workshopRefLg}
          className="hidden lg:flex relative flex-col w-full h-full max-w-7xl pt-10 space-y-10"
        >
          <img
            className="w-full h-full"
            src={workshopBlueBg}
            alt="blue bg"
            onLoad={handleImageLoad}
          />
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] space-y-5">
            <div className="font-base text-4xl md:text-5xl text-white flex items-center justify-center m-auto">
              <img src={workshopStar} alt="star" /> {selectedWorkshop.name}{" "}
              <img src={workshopStar} alt="star" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between px-14 gap-8">
              <div className="w-[60%]">
                <video
                  className="rounded-lg pl-4"
                  src={selectedWorkshop.video}
                  width="800"
                  height="400"
                  controls
                  controlsList="nodownload"
                ></video>
              </div>
              <div className="w-[60%] space-y-4">
                <div className="font-medium leading-tight tracking-wide text-2xl">
                  {selectedWorkshop.desc}
                </div>
                <div className="relative left-16 px-8 py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  <img
                    onClick={() => setShowForm(true)}
                    className="w-1/2"
                    src="/assets/home/talktous.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile card section */}
        <div ref={workshopRefSm} className="relative flex lg:hidden flex-col">
          <img
            className="w-full h-full"
            src={WorkshopCardSmall}
            alt="blue bg"
            onLoad={handleImageLoad}
          />
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] px-8 md:-translate-y-[66%] space-y-5">
            <div className="font-base text-3xl md:text-5xl text-white flex items-center justify-center m-auto">
              <img src={workshopStar} alt="star" /> {selectedWorkshop.name}{" "}
              <img src={workshopStar} alt="star" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4">
              <div className="w-full">
                <video
                  className="rounded-lg"
                  src={selectedWorkshop.video}
                  width="800"
                  height="400"
                  controls
                  controlsList="nodownload"
                ></video>
              </div>
              <div className="w-full space-y-4">
                <div className="font-medium leading-tight tracking-wide text-xl md:text-2xl">
                  {selectedWorkshop.desc}
                </div>
                <div className="relative flex items-center justify-center left-0 px-8 py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  <img
                    onClick={() => setShowForm(true)}
                    className="w-[30%]"
                    src="/assets/home/talktous.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <Dialog open={showForm} onOpenChange={() => setShowForm(false)}>
          <DialogContent className="z-[999999] bg-transparent border-0">
            <DialogHeader>
              <DialogClose asChild>
                <button className="absolute top-16 right-[2rem] lg:right-[2.5rem] text-gray-600 hover:text-gray-800 text-2xl font-bold sm:text-2xl z-[99999] shadow-2xl">
                  &times;
                </button>
              </DialogClose>
            </DialogHeader>
            <DialogDescription>
              <WorkshopForm selectedWorkshop={selectedWorkshop.name} />
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ComicWorkshop;
