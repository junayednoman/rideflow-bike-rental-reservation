import bannerImg from "@/../public/testi.jpg";

const Banner = () => {
  return (
    <div className="relative md:h-[500px] overflow-hidden text-center">
      {/* Video Background */}
      <img
        src={bannerImg}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Overlay (Optional for darkening the video) */}
      <div className="absolute h-full w-full bg-primaryColor bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white md:py-0 pt-32 xl:max-w-[1350px] lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3">
        <h1 className="xl:text-[80px] xl:leading-[120px] md:text-6xl text-[42px] md:leading-[80px] font-bold">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default Banner;
