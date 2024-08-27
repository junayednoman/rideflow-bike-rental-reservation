import Banner from "./components/layout/sections/home/Banner";
import FeaturedItems from "./components/layout/sections/home/FeaturedItems";
import Promo from "./components/layout/sections/home/Promo";
import Testimonial from "./components/layout/sections/home/Testimonial";
const App = () => {
  return (
    <div>
      <Banner />
      <Promo />
      <FeaturedItems />
      <Testimonial />
    </div>
  );
};

export default App;
