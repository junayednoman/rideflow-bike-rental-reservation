import CalculateRentalCostModel from "@/components/CalculateRentalCostModel";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { tableData } from "@/constant";
import { Table } from "antd";
import { useState } from "react";

const Rentals = () => {
  // manage cost calculation
  const [isCalculationModalOpen, setIsCalculationModalOpen] = useState(false);
  const showCalculationModal = () => {
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
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tenant",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      render: () => (
        <div>
          <RButtonSmall onClick={showCalculationModal}>Calculate</RButtonSmall>
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
      <Table dataSource={tableData} columns={columns} />
      <CalculateRentalCostModel
        isModalOpen={isCalculationModalOpen}
        setIsModalOpen={setIsCalculationModalOpen}
      />
    </div>
  );
};

export default Rentals;
