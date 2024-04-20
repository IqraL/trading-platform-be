import express, { Request, Response } from "express";
import { information } from "./assets/list";
import { HistoryRequest } from "./types/index";
import { getCryptoHistory } from "./logic";
import { responseWrapper } from "./Utils/responseWrapper";

const app = express();
const PORT = 3001;

app.use(express.json());

app.post(
  "/history",
  async (req: HistoryRequest, res: Response) =>
    await responseWrapper(req, res, getCryptoHistory)
);

app.get("/crypto-list", (req: Request, res: Response) => {
  const ids = information.map((cryptoDetails: { id: any }) => {
    return cryptoDetails.id;
  });
  res.send(ids);
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
