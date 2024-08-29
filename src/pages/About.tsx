import Banner from "@/components/layout/sections/about/Banner";
import ContactInfo from "@/components/layout/sections/about/ContactInfo";
import Journey from "@/components/layout/sections/about/Journey";
import Mission from "@/components/layout/sections/about/Mission";
import Team from "@/components/layout/sections/about/Team";

const About = () => {
  return (
    <div>
      <Banner />
      <Mission />
      <Team />
      <Journey />
      <ContactInfo />
    </div>
  );
};

export default About;
