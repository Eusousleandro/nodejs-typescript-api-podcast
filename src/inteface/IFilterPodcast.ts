import { IPodCast } from "./IPodCast";

export interface IPodCastTransf {
    statusCode: number,
    body: IPodCast[]
}