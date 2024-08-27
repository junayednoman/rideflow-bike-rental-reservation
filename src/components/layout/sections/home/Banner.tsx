import bikeVideo from "@/assets/images/bike-video.mp4";
import bannerImg from "@/assets/images/banner.jpg";
import { DatePicker, Input } from "antd";
import RButtonWhite from "@/components/ui/RButtonWhite";
import RButtonSmall from "@/components/ui/RButtonSmall";
const { RangePicker } = DatePicker;

const Banner = () => {
  return (
    <div className="relative md:h-screen overflow-hidden text-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 xl:block hidden"
      >
        <source src={bikeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={bannerImg}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 xl:hidden block"
      />

      {/* Overlay (Optional for darkening the video) */}
      <div className="absolute h-full w-full bg-primaryColor bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white md:py-0 pt-32">
        <h1 className="lg:text-[90px] md:text-7xl text-[42px] leading-[60px] font-bold">
          Unlock Your Next Adventure
        </h1>
        <p className="md:text-xl md:mt-8 md:mb-12 my-6">
          Rent a bike in minutes and explore the city with ease. Simple, fast,
          and eco-friendly.
        </p>
        <RButtonWhite>Start Riding</RButtonWhite>
        <div className="bg-white z-[9999] p-10 lg:w-[1000px] md:absolute bottom-0 md:mt-0 mt-14">
          <div className="grid md:grid-cols-4 grid-cols-1 items-center md:gap-4 gap-y-4">
            <div className="grid md:grid-cols-2 items-center justify-center gap-4 col-span-3">
              <Input
                className="rounded-none"
                size="large"
                placeholder="enter bike name"
              />
              {/* <div></div> */}
              <RangePicker className="rounded-none" size="large" />
            </div>
            <div className=" w-full">
              <RButtonSmall wFull={true}>Submit</RButtonSmall>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
