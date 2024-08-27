import RButton from "@/components/ui/RButton";

const Promo = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-2 items-center">
        {/* Promo Item 1 */}
        <div className="overflow-hidden">
          <div className="bg-cover bg-center text-white promo-1 cursor-pointer">
            <div className="bg-black bg-opacity-25 md:p-20 py-12 lg:px-24 md:px-16 px-8 flex flex-col justify-end promoContent xl:min-h-[600px]">
              <h2 className="sm:text-4xl uppercase text-3xl font-bold">
                Get 20% Off Your First Ride!
              </h2>
              <p className="lg:mb-12 mb-8 mt-3 sm:text-base text-sm">
                Are you new to our bike rental service? We’ve got a special
                offer just for you! Use the code FIRST20 at checkout to enjoy a
                20% discount on your very first rental. Whether you’re planning
                a quick ride around town or a full-day adventure, this offer
                will help you get started without breaking the bank. Don’t miss
                out—start your journey with us today!
              </p>
              <div>
                <RButton>Claim Now</RButton>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Item 2 */}
        <div className="overflow-hidden xl:block hidden">
          <div className="bg-cover bg-center text-white promo-2 cursor-pointer">
            <div className="bg-black bg-opacity-25 p-20 px-24 flex flex-col justify-end promoContent xl:min-h-[600px]">
              <h2 className="text-4xl uppercase font-bold">
                Summer Special: 30% Off All
              </h2>
              <p className="mb-12 mt-3">
                Summer is here, and it’s the perfect time to explore the city on
                two wheels. To celebrate, we’re offering a massive 30% discount
                on all bike rentals. No coupon code is required—just choose your
                bike and the discount will be automatically applied at checkout.
                Whether it’s a scenic ride through the park or a commute to work
              </p>
              <div>
                <RButton>Explore Now</RButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
