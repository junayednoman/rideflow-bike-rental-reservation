import RSectionTitle from "@/components/ui/RSectionTitle";
import RContainer from "../../RContainer";
import { productItems } from "@/constant";
import ProductCard from "@/components/ui/ProductCard";

const FeaturedItems = () => {
  return (
    <div className="lg:py-24 md:py-20 py-16">
      <RContainer>
        <div>
          <RSectionTitle
            subHeading="checkout the bests"
            heading="Featured items"
          />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
            {productItems.map((item, idx) => (
              <div key={idx}>
                <ProductCard details={item} />
              </div>
            ))}
          </div>
        </div>
      </RContainer>
    </div>
  );
};

export default FeaturedItems;
