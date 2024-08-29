import { Timeline } from "antd";
import RContainer from "../../RContainer";
import {
  BrickWall,
  Expand,
  Globe,
  Milestone,
  Sprout,
  Users,
} from "lucide-react";
import RSectionTitle from "@/components/ui/RSectionTitle";

const Journey = () => {
  return (
    <div className="lg:py-24 md:py-20 py-16">
      <RContainer>
        <RSectionTitle
          heading="Our Journey & Milestones"
          subHeading="Explore the key moments"
        />
        <Timeline
          mode={"left"}
          items={[
            {
              dot: (
                <BrickWall
                  size={30}
                  className="p-2 rounded-full bg-primaryColor text-white hover:bg-accentColor cursor-pointer duration-200"
                />
              ),
              children: <div className="md:h-[90px] sm:h-[130px] h-[200px]" />,
              label: (
                <div className="pr-4 -mt-1">
                  <h1 className="font-semibold text-lg">Founding</h1>
                  <p>
                    In January 2015, we started with a small fleet of bikes and
                    a big vision. Our goal was to create a reliable and
                    user-friendly platform that would make bike rentals easy for
                    everyone.
                  </p>
                </div>
              ),
            },
            {
              dot: (
                <Users
                  size={30}
                  className="p-2 rounded-full bg-primaryColor text-white hover:bg-accentColor cursor-pointer duration-200"
                />
              ),
              label: <div className="md:h-[100px] sm:h-[130px] h-[200px]" />,
              children: (
                <div className="pl-2">
                  <h1 className="font-semibold text-lg ">
                    First 100 Customers
                  </h1>
                  <p>
                    Just a few months after launch, in June 2015, we celebrated
                    our first 100 customers. This early success validated our
                    belief that people were ready for a convenient and
                    eco-friendly way to explore their surroundings.
                  </p>
                </div>
              ),
            },
            {
              dot: (
                <Expand
                  size={30}
                  className="p-2 rounded-full bg-primaryColor text-white hover:bg-accentColor cursor-pointer duration-200"
                />
              ),
              label: (
                <div className="pr-4 -mt-1">
                  <h1 className="font-semibold text-lg">
                    Expansion to New Locations
                  </h1>
                  <p>
                    As demand grew, so did our reach. In April 2016, we expanded
                    to 5 new locations, offering more people the opportunity to
                    experience the joy of cycling.
                  </p>
                </div>
              ),
              children: <div className="md:h-[100px] sm:h-[130px] h-[220px]" />,
            },
            {
              dot: (
                <Globe
                  size={30}
                  className="p-2 rounded-full bg-primaryColor text-white hover:bg-accentColor cursor-pointer duration-200"
                />
              ),
              label: <div className="md:h-[100px] sm:h-[130px] h-[200px]" />,
              children: (
                <div className="pl-2">
                  <h1 className="font-semibold text-lg ">
                    Launch of Online Booking System
                  </h1>
                  <p>
                    To further enhance customer convenience, we introduced an
                    online booking system in October 2017. This allowed our
                    customers to reserve their bikes from anywhere, at any time,
                    making the rental process smoother than ever.
                  </p>
                </div>
              ),
            },
            {
              dot: (
                <Sprout
                  size={30}
                  className="p-2 rounded-full bg-primaryColor text-white hover:bg-accentColor cursor-pointer duration-200"
                />
              ),
              label: (
                <div className="pr-4 -mt-1">
                  <h1 className="font-semibold text-lg">
                    Sustainability Initiatives
                  </h1>
                  <p>
                    In March 2018, we launched our sustainability initiatives,
                    focusing on eco-friendly practices like maintaining a fleet
                    of bikes that produce zero emissions and implementing
                    recycling programs for bike parts.
                  </p>
                </div>
              ),
              children: <div className="md:h-[100px] sm:h-[130px] h-[240px]" />,
            },
            {
              dot: (
                <Milestone
                  size={30}
                  className="p-2 rounded-full bg-primaryColor text-white hover:bg-accentColor cursor-pointer duration-200"
                />
              ),
              label: <div className="md:h-[100px] sm:h-[130px] h-[220px]" />,
              children: (
                <div className="pl-2">
                  <h1 className="font-semibold text-lg ">
                    10,000 Rides Milestone{" "}
                  </h1>
                  <p>
                    By July 2019, we had facilitated over 10,000 rides, helping
                    countless individuals discover the benefits of biking. This
                    milestone marked our growing influence in promoting cycling
                    as a sustainable and healthy mode of transportation.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </RContainer>
    </div>
  );
};

export default Journey;
