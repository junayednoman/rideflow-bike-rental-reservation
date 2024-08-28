import Banner from "./components/layout/sections/home/Banner";
import FeaturedItems from "./components/layout/sections/home/FeaturedItems";
import HowItWorks from "./components/layout/sections/home/HowItWorks";
import Promo from "./components/layout/sections/home/Promo";
import Testimonial from "./components/layout/sections/home/Testimonial";
import WhyChooseUs from "./components/layout/sections/home/WhyChooseUs";
const App = () => {
  return (
    <div>
      <Banner />
      <Promo />
      <FeaturedItems />
      <Testimonial />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
};

export default App;
