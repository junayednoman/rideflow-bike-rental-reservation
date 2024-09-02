import { baseApi } from "./baseApi";

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation({
      invalidatesTags: ["bike"],
      query: (data) => ({
        url: "/bikes",
        method: "POST",
        body: data,
      }),
    }),
    getAllBikes: builder.query({
      providesTags: ["bike"],
      query: (args) => {
        // add query params
        const params = new URLSearchParams();
        args?.map((arg: { name: string; value: string }) =>
          params.append(arg.name, arg.value)
        );

        return {
          url: "/bikes",
          method: "GET",
          params,
        };
      },
    }),
    deleteBike: builder.mutation({
      invalidatesTags: ["bike"],
      query: (bikeId) => ({
        url: `/bikes/${bikeId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBikeMutation,
  useGetAllBikesQuery,
  useDeleteBikeMutation,
} = bikeApi;
