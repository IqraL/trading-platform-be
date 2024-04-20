import { Request } from "express";
import { CryptoId, Interval } from "./cryptoId_interval";

export type ExpressRequest<T> = Request<{}, {}, T, {}>;
export type HistoryRequest = ExpressRequest<{ id: CryptoId; interval: Interval }>;
