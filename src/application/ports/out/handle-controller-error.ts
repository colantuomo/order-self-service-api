import { Response } from "express";
import { Exception } from "../../../domain/base/Exception";

export async function handleExpressControllerError<T>(promise: Promise<T>, response: Response) {
  try {
    const item = await promise;
    return response.status(200).json(item);
  } catch (e) {
    if (e instanceof Exception) {
      const { statusCode, error } = e;
      return response.status(statusCode).json(error);
    }
    return response.status(500).json(e);
  }
}