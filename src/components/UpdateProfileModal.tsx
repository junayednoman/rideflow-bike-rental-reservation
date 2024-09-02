import { Modal } from "antd";
import RForm from "./form/RForm";
import RButtonSmall from "./ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RInput from "./form/RInput";
import React, { Dispatch } from "react";
import { useUpdateMyProfileMutation } from "@/redux/api/auth/authApi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import handleMutation from "@/utils/handleMutation";

const dataValidationSchema = z.object({
  name: z.string().nonempty("Name is required!"),
  phone: z.string().nonempty("Phone number is required!"),
  address: z.string().nonempty("Address is required!"),
});
type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  userInfo: {
    name: string;
    phone: string;
    address: string;
  };
};

const UpdateProfileModal = ({
  isModalOpen,
  setIsModalOpen,
  userInfo,
}: TModalProps) => {
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // handle form submit
  const handleUpdateProfile: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const onSuccess = () => {
      setIsModalOpen(false);
    };
    const onFailure = () => {
      setIsModalOpen(false);
    };
    handleMutation(
      data,
      updateMyProfile,
      "Profile is being updated...",
      onSuccess,
      onFailure
    );
  };

  return (
    <div>
      <Modal
        className="min-w-[600px]"
        footer={null}
        title="Update Profile"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <RForm
            defaultValues={userInfo}
            handleFormSubmit={handleUpdateProfile}
            resolver={zodResolver(dataValidationSchema)}
          >
            <RInput label="Name" name="name" placeholder="enter your name" />
            <RInput
              label="Phone"
              name="phone"
              placeholder="enter your phone number"
            />
            <RInput
              label="Address"
              name="address"
              placeholder="enter your address"
            />
            <RButtonSmall type="submit">Update</RButtonSmall>
          </RForm>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;
