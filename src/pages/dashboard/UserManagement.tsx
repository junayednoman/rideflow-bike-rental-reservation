import DashboardSectionTitle from "@/components/layout/ui/DashboardSectionTitle";
import { tableData } from "@/constant";
import { Popconfirm, PopconfirmProps, Table, Tooltip } from "antd";
import { Trash, UserCog } from "lucide-react";
import { toast } from "sonner";

const UserManagement = () => {
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
      title: "Email",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      render: () => (
        <div className="flex items-center gap-3">
          <Tooltip title="Make Admin">
            <UserCog size={20} className="cursor-pointer text-accentColor" />
          </Tooltip>
          <Popconfirm
            placement="bottom"
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete user">
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
        <DashboardSectionTitle heading="All Users" />
      </div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default UserManagement;
