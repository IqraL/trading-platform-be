import express, { Request, Response } from "express";
import cors from "cors";
import { HistoryRequest, PriceRequest } from "./types/index";
import { getCryptoHistory, getCryptoIds, getCryptoPrice } from "./logic";
import { responseWrapper } from "./Utils/responseWrapper";

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.get(
  "/ids",
  async (req: Request, res: Response) =>
    await responseWrapper(req, res, getCryptoIds)
);

app.post(
  "/history",
  async (req: HistoryRequest, res: Response) =>
    await responseWrapper(req, res, getCryptoHistory)
);

app.post(
  "/price",
  async (req: PriceRequest, res: Response) =>
    await responseWrapper(req, res, getCryptoPrice)
);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
