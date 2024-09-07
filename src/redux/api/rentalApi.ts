import { baseApi } from "./baseApi";

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      invalidatesTags: ["rental"],
      query: (data) => ({
        url: "/rentals",
        method: "POST",
        body: data,
      }),
    }),

    returnBike: builder.mutation({
      invalidatesTags: ["rental"],
      query: ({ rentalId, rentalEndTime }) => ({
        url: `/rentals/${rentalId}/return`,
        method: "PUT",
        body: { rentalEndTime },
      }),
    }),

    getRentals: builder.query({
      providesTags: ["rental"],
      query: (args) => {
        // add query params
        const params = new URLSearchParams();
        args?.map((arg: { name: string; value: string }) =>
          params.append(arg.name, arg.value)
        );

        return {
          url: "/rentals",
          method: "GET",
          params,
        };
      },
    }),
    getSingleRental: builder.query({
      providesTags: ["rental"],
      query: (id) => {
        return {
          url: `/rentals/${id}`,
          method: "GET",
        };
      },
    }),
    makePayment: builder.mutation({
      invalidatesTags: ["rental"],
      query: ({ id, paymentInfo }) => {
        return {
          url: `/rentals/${id}`,
          method: "POST",
          body: paymentInfo,
        };
      },
    }),
  }),
});

export const {
  useCreateRentalMutation,
  useGetRentalsQuery,
  useGetSingleRentalQuery,
  useReturnBikeMutation,
  useMakePaymentMutation,
} = rentalApi;
