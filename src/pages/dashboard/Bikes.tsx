import DashboardSectionTitle from "@/components/ui/DashboardSectionTitle";
import { useGetAllBikesQuery } from "@/redux/api/bikeApi";
import { TBike, TQueryParams } from "@/types";
import { Table, TableProps, Tooltip } from "antd";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Bikes = () => {
  // set query params
  const [params, setParams] = useState<TQueryParams[] | []>([]);
  const { data, isFetching } = useGetAllBikesQuery(params);
  const bikeData = data?.data?.result;

  const tableData = bikeData?.map(
    ({ name, _id, cc, image, pricePerHour, isAvailable, brand }: TBike) => ({
      name,
      pricePerHour,
      key: _id,
      cc,
      image,
      isAvailable,
      brand,
    })
  );

  const brandFilterItems = bikeData?.map((item: TBike) => ({
    text: item.brand,
    value: item.brand,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      render: ({ image }: { image: string }) => (
        <img className="w-[80px]" src={image} alt="" />
      ),
      key: "age",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      filters: brandFilterItems,
      filterSearch: true,
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
      title: "Price",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },
    {
      title: "Engine(CC)",
      dataIndex: "cc",
      key: "cc",
    },
    {
      title: "Actions",
      render: ({ key }: { key: string }) => (
        <Tooltip title="View Details">
          <Link to={`/dashboard/user/bikes/${key}`}>
            <Eye className="cursor-pointer" />
          </Link>
        </Tooltip>
      ),
      key: "address",
    },
  ];

  // handle filtering
  const onChange: TableProps<TBike>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      console.log(filters);
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

      setParams(queryParams);
    }
  };

  return (
    <div>
      <DashboardSectionTitle heading="All Bikes" align="left" />
      <Table
        onChange={onChange}
        dataSource={tableData}
        loading={isFetching}
        columns={columns}
      />
    </div>
  );
};

export default Bikes;
