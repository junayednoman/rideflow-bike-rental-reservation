import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { useGetRentalsQuery } from "@/redux/api/rentalApi";
import { TBike, TRental } from "@/types";
import { Table, Tabs, TabsProps } from "antd";

export type TTableProps = {
  startTime: string;
  returnTime: string;
  totalCost: number;
  _id: string;
  bikeId: TBike;
};

const MyRentals = () => {
  const { data, isFetching } = useGetRentalsQuery([
    { name: "myRentals", value: true },
  ]);

  const paidData = data?.data?.result?.filter(
    (item: TRental) => item.isPaid === true
  );
  const unPaidData = data?.data?.result?.filter(
    (item: TRental) => item.isPaid === false
  );

  const paidRentalItems = paidData?.map(
    ({ startTime, returnTime, totalCost, _id, bikeId }: TTableProps) => ({
      key: _id,
      name: bikeId.name,
      startTime,
      returnTime,
      totalCost,
    })
  );

  const unPaidRentalItems = unPaidData?.map(
    ({ startTime, returnTime, totalCost, _id, bikeId }: TTableProps) => ({
      key: _id,
      name: bikeId.name,
      startTime,
      returnTime,
      totalCost,
    })
  );

  // tab props
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Unpaid",
      children: (
        <UnPaidRentals loading={isFetching} options={unPaidRentalItems} />
      ),
    },
    {
      key: "2",
      label: "Paid",
      children: <PaidRentals loading={isFetching} options={paidRentalItems} />,
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
const PaidRentals = ({
  options,
  loading,
}: {
  options: TTableProps[];
  loading: boolean;
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Return Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
  ];
  return (
    <div>
      <Table loading={loading} dataSource={options} columns={columns} />
    </div>
  );
};

// unpaid rental table
const UnPaidRentals = ({
  options,
  loading,
}: {
  options: TTableProps[];
  loading: boolean;
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Return Time",
      render: ({ returnTime }: { returnTime: string }) => (
        <p>{returnTime === null ? "Not returned yet" : returnTime}</p>
      ),
      key: "returnTime",
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
    {
      title: "Payment",
      render: () => <RButtonSmall>Pay Now</RButtonSmall>,
      key: "address",
    },
  ];
  return (
    <div>
      <Table loading={loading} dataSource={options} columns={columns} />
    </div>
  );
};
