import axios from "axios";
import { PriceRequest } from "../types";

export const getCryptoPrice = async (req: PriceRequest) => {
  try {
    const cryptoId = req.body.id;
    const endPoint = `https://api.coincap.io/v2/assets/${cryptoId}`;

    const result = await axios.get<{
      data: { id: string; priceUsd: string };
    }>(endPoint);

    const { id, priceUsd } = result.data.data;
    return { id, priceUsd };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
