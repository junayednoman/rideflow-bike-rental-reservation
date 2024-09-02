import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { tableData } from "@/constant";
import { Table, Tabs, TabsProps } from "antd";

const MyRentals = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Paid",
      children: <PaidRentals />,
    },
    {
      key: "2",
      label: "Unpaid",
      children: <UnPaidRentals />,
    },
  ];
  return (
    <div>
      <DashboardSectionTitle heading="All you rented" />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default MyRentals;

// paid rental table
const PaidRentals = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Return Time",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Total Cost",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

// unpaid rental table
const UnPaidRentals = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Return Time",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Total Cost",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Payment",
      render: () => <RButtonSmall>Pay Now</RButtonSmall>,
      key: "address",
    },
  ];
  return (
    <div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};
