import Banner from "./components/layout/sections/home/Banner";
import Contact from "./components/layout/sections/home/Contact";
import FeaturedItems from "./components/layout/sections/home/FeaturedItems";
import HowItWorks from "./components/layout/sections/home/HowItWorks";
import Promo from "./components/layout/sections/home/Promo";
import Testimonial from "./components/layout/sections/home/Testimonial";
import WhyChooseUs from "./components/layout/sections/home/WhyChooseUs";
import { useAppSelector } from "./redux/hooks";
import { useGetCurrentMode } from "./redux/features/themeSlice";
const App = () => {
  const mode = useAppSelector(useGetCurrentMode);

  return (
    <div className={`${mode || "light"} bg-white dark:bg-primaryColor`}>
      <Banner />
      <Promo />
      <FeaturedItems />
      <Testimonial />
      <WhyChooseUs />
      <HowItWorks />
      <Contact />
    </div>
  );
};

export default App;
