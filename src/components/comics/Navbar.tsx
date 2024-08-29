import LogoMini from "@/assets/imgs/logo mini.png";
import Logo from "@/assets/imgs/logo.png";
// import { date } from "@/constant/websiteConstants";
// import { RootState } from "@/redux/store";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { MiniSidebar } from "./Sidebar";

const Navbar: React.FC = () => {
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const storedMuteState = localStorage.getItem("isMuted");
    return storedMuteState ? JSON.parse(storedMuteState) : false;
  });
  const [audio] = useState(new Audio("/audio.mp3"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    audio.volume = isMuted ? 0 : 1;
  }, [isMuted, audio]);

  const handleMuteToggle = () => {
    if (audio.paused) {
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    } else {
      audio.pause();
    }
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

  return (
    <>
      {/* for desktop & big devices */}
      <div
        className={`sticky top-0 ${showShadow && "shadow-xl"
          } hidden lg:flex items-center justify-between text-black bg-primary  transition-all duration-1000 ease-in-out z-[9999] px-5`}
      >
        <ul className='flex items-center justify-between'>
          {/* <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Comics
        </li>
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Latest
        </li>
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Audio Comics
        </li>
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Workshops
        </li> */}
          <DropdownMenu />
        </ul>
        <Link
          to='/'
          className='absolute hover:bg-red-500 rounded-b-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] pb-4 pt-8 px-10 bg-primary'
        >
          <img className='w-32 cursor-pointer' src={Logo} />
        </Link>
        <div className='w-[40%] pl-4 flex items-center justify-between '>
          <ul className='w-[60%] flex items-center justify-between'>
            <li className='text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm'>
              <Link to='/mentoons-podcast'>Podcast</Link>
            </li>
            <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
              <Link to="/mentoons-comics" className="whitespace-nowrap ">
                Comics
              </Link>
            </li>
            <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
              <Link to="/mentoons-comics/audio-comics" className="whitespace-nowrap ">
                Audio Comics
              </Link>
            </li>
            <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
              <Link to="/mentoons-workshops" className="whitespace-nowrap ">
                Workshops
              </Link>
            </li>
            <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm flex items">
              <button
                onClick={handleMuteToggle}
                className="bg-transparent text-black"
                aria-label="Toggle mute"
              >
                {isMuted ? (
                  <figure className="h-8 w-8 ">
                    <img
                      src="/assets/images/play.png"
                      className="h-full w-full object-contain"
                    />
                  </figure>
                ) : (
                  <figure className="h-8 w-8">
                    <img
                      src="/assets/images/pause.png"
                      className="h-full w-full object-contain"
                    />
                  </figure>
                )}
              </button>
            </li>
          </ul>
          {/*<FaBookmark className="text-lg cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out" />
            </Link>
            <Link to="/mentoons-comics/cart">
              <div className="relative group">
                <IoCart className="text-2xl cursor-pointer text-gray-500 group-hover:text-black transition-all duration-300 ease-in-out" />
                <span className="absolute top-[-0.5rem] left-[-4px] text-white text-sm bg-red-500 rounded-full px-[6px]">
                  {cartItems?.length}
                </span>
              </div>
            </Link>
          </div> */}
          {/* <Sidebar className="hidden md:block" /> */}
          <MiniSidebar className="block md:hidden" />
        </div>
      </div>

      {/* for small devices */}
      <div
        className={`sticky top-0 ${showShadow && "shadow"
          } container flex lg:hidden items-center justify-between text-black bg-primary py-6 transition-all duration-1000 ease-in-out z-50`}
      >
        <div className='w-[65%] lg:w-[60%] flex items-center justify-between gap-4 lg:gap-8'>
          <Link to='/'>
            <h2 className='text-xl font-extrabold cursor-pointer'>
              <img className='w-32 cursor-pointer' src={LogoMini} />
            </h2>
          </Link>
        </div>
        <div className='w-[35%] lg:w-[40%] flex items-center justify-end gap-2 lg:gap-8'>
          <MiniSidebar className='block' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
