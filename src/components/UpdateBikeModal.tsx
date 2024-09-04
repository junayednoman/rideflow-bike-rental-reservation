import { Modal, Row } from "antd";
import RForm from "./form/RForm";
import RButtonSmall from "./ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RInput from "./form/RInput";
import React, { Dispatch } from "react";
import RTextArea from "./form/RTextArea";
import {
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
} from "@/redux/api/bikeApi";
import RSpinner from "./ui/RSpinner";
import RNoData from "./ui/RNoData";
import { bikeValidationSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import RSelect from "./form/RSelect";
import { ccOptions } from "@/constant";
import handleMutation from "@/utils/handleMutation";

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  bikeId: string;
};

const UpdateBikeModal = ({
  isModalOpen,
  setIsModalOpen,
  bikeId,
}: TModalProps) => {
  const [updateBike] = useUpdateBikeMutation();
  const { data, isFetching } = useGetSingleBikeQuery(bikeId || undefined, {
    refetchOnMountOrArgChange: true,
  });
  const bikeData = data?.data;
  const defaultValues = {
    brand: bikeData?.brand,
    cc: bikeData?.cc,
    description: bikeData?.description,
    image: bikeData?.image,
    model: bikeData?.model,
    name: bikeData?.name,
    pricePerHour: bikeData?.pricePerHour,
    year: bikeData?.year,
  };

  const handleModalCancel = () => {
    // refetch();
    setIsModalOpen(false);
  };

  // handle update bike
  const handleUpdateBike: SubmitHandler<FieldValues> = (data) => {
    const bikeData = {
      ...data,
      cc: Number(data.cc),
      year: Number(data.year),
      pricePerHour: Number(data.pricePerHour),
    };
    const onSuccess = () => {
      setIsModalOpen(false);
    };
    handleMutation(
      { bikeData, bikeId },
      updateBike,
      "Bike is updating...",
      onSuccess
    );
  };

  return (
    <div>
      <Modal
        className="min-w-[800px] min-h-[400px]"
        footer={null}
        title="Update a Bike"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div className=" min-h-[400px] flex items-center justify-center">
          {isFetching ? (
            <RSpinner />
          ) : bikeData ? (
            <RForm
              resolver={zodResolver(bikeValidationSchema)}
              handleFormSubmit={handleUpdateBike}
              defaultValues={defaultValues}
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

              <RButtonSmall type="submit">Update</RButtonSmall>
            </RForm>
          ) : (
            <RNoData />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBikeModal;
