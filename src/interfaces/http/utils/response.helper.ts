import { Response } from "express";
import { ResponseDto } from "../../../domain/dto/response.dto";

export function sendResponse<T>(
  res: Response,
  status: number,
  message: string,
  data: T
) {
  const response: ResponseDto<T> = {
    status,
    message,
    data,
  };
  return res.status(status).json(response);
}
