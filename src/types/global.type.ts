import { JwtPayload } from "jwt-decode";

export type TError = {
  data?: {
    message: string;
    stack?: string;
    statusCode: number;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  message?: string;
  statusCode?: number;
  success?: boolean;
  token?: string;
  meta?: TMeta;
};

export type TJwtPayload = {
  role: "user" | "admin";
  email: string;
} & JwtPayload;

export type TQueryParams = {
  name: string;
  value: string;
};