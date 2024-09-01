import RDatePicker from "@/components/form/RDatePicker";
import RForm from "@/components/form/RForm";
import RTimePicker from "@/components/form/RTimePicker";
import RButtonSmall from "@/components/ui/RButtonSmall";
import RStarRating from "@/components/ui/RStarRating";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  startDate: z.unknown().refine((value) => value, {
    message: "Start Date is required",
  }),
  startTime: z.unknown().refine((value) => value, {
    message: "Start Time is required",
  }),
});

const BikeDetail = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const showBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingModalCancel = () => {
    setIsBookingModalOpen(false);
  };

  // handle book a bike
  const handleBook: SubmitHandler<FieldValues> = (data) => {
    const bookingData = {
      startDate: data?.startDate?.format("D, MMMM, YYYY"),
      startTime: data?.startTime?.format("HH:mm"),
    };

    console.log(bookingData);
  };

  return (
    <div>
      <div className="flex xl:flex-row flex-col gap-14">
        <div>
          <img
            className="md:w-[450px]"
            src="https://www.torktatamotors.com/wp-content/uploads/2024/01/photo1704113688.jpeg"
            alt=""
          />
        </div>
        <div className="md:space-y-6 space-y-4 md:w-[500px]">
          <h3 className="md:text-4xl text-[27px] font-semibold capitalize">
            royal enfield bullet 150
          </h3>
          {/* showing rating */}
          <div className="flex items-center gap-2">
            <RStarRating value={4.6} />
            <p className="text-sm text-gray-400">(32 reviews)</p>
          </div>
          {/* product price */}
          <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor">
            $54
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            porro, veritatis temporibus quibusdam dolor voluptate nam excepturi
            reiciendis sint eos. ...
          </p>
          {/* other info */}
          <div className="space-y-2">
            <p>
              <strong>Engine: </strong>
              150 CC
            </p>
            <p>
              <strong>Model: </strong>
              REB150
            </p>
            <p>
              <strong>Availability: </strong>
              Available
            </p>
          </div>
          <RButtonSmall onClick={showBookingModal}>Book now</RButtonSmall>
        </div>
      </div>
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
              <RDatePicker
                label="Start Date*"
                name="startDate"
                placeholder=""
              />
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
