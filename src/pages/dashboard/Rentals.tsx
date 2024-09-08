import CalculateRentalCostModel from "@/components/CalculateRentalCostModel";
import DashboardSectionTitle from "@/components/layout/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/layout/ui/RButtonSmall";
import { useGetRentalsQuery } from "@/redux/api/rentalApi";
import { TBike, TUser } from "@/types";
import { Table } from "antd";
import { useState } from "react";

export type TTableProps = {
  startTime: string;
  _id: string;
  bikeId: TBike;
  userId: TUser;
};

const Rentals = () => {
  const [rentalId, setRentalId] = useState("");
  const { data, isFetching } = useGetRentalsQuery([
    { name: "isPaid", value: false },
    { name: "totalCost", value: 0 },
  ]);

  const rentalTableData = data?.data?.result?.map(
    ({ startTime, _id, bikeId, userId }: TTableProps) => ({
      startTime,
      key: _id,
      name: bikeId.name,
      pricePerHour: bikeId.pricePerHour,
      tenantName: userId.name,
    })
  );

  // manage cost calculation
  const [isCalculationModalOpen, setIsCalculationModalOpen] = useState(false);
  const showCalculationModal = (id: string) => {
    setRentalId(id);
    setIsCalculationModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price(hourly)",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },
    {
      title: "Tenant",
      dataIndex: "tenantName",
      key: "tenantName",
    },
    {
      title: "Actions",
      render: ({ key }: { key: string }) => (
        <div>
          <RButtonSmall onClick={() => showCalculationModal(key)}>
            Calculate
          </RButtonSmall>
        </div>
      ),
      key: "address",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <DashboardSectionTitle heading="All Rentals" />
      </div>
      <Table
        dataSource={rentalTableData}
        loading={isFetching}
        columns={columns}
      />
      <CalculateRentalCostModel
        rentalId={rentalId}
        isModalOpen={isCalculationModalOpen}
        setIsModalOpen={setIsCalculationModalOpen}
      />
    </div>
  );
};

export default Rentals;
