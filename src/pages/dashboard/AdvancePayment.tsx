import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import RNoData from "@/components/ui/RNoData";
import { useGetMyProfileQuery } from "@/redux/api/auth/authApi";
import { useCreateRentalMutation } from "@/redux/api/rentalApi";
import { TRental, TResponse, TUser } from "@/types";
import handleMutation from "@/utils/handleMutation";
import { useLocation } from "react-router-dom";

const AdvancePayment = () => {
  const [createRental] = useCreateRentalMutation();
  const location = useLocation();
  const rentalData = location?.state?.bookingData;
  const bikeData = location?.state?.bikeData;
  const { data } = useGetMyProfileQuery(undefined);
  const usreData = data?.data as TUser;

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
    const paymentInfo = {
      total_amount: 100,
      currency: "BDT",
      product_name: name,
      product_category: "bike",
      cus_name: usreData?.name,
      cus_email: usreData?.email,
      cus_add1: usreData?.address,
      cus_postcode: usreData?.address,
      cus_country: "Bangladesh",
      cus_phone: usreData?.phone,
    };
    handleMutation(
      { rentalData, paymentInfo },
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

export default AdvancePayment;
