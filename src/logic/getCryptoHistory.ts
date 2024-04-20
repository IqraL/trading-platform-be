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
        } = await axios.get(api);

        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
};
