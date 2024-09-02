import { Modal } from "antd";
import RForm from "./form/RForm";
import RButtonSmall from "./ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { Dispatch } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RDatePicker from "./form/RDatePicker";
import RTimePicker from "./form/RTimePicker";

const schema = z.object({
  endDate: z.unknown().refine((value) => value, {
    message: "End Date is required",
  }),
  endTime: z.unknown().refine((value) => value, {
    message: "End Time is required",
  }),
});

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CalculateRentalCostModel = ({
  isModalOpen,
  setIsModalOpen,
}: TModalProps) => {
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // handle calculation
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    const bookingData = {
      endDate: data?.endDate?.format("D, MMMM, YYYY"),
      endTime: data?.endTime?.format("HH:mm"),
    };

    console.log(bookingData);
  };
  return (
    <div>
      <Modal
        footer={null}
        title="Calculate rental cost!"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <RForm
            resolver={zodResolver(schema)}
            handleFormSubmit={handleFormSubmit}
          >
            <RDatePicker
              label="end Date*"
              name="endDate"
              placeholder="Select end date"
            />
            <RTimePicker
              label="end Time*"
              name="endTime"
              placeholder="Select end time"
            />
            <RButtonSmall type="submit">Calculate</RButtonSmall>
          </RForm>
        </div>
      </Modal>
    </div>
  );
};

export default CalculateRentalCostModel;
