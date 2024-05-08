import axios from "axios";
import { HistoryRequest } from "../types";

export const getCryptoHistory = async (req: HistoryRequest) => {
  try {
    const { id, interval } = req.body;

    if (!id || !interval) {
      throw new Error("please provide both an id and interval");
    }
    const api = `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`;
    const {
      data: { data },
    } = await axios.get<{
      data: { date: string; priceUsd: string; time: number }[];
    }>(api);

    const xAxis = data.map((dataPoint) => dataPoint.date);
    const yAxis = data.map((dataPoint) => dataPoint.priceUsd);
    const cryptoId = id;
    return { xAxis, yAxis, cryptoId };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
