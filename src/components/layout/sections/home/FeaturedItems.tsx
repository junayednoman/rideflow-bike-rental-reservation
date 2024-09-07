import RSectionTitle from "@/components/ui/RSectionTitle";
import RContainer from "../../RContainer";
import ProductCard from "@/components/ui/ProductCard";
import { useGetAllBikesQuery } from "@/redux/api/bikeApi";
import RSpinner from "@/components/ui/RSpinner";
import RNoData from "@/components/ui/RNoData";
import { TBike } from "@/types";

const FeaturedItems = () => {
  const { data, isFetching } = useGetAllBikesQuery(undefined);

  return (
    <div className="lg:py-24 md:py-20 py-16">
      <RContainer>
        <div>
          <RSectionTitle
            subHeading="checkout the bests"
            heading="Featured Bikes"
          />
          {isFetching ? (
            <RSpinner />
          ) : data?.data?.result?.length ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
              {data?.data?.result
                ?.slice(0, 6)
                ?.map((item: TBike, idx: number) => (
                  <div key={idx}>
                    <ProductCard details={item} />
                  </div>
                ))}
            </div>
          ) : (
            <RNoData />
          )}
        </div>
      </RContainer>
    </div>
  );
};

export default FeaturedItems;
