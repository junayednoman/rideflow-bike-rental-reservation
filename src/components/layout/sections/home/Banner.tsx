import RButton from "@/components/ui/RButton";
import bikeVideo from "@/assets/images/bike-video.mp4";
import bannerImg from "@/assets/images/banner.jpg";
const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden text-center">
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
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="lg:text-[90px] md:text-7xl text-5xl leading-[70px] font-bold">Unlock Your Next Adventure</h1>
        <p className="text-xl mt-8 mb-12">
          Rent a bike in minutes and explore the city with ease. Simple, fast,
          and eco-friendly.
        </p>
        <RButton>Start Riding</RButton>
      </div>
    </div>
  );
};

export default Banner;
