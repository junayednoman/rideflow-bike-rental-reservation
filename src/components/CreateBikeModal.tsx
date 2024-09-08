import { Modal, Row } from "antd";
import RForm from "./form/RForm";
import RButtonSmall from "./layout/ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RInput from "./form/RInput";
import React, { Dispatch } from "react";
import RTextArea from "./form/RTextArea";
import handleMutation from "@/utils/handleMutation";
import { useCreateBikeMutation } from "@/redux/api/bikeApi";
import { bikeValidationSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import RSelect from "./form/RSelect";
import { ccOptions } from "@/constant";

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CreateBikeModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const [createBike] = useCreateBikeMutation();

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // handle create a bike
  const handleCreateBike: SubmitHandler<FieldValues> = (data) => {
    const onSuccess = () => {
      setIsModalOpen(false);
    };
    const bikeData = {
      ...data,
      cc: Number(data.cc),
      year: Number(data.year),
      pricePerHour: Number(data.pricePerHour),
    };
    handleMutation(bikeData, createBike, "Bike is being created...", onSuccess);
  };

  return (
    <div>
      <Modal
        className="min-w-[800px]"
        footer={null}
        title="Create a Bike"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <RForm
            resolver={zodResolver(bikeValidationSchema)}
            handleFormSubmit={handleCreateBike}
          >
            <Row gutter={15}>
              <RInput
                colSpanLg={12}
                name="name"
                label="Name"
                placeholder="Enter bike name"
              />
              <RInput
                colSpanLg={12}
                name="image"
                label="Image URL"
                placeholder="Enter bike image"
              />
              <RInput
                colSpanLg={12}
                name="pricePerHour"
                label="Price(hourly)"
                placeholder="Enter rent price"
              />
              <RInput
                colSpanLg={12}
                name="brand"
                label="Brand"
                placeholder="Enter bike brand"
              />
              <RInput
                colSpanLg={12}
                name="model"
                label="Model"
                placeholder="Enter bike model"
              />
              <RInput
                colSpanLg={12}
                name="year"
                label="Year"
                placeholder="Enter bike year"
              />
              <RSelect
                options={ccOptions}
                name="cc"
                label="Engine(CC)"
                placeholder="Enter bike engine capacity"
              />
            </Row>
            <RTextArea
              rows={3}
              name="description"
              label="Description"
              placeholder="Enter bike description"
            />

            <RButtonSmall type="submit">Submit</RButtonSmall>
          </RForm>
        </div>
      </Modal>
    </div>
  );
};

export default CreateBikeModal;
