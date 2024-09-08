import Banner from "@/components/layout/sections/about/Banner";
import ContactInfo from "@/components/layout/sections/about/ContactInfo";
import Journey from "@/components/layout/sections/about/Journey";
import Mission from "@/components/layout/sections/about/Mission";
import Team from "@/components/layout/sections/about/Team";
import { useGetCurrentMode } from "@/redux/features/themeSlice";
import { useAppSelector } from "@/redux/hooks";
import { Helmet } from "react-helmet";

const About = () => {
  const mode = useAppSelector(useGetCurrentMode);
  return (
    <div className={`${mode || "light"} bg-white dark:bg-primaryColor`}>
      <Helmet>
        <title>About - Rideflow</title>
      </Helmet>
      <Banner />
      <Mission />
      <Team />
      <Journey />
      <ContactInfo />
    </div>
  );
};

export default About;
