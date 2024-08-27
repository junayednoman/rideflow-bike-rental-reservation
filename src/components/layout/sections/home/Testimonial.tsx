import { Carousel } from "antd";
import RContainer from "../../RContainer";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    text: "Renting a bike from this platform was a seamless experience! The bikes are well-maintained, and the rental process is straightforward. I used the service for a weekend getaway, and it exceeded my expectations. The customer support was also very responsive, helping me with all my queries. I highly recommend this service to anyone looking for a convenient and affordable bike rental solution.",
    name: "Jesmin Alic",
    designation: "Entrepreneur",
  },
  {
    text: "I had a fantastic experience with this bike rental service. The booking process was incredibly easy, and the selection of bikes was impressive. I rented a mountain bike for a day trip, and it performed exceptionally well. The rates are also very competitive. If you're looking for a hassle-free bike rental experience, this is the place to go!",
    name: "Jane Smith",
    designation: "Marketing Manager",
  },
  {
    text: "This bike rental platform offers the best value for money. I rented a bike for a city tour, and it was in excellent condition. The rental process was quick, and returning the bike was just as easy. The staff was friendly and accommodating, ensuring I had everything I needed for a smooth ride. I'll definitely be using this service again in the future.",
    name: "Alex Johnson",
    designation: "Graphic Designer",
  },
  {
    text: "I'm thoroughly impressed with the quality of service provided by this bike rental platform. The bikes are top-notch, and the entire rental process is user-friendly. I rented a bike for a week-long trip, and it performed flawlessly. The team also provided helpful tips on the best routes to take. Highly recommended for anyone looking to explore the city on two wheels!",
    name: "Emily Davis",
    designation: "Content Writer",
  },
  {
    text: "From the moment I booked the bike until I returned it, the experience was seamless. The bike was in perfect condition, and the customer service was excellent. They answered all my questions promptly and made sure I had a great experience. The pricing is also very reasonable, especially considering the quality of the bikes. I will definitely recommend this service to my friends.",
    name: "Michael Brown",
    designation: "Project Manager",
  },
];

const Testimonial = () => {
  return (
    <div className=" bg-cover bg-center bg-no-repeat testimonial">
      <div className="lg:py-32 md:py-24 py-16 bg-black bg-opacity-25">
        <RContainer>
          <Carousel
            autoplay
            lazyLoad="progressive"
            draggable
            className="text-center"
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="text-white text-center  max-w-[900px] mx-auto md:pb-12 pb-8"
              >
                <QuoteIcon className="text-center mx-auto" size={50} />
                <p className="italic text-center md:text-lg text-base mt-6">
                  "{item.text}"
                </p>
                <h5 className="md:text-lg font-semibold mt-10 uppercase">
                  {item.name}
                </h5>
                <span className="font-medium text-secondaryColor uppercase md:text-base text-sm">
                  {item.designation}
                </span>
              </div>
            ))}
          </Carousel>
        </RContainer>
      </div>
    </div>
  );
};

export default Testimonial;
