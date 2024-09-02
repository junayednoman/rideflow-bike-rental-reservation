import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import { tableData } from "@/constant";
import { Table, Tooltip } from "antd";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Bikes = () => {
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
        <Tooltip title="View Details">
          <Link to={"/dashboard/user/bikes/bikeId"}>
            <Eye className="cursor-pointer" />
          </Link>
        </Tooltip>
      ),
      key: "address",
    },
  ];
  return (
    <div>
      <DashboardSectionTitle heading="All Bikes" align="left" />
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default Bikes;
