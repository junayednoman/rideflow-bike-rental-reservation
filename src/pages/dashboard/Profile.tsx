import RButtonSmallWhite from "@/components/layout/ui/RButtonSmallWhite";
import RNoData from "@/components/layout/ui/RNoData";
import RSpinner from "@/components/layout/ui/RSpinner";
import UpdateProfileModal from "@/components/UpdateProfileModal";
import { useGetMyProfileQuery } from "@/redux/api/auth/authApi";
import { Divider } from "antd";
import moment from "moment";
import { useState } from "react";

const Profile = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { data, isFetching } = useGetMyProfileQuery(undefined);

  if (isFetching) {
    return <RSpinner mgT="150" />;
  }

  if (!data?.success || !data?.data) {
    return <RNoData />;
  }

  const { name, email, phone, address, role, createdAt, updatedAt } = data.data;

  // manage update profile
  const showUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="md:pt-10 pt-5">
      {data?.success ? (
        <>
          <h4 className="md:text-3xl text-xl font-semibold text-center dark:text-gray-300">
            Welcome, <span className="text-accentColor">{name}!</span> It's
            great to see you again!
          </h4>
          <div className="xl:w-[900px] mx-auto mt-12 bg-white dark:bg-darkPrimary dark:text-gray-300">
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="col-span-1 border dark:border-lightBorder text-center profileSidebar text-white">
                <div className="bg-black bg-opacity-20 md:h-[500px] py-8 px-4 flex flex-col justify-center items-center">
                  <div className="flex md:flex-col flex-row md:text-center text-left gap-4 items-center md:mb-10 mb-6">
                    <div>
                      <img
                        className="lg:w-[50%] md:w-[40%] w-[70px] mx-auto rounded-full"
                        src={
                          "https://img.freepik.com/premium-photo/banner-lead-generation_1139417-135284.jpg?uid=R110269680&ga=GA1.1.1274571054.1719930293&semt=ais_hybrid"
                        }
                        alt=""
                      />
                    </div>
                    <div className="md:space-y-3 space-y-1">
                      <h5 className="md:text-lg text-[17px] md:uppercase font-semibold md:mt-4">
                        {name}
                      </h5>
                      <p className="uppercase font-medium md:mb-14 md:mt-3">
                        {role}
                      </p>
                    </div>
                  </div>
                  <RButtonSmallWhite onClick={showUpdateModal}>
                    Edit Profile
                  </RButtonSmallWhite>
                  {/* show update modal */}
                  <UpdateProfileModal
                    userInfo={{ name, phone, address }}
                    isModalOpen={isUpdateModalOpen}
                    setIsModalOpen={setIsUpdateModalOpen}
                  />
                </div>
              </div>
              <div className="col-span-2 border dark:border-lightBorder lg:h-[500px] md:py-8 py-5 lg:px-12 md:px-10 px-6">
                <div>
                  <h4 className="font-semibold text-xl">
                    Personal Information
                  </h4>
                  <Divider className="my-2 dark:bg-lightBorder" />
                  <div className="grid md:grid-cols-2 gap-4 gap-y-8 pt-2">
                    <div>
                      <h5 className="font-semibold text-[17px]">Email</h5>
                      <p>{email}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[17px]">Phone</h5>
                      <p>{phone}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[17px]">Address</h5>
                      <p>{address}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="font-semibold text-xl">Others</h4>
                  <Divider className="my-2 dark:bg-lightBorder" />
                  <div className="grid md:grid-cols-2 gap-4 gap-y-8 pt-2">
                    <div>
                      <h5 className="font-semibold text-[17px]">
                        Registration Date
                      </h5>
                      <p>{moment(createdAt).format("D, MMMM, YYYY")}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[17px]">
                        Last Updated
                      </h5>
                      <div>
                        {createdAt === updatedAt ? (
                          <p className="text-secondaryColor">Not updated yet</p>
                        ) : (
                          <p>{moment(updatedAt).format("D, MMMM, YYYY")}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <RNoData />
      )}
    </div>
  );
};

export default Profile;
