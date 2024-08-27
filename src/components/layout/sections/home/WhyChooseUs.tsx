import { BikeIcon, CircleDollarSign, HeartHandshake } from "lucide-react";
import RContainer from "../../RContainer";
import RSectionTitle from "@/components/ui/RSectionTitle";

const WhyChooseUs = () => {
  return (
    <div className="md:py-24 py-16">
      <RContainer>
        <RSectionTitle
          heading="Why Choose Us"
          subHeading="Discover the Benefits"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="p-6 px-7 border hover:border-primaryColor duration-300 chooseUsItem hover:bg-primaryColor hover:text-white cursor-pointer border-primaryColor">
            <CircleDollarSign
              size={70}
              className="p-4 bg-primaryColor rounded-full text-white mb-5 duration-300 chooseUsIcon"
            />
            <h5 className="text-lg font-semibold">Unbeatable Bike Prices</h5>
            <p className="mt-2 text-sm">
              We offer the best rental rates in the market, ensuring that you
              get exceptional value for your money without compromising on
              quality.
            </p>
          </div>
          <div className="p-6 px-7 border hover:border-primaryColor duration-300 chooseUsItem hover:bg-primaryColor hover:text-white cursor-pointer border-primaryColor">
            <BikeIcon
              size={70}
              className="p-4 bg-primaryColor rounded-full text-white mb-5 duration-300 chooseUsIcon"
            />
            <h5 className="text-lg font-semibold">Wide Selection of Bikes</h5>
            <p className="mt-2 text-sm">
              Choose from a diverse range of bikes to suit your needs, whether
              you're looking for a city cruiser, mountain bike, or electric
              bike.
            </p>
          </div>
          <div className="p-6 px-7 border hover:border-primaryColor duration-300 chooseUsItem hover:bg-primaryColor hover:text-white cursor-pointer border-primaryColor lg:col-span-1 md:col-span-2">
            <HeartHandshake
              size={70}
              className="p-4 bg-primaryColor rounded-full text-white mb-5 duration-300 chooseUsIcon"
            />
            <h5 className="text-lg font-semibold">
              Exceptional Customer Service
            </h5>
            <p className="mt-2 text-sm">
              Our dedicated support team is here to assist you every step of the
              way, ensuring a smooth and hassle-free rental experience.
            </p>
          </div>
        </div>
      </RContainer>
    </div>
  );
};

export default WhyChooseUs;
