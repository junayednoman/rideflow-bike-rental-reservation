import RForm from "@/components/form/RForm";
import RTimePicker from "@/components/form/RTimePicker";
import RButtonSmall from "@/components/ui/RButtonSmall";
import RNoData from "@/components/ui/RNoData";
import RSpinner from "@/components/ui/RSpinner";
import RStarRating from "@/components/ui/RStarRating";
import { useGetMyProfileQuery } from "@/redux/api/auth/authApi";
import { useGetSingleBikeQuery } from "@/redux/api/bikeApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
  startTime: z.unknown().refine((value) => value, {
    message: "Start Time is required",
  }),
});

const BikeDetail = () => {
  const navigate = useNavigate();
  const { data: profileData } = useGetMyProfileQuery(undefined);

  const { bikeId } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const showBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingModalCancel = () => {
    setIsBookingModalOpen(false);
  };

  const { data, isFetching } = useGetSingleBikeQuery(bikeId);
  if (isFetching) {
    return <RSpinner mgT="120" />;
  }
  const bikeData = data?.data;
  const {
    name,
    image,
    pricePerHour,
    cc,
    brand,
    model,
    year,
    description,
    isAvailable,
    _id,
  } = bikeData;

  // handle book a bike
  const handleBook: SubmitHandler<FieldValues> = (data) => {
    const bookingData = {
      startTime: data?.startTime?.format("HH:mm"),
      userId: profileData?.data?._id,
      bikeId: _id,
    };
    navigate("/dashboard/user/payment", { state: { bookingData, bikeData } });
  };

  return (
    <div>
      {bikeData ? (
        <div className="flex xl:flex-row flex-col gap-14">
          <div>
            <img className="md:w-[500px]" src={image} alt="" />
          </div>
          <div className="md:space-y-6 space-y-4 md:w-[500px]">
            <h3 className="md:text-4xl text-[27px] font-semibold capitalize">
              {name}
            </h3>
            {/* showing rating */}
            <div className="flex items-center gap-2">
              <RStarRating value={4.6} />
              <p className="text-sm text-gray-400">(32 reviews)</p>
            </div>
            {/* product price */}
            <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor">
              ${pricePerHour}
            </h3>
            {/* <div className="md:py-2 flex md:flex-row flex-col md:items-center gap-3">
            <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor">
              ${discount ? calculateDiscount(price, discount) : price}
            </h3>
            {discount > 0 && (
              <div className="md:block hidden">
                <p className="text-sm">{discount}% Off</p>
                <p className="line-through font-semibold text-gray-500">
                  ${price}
                </p>
              </div>
            )}
          </div> */}
            {/* description */}
            <p>
              {/* {description.length > 150 ? description.slice(0, 150) : description} */}
              {description}
            </p>
            {/* other info */}
            <div className="space-y-2">
              <p>
                <strong>Engine: </strong>
                {cc} CC
              </p>
              <p>
                <strong>Model: </strong>
                {model}({year})
              </p>
              <p>
                <strong>Brand: </strong>
                {brand}
              </p>
              <p>
                <strong>Availability: </strong>
                {isAvailable ? "Available" : "Unavailable"}
              </p>
            </div>
            <RButtonSmall
              tooltipTxt={isAvailable ? "" : "This bike is unavailable"}
              onClick={showBookingModal}
              disabled={!isAvailable}
            >
              Book now
            </RButtonSmall>
          </div>
        </div>
      ) : (
        <RNoData />
      )}
      {/* handle book now with modal */}
      <div>
        <Modal
          footer={null}
          title="Start adventure!"
          open={isBookingModalOpen}
          onCancel={handleBookingModalCancel}
        >
          <div>
            <RForm resolver={zodResolver(schema)} handleFormSubmit={handleBook}>
              <RTimePicker
                label="Start Time*"
                name="startTime"
                placeholder=""
              />
              <RButtonSmall type="submit">Submit</RButtonSmall>
            </RForm>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default BikeDetail;
