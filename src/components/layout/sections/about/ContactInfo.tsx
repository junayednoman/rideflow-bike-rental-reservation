import RSectionTitle from "@/components/ui/RSectionTitle";
import RContainer from "../../RContainer";
import { LocateIcon, Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="md:pb-24 pb-16">
      <RContainer>
        <RSectionTitle
          heading="Contact Information"
          subHeading="Reach out to us"
        />
        <div className="xl:w-[1000px] mx-auto">
          <div className="grid lg:grid-cols-3 justify-center gap-12">
            <div>
              <div className="lg:flex lg:text-left text-center gap-5">
                <div className="inline-block bg-primaryColor w-auto text-white lg:mb-0 mb-2 p-5 h-full rounded-full hover:bg-accentColor duration-200 cursor-pointer">
                  <LocateIcon size={30} />
                </div>
                <div>
                  <h6 className="font-semibold uppercase text-lg">
                    Office Address
                  </h6>
                  <p className="mt-2">
                    1234 Bike Lane, Suite 567 Cycling City, CA 91011 USA
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:flex lg:text-left text-center gap-5">
                <div className="inline-block bg-primaryColor w-auto text-white lg:mb-0 mb-2 p-5 h-full rounded-full hover:bg-accentColor duration-200 cursor-pointer">
                  <Phone size={30} />
                </div>
                <div>
                  <h6 className="font-semibold uppercase text-lg">
                    Phone Number
                  </h6>
                  <p className="mt-2">
                    +1 (555) 123-4567 <br />
                    +1 (555) 123-6544
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:flex lg:text-left text-center gap-5">
                <div className="inline-block bg-primaryColor w-auto text-white lg:mb-0 mb-2 p-5 h-full rounded-full hover:bg-accentColor duration-200 cursor-pointer">
                  <Mail size={30} />
                </div>
                <div>
                  <h6 className="font-semibold uppercase text-lg">
                    Email Address
                  </h6>
                  <p className="mt-2">
                    contact@bikerentals.com <br />
                    info@bikerentals.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RContainer>
    </div>
  );
};

export default ContactInfo;
