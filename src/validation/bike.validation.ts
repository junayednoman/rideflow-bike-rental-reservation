import { z } from "zod";

export const bikeValidationSchema = z.object({
  name: z.string({ required_error: "Name is required!" }),
  image: z.string({ required_error: "Image is required!" }),
  description: z.string({ required_error: "description is required!" }),
  pricePerHour: z.string({ required_error: "price is required!" }),
  cc: z.string({ required_error: "cc is required!" }),
  year: z.string({ required_error: "year is required!" }),
  model: z.string({ required_error: "model is required!" }),
  brand: z.string({ required_error: "brand is required!" }),
});
