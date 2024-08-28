import { Input } from "antd";
import RContainer from "../../RContainer";
import TextArea from "antd/es/input/TextArea";
import RSectionTitle from "@/components/ui/RSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";

const Contact = () => {
  return (
    <div className="xl:py-24 md:py-20 py-16">
      <RContainer>
        <RSectionTitle
          heading="Contact Now"
          subHeading="Get in Touch with Us"
        />
        <div className="lg:w-[700px] mx-auto -mt-3">
          <form>
            <div>
              <label htmlFor="name" className="font-medium capitalize">
                name
              </label>
              <Input
                className="rounded-none mt-1"
                size="large"
                id="name"
                name="name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="font-medium capitalize">
                email
              </label>
              <Input
                className="rounded-none mt-1"
                size="large"
                id="email"
                name="email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="font-medium capitalize">
                message
              </label>
              <TextArea
                className="rounded-none mt-1"
                rows={4}
                size="large"
                id="message"
                name="message"
              />
            </div>
            <div className="mt-5">
              <RButtonSmall>Submit</RButtonSmall>
            </div>
          </form>
        </div>
      </RContainer>
    </div>
  );
};

export default Contact;
