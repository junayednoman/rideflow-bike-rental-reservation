export const productItems = [
  {
    name: "Roadster 500",
    brand: "SpeedX",
    image:
      "https://demo-ridez.myshopify.com/cdn/shop/files/product-7-1.jpg?v=1698990050",
    _id: "b1a2c3d4e5f6",
  },
  {
    name: "Mountain King",
    brand: "TrailBlazer",
    image:
      "https://cdn.shopify.com/s/files/1/0568/9543/8917/files/product-5-1_600x.jpg?v=1700994034",
    _id: "g7h8i9j0k1l2",
  },
  {
    name: "Urban Cruiser",
    brand: "CityRide",
    image:
      "https://cdn.shopify.com/s/files/1/0568/9543/8917/files/product-5-2_600x.jpg?v=1700994033",
    _id: "m3n4o5p6q7r8",
  },

  {
    name: "Mountain King",
    brand: "TrailBlazer",
    image:
      "https://cdn.shopify.com/s/files/1/0568/9543/8917/files/product-5-1_600x.jpg?v=1700994034",
    _id: "g7h8i9j0k1l2",
  },
  {
    name: "Urban Cruiser",
    brand: "CityRide",
    image:
      "https://cdn.shopify.com/s/files/1/0568/9543/8917/files/product-5-2_600x.jpg?v=1700994033",
    _id: "m3n4o5p6q7r8",
  },
  {
    name: "EcoRider",
    brand: "GreenWheels",
    image:
      "https://demo-ridez.myshopify.com/cdn/shop/files/product-7-1.jpg?v=1698990050",
    _id: "s9t0u1v2w3x4",
  },
];

export const testimonials = [
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

export const teams = [
  {
    image:
      "https://img.freepik.com/premium-photo/man-suit-with-his-arms-crossed_1109459-2268.jpg?uid=R110269680&ga=GA1.1.1274571054.1719930293&semt=ais_hybrid",
    name: "Alice Johnson",
    designation: "Founder & CEO",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/banner-lead-generation_1096167-133209.jpg?uid=R110269680&ga=GA1.1.1274571054.1719930293&semt=ais_hybrid",
    name: "Michael Smith",
    designation: "Chief Operating Officer",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/banner-lead-generation_1139417-135284.jpg?uid=R110269680&ga=GA1.1.1274571054.1719930293&semt=ais_hybrid",
    name: "Sophia Davis",
    designation: "Marketing Manager",
  },
];

export const tableData = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const ccs = [100, 125, 150, 180, 200, 250, 300, 350, 400, 450, 500, 600, 650];

export const ccOptions = ccs.map((item) => ({
  label: `${item}cc`,
  value: String(item),
}));
