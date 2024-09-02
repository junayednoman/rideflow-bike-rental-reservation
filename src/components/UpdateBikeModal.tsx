import { Modal, Row } from "antd";
import RForm from "./form/RForm";
import RButtonSmall from "./ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RInput from "./form/RInput";
import React, { Dispatch } from "react";
import RTextArea from "./form/RTextArea";

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const UpdateBikeModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // handle book a bike
  const handleBook: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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
            //   resolver={zodResolver(schema)}
            handleFormSubmit={handleBook}
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
                name="price"
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
                name="engine"
                label="Engine"
                placeholder="Enter bike engine"
              />
            </Row>
            <RTextArea
              rows={3}
              name="description"
              label="Description"
              placeholder="Enter bike description"
            />

            <RButtonSmall type="submit">Update</RButtonSmall>
          </RForm>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBikeModal;
