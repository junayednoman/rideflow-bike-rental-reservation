import CreateBikeModal from "@/components/CreateBikeModal";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import UpdateBikeModal from "@/components/UpdateBikeModal";
import { tableData } from "@/constant";
import { Popconfirm, PopconfirmProps, Table, Tooltip } from "antd";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const BikesManagement = () => {
  // manage create bike modal
  const [isCreateBikeModalOpen, setIsCreateBikeModalOpen] = useState(false);
  const showCreateBikeModal = () => {
    setIsCreateBikeModalOpen(true);
  };

  // manage update bike modal
  const [isUpdateBikeModalOpen, setIsUpdateBikeModalOpen] = useState(false);
  const showUpdateBikeModal = () => {
    setIsUpdateBikeModalOpen(true);
  };

  // manage delete bike
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    toast.success("Click on Yes");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Brand",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Price",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Engine",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      render: () => (
        <div className="flex items-center gap-3">
          <Tooltip title="Update bike">
              <Edit onClick={showUpdateBikeModal} size={20} className="cursor-pointer text-accentColor" />
          </Tooltip>
          <Popconfirm
            placement="bottom"
            title="Delete the bike"
            description="Are you sure to delete this bike?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete bike">
              <Trash size={20} className="cursor-pointer text-red-500" />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
      key: "address",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <DashboardSectionTitle heading="All Bikes" align="left" />
        <div>
          <RButtonSmall onClick={showCreateBikeModal}>Create Bike</RButtonSmall>
        </div>
      </div>
      <Table dataSource={tableData} columns={columns} />
      <CreateBikeModal
        isModalOpen={isCreateBikeModalOpen}
        setIsModalOpen={setIsCreateBikeModalOpen}
      />
      <UpdateBikeModal
        isModalOpen={isUpdateBikeModalOpen}
        setIsModalOpen={setIsUpdateBikeModalOpen}
      />
    </div>
  );
};

export default BikesManagement;
