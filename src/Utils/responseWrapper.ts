import { Response } from "express";


export const responseWrapper = async <T, X>(
    req: T,
    res: Response<X>,
    func: (req: T) => Promise<X>
) => {
    try {
        const data = await func(req);
        res.send(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
