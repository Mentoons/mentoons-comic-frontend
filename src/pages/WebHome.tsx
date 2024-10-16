import ExploreMentoons from "@/components/Home/ExploreMentoons";
import Career from "@/components/shared/CareerPage/Career";
import { useState } from "react";


import CallToAction from "../components/Home/CallToAction";
import HeroSection from "../components/Home/HeroSection";
import InsideMentoons from "../components/Home/InsideMentoons";
import MentoonsBenifit from "../components/Home/MentoonsBenifit";
import Workshops from "../components/Home/Workshops";
import VideoModal from "../components/videoModal";

type videoData = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
};

const WebHome: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [videoType, setVideoType] = useState<string>("");

  const videos: videoData[] = [
    {
      id: "1",
      title: "Olivia",
      thumbnail: "/olivia.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Olivia%2C+28+Years%2C+Psychologist(1).mp4",
    },
    {
      id: "2",
      title: "Raj",
      thumbnail: "/raj.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Raj%2C+42+Years%2C+IT+Manager%2C+Podcast+%26+Convo+Ca.mp4",
    },
    {
      id: "3",
      title: "Rajesh",
      thumbnail: "/rajesh.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Rajesh+K+42+Years+old+(IT+Manager).mp4",
    },
    {
      id: "4",
      title: "Samantha",
      thumbnail: "/samantha.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Samantha%2C+35+Years%2C+Elementary+School+Teacher(1).mp4",
    },
    {
      id: "5",
      title: "Sarah",
      thumbnail: "/sarah.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Sarah%2C+35+Years%2C+Elementary+School+Teacher(1).mp4",
    },
  ];

  const InsideMentoonsVideos: videoData[] = [
    {
      id: "1",
      title: "Career Fraudstar's Trailer",
      thumbnail: "/career.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/FRAUD'S_TRAILER_FINAL.mp4",
    },
    {
      id: "2",
      title: "Stop Swiping video song",
      thumbnail: "/swiping.jpg",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/STOP_SWIPING_LYRICS.mp4",
    },
    {
      id: "3",
      title: "Team Celebration",
      thumbnail: "/life-mentoons.png",
      url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/Team+Celebration+Video_01.mp4",
    },
  ];

  return (
    <>
      <div className='h-full w-full overflow-hidden'>
        <VideoModal
          videos={videoType === "HERO" ? videos : InsideMentoonsVideos}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={videoType}
        />
        <HeroSection />
        <ExploreMentoons />
        <MentoonsBenifit
          setModalOpen={setModalOpen}
          setVideoType={setVideoType}
        />
        <Workshops />
        <InsideMentoons
          setModalOpen={setModalOpen}
          setVideoType={setVideoType}
        />
        <CallToAction />
      </div>
      <section id='join' className=''>
        <Career />
      </section>

      
    </>
  );
};

export default WebHome;
