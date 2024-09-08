import DashboardSectionTitle from "@/components/layout/ui/DashboardSectionTitle";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "@/redux/api/auth/authApi";
import { TUser } from "@/types";
import handleMutation from "@/utils/handleMutation";
import { Popconfirm, Table, Tooltip } from "antd";
import { Trash, UserCog } from "lucide-react";

const Users = () => {
  // manage delete user
  const [deleteUser] = useDeleteUserMutation();
  const handleDeleteUser = (id: string) => {
    handleMutation(id, deleteUser, "User is being deleted");
  };

  //  make admin
  const [updateUserRole] = useUpdateUserRoleMutation();
  const handleUpdateUserRole = (id: string) => {
    handleMutation(id, updateUserRole, "User is updating...");
  };

  const { data, isFetching } = useGetAllUsersQuery(undefined);
  console.log(data);
  const tableData = data?.data?.map(
    ({ _id, name, email, role, phone }: Partial<TUser>) => ({
      key: _id,
      name,
      email,
      role,
      phone,
    })
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Actions",
      render: ({ key }: { key: string }) => (
        <div className="flex items-center gap-3">
          <Tooltip title="Change user role">
            <UserCog
              onClick={() => handleUpdateUserRole(key)}
              size={20}
              className="cursor-pointer text-accentColor"
            />
          </Tooltip>
          <Popconfirm
            placement="bottom"
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDeleteUser(key)}
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
      <Table dataSource={tableData} loading={isFetching} columns={columns} />
    </div>
  );
};

export default Users;
