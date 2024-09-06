import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import RNoData from "@/components/ui/RNoData";
import { useCreateRentalMutation } from "@/redux/api/rentalApi";
import { TRental, TResponse } from "@/types";
import handleMutation from "@/utils/handleMutation";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [createRental] = useCreateRentalMutation();
  const location = useLocation();
  const bookingData = location?.state?.bookingData;
  const bikeData = location?.state?.bikeData;

  if (!bikeData) {
    return <RNoData />;
  }
  const { name, image, pricePerHour, cc, brand } = bikeData;
  // handle book bike
  const onSuccess = (
    res: TResponse<{ paymentInitUrl: string; result: TRental[] }>
  ) => {
    if (res?.data?.paymentInitUrl) {
      window.location.href = res?.data?.paymentInitUrl;
    }
  };
  const handleBooking = () => {
    handleMutation(
      bookingData,
      createRental,
      "Rental is being created...",
      onSuccess
    );
  };
  return (
    <div>
      <DashboardSectionTitle
        align="left"
        heading="Make a Tk 100 payment to confirm your rental."
      />
      <div className="border lg:p-6 p-4 xl:w-[800px] flex md:flex-row flex-col bg-white lg:gap-14 gap-8 items-center">
        <img src={image} className="lg:w-[120px] md:w-[180px]" alt="" />
        <div className="flex lg:flex-row flex-col lg:items-center gap-2 justify-between w-full">
          <h5 className="font-semibold text-lg">{name}</h5>
          <h6 className="font-semibold">৳{pricePerHour}</h6>
          <p>
            <strong>Engine(CC): </strong>
            {cc}
          </p>
          <p>
            <strong>Brand: </strong>
            {brand}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <RButtonSmall onClick={handleBooking}>Pay Now</RButtonSmall>
      </div>
    </div>
  );
};

export default Payment;
