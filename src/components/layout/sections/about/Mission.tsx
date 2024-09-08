import RSectionTitle from "@/components/layout/ui/RSectionTitle";
import RContainer from "../../RContainer";

const Mission = () => {
  return (
    <div className="lg:py-24 md:py-20 py-16">
      <RContainer>
        <RSectionTitle heading="Our Mission" subHeading="Making biking easy" />
        <div className="-mt-5 dark:text-gray-300">
          <p>
            Our platform aims to make biking accessible, convenient, and
            enjoyable for everyone, whether you're an experienced cyclist or
            just starting out. By offering a diverse range of bikes and a
            seamless rental experience, we empower people to explore their
            surroundings, embrace adventure, and incorporate cycling into their
            daily lives. Our goal is to create a reliable and user-friendly
            platform that connects people with the perfect bike for any
            occasion, making every ride a memorable one.
          </p>
          <p className="mt-4">
            We are driven by a commitment to sustainability, quality, and
            community. We believe in protecting the environment by promoting
            eco-friendly transportation options and maintaining a fleet of
            well-cared-for bikes. Our dedication to customer satisfaction
            ensures that every rider receives exceptional service and support.
            Additionally, we value the sense of community that cycling fosters,
            encouraging connections among riders and creating a positive impact
            on the world around us. These values guide us in every decision we
            make, ensuring that our platform remains a trusted and valued
            resource for cyclists.
          </p>
        </div>
      </RContainer>
    </div>
  );
};

export default Mission;
