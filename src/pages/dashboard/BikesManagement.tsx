import CreateBikeModal from "@/components/CreateBikeModal";
import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/ui/RButtonSmall";
import UpdateBikeModal from "@/components/UpdateBikeModal";

import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from "@/redux/api/bikeApi";

import { TBike, TQueryParams } from "@/types";
import handleMutation from "@/utils/handleMutation";
import { Popconfirm, Table, TableProps, Tooltip } from "antd";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";

const BikesManagement = () => {
  // bike id for getting single bike
  const [bikeId, setBikeId] = useState("");

  
  // set query params
  const [params, setParams] = useState<TQueryParams[] | []>([]);

  // load bike data
  const { data, isFetching } = useGetAllBikesQuery(params);
  const bikeData = data?.data?.result;

  // manage create bike modal
  const [isCreateBikeModalOpen, setIsCreateBikeModalOpen] = useState(false);
  const showCreateBikeModal = () => {
    setIsCreateBikeModalOpen(true);
  };

  // manage update bike modal
  const [isUpdateBikeModalOpen, setIsUpdateBikeModalOpen] = useState(false);
  const showUpdateBikeModal = (bikeId: string) => {
    setBikeId(bikeId);
    setIsUpdateBikeModalOpen(true);
  };

  // manage delete bike
  const [deleteBike] = useDeleteBikeMutation();
  const handleDeleteBike = (id: string) => {
    handleMutation(id, deleteBike, "Bike is being deleted...");
  };

  const tableData = bikeData?.map(
    ({ name, isAvailable, brand, pricePerHour, _id, model }: TBike) => ({
      key: _id,
      name,
      brand,
      model,
      isAvailable,
      pricePerHour,
    })
  );

  const brandFilterItems = bikeData?.map((item: TBike) => ({
    text: item.brand,
    value: item.brand,
  }));
  const modelFilterItems = bikeData?.map((item: TBike) => ({
    text: item.model,
    value: item.model,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Availability",
      render: ({ isAvailable }: { isAvailable: boolean }) => (
        <p>{isAvailable ? "Available" : "Unavailable"}</p>
      ),
      key: "isAvailable",
      filters: [
        {
          text: "Available",
          value: true,
        },
        {
          text: "Unavailable",
          value: false,
        },
      ],
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      filters: brandFilterItems,
      filterSearch: true,
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      filters: modelFilterItems,
      filterSearch: true,
    },
    {
      title: "Price(Hourly)",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },
    {
      title: "Actions",
      render: ({ key }: { key: string }) => (
        <div className="flex items-center gap-3">
          <Tooltip title="Update bike">
            <Edit
              onClick={() => showUpdateBikeModal(key)}
              size={20}
              className="cursor-pointer text-accentColor"
            />
          </Tooltip>
          <Popconfirm
            placement="bottom"
            title="Delete the bike"
            description="Are you sure to delete this bike?"
            onConfirm={() => handleDeleteBike(key)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete bike">
              <Trash size={20} className="cursor-pointer text-red-500" />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
      key: "acsdf",
    },
  ];

  const onChange: TableProps<TBike>["onChange"] = (
    fpagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters?.isAvailable?.forEach((item) =>
        queryParams.push({
          name: "isAvailable",
          value: item as string,
        })
      );
      filters?.brand?.forEach((item) =>
        queryParams.push({
          name: "brand",
          value: item as string,
        })
      );
      filters?.model?.forEach((item) =>
        queryParams.push({
          name: "model",
          value: item as string,
        })
      );

      setParams(queryParams);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <DashboardSectionTitle heading="All Bikes" align="left" />
        <div>
          <RButtonSmall onClick={showCreateBikeModal}>Create Bike</RButtonSmall>
        </div>
      </div>
      <Table
        onChange={onChange}
        loading={isFetching}
        dataSource={tableData}
        columns={columns}
      />
      <CreateBikeModal
        isModalOpen={isCreateBikeModalOpen}
        setIsModalOpen={setIsCreateBikeModalOpen}
      />
      <UpdateBikeModal
        bikeId={bikeId}
        isModalOpen={isUpdateBikeModalOpen}
        setIsModalOpen={setIsUpdateBikeModalOpen}
      />
    </div>
  );
};

export default BikesManagement;
