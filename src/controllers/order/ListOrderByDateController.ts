import { Request, Response } from "express";
import { ListOrderByDateService } from "../../services/order/ListOrderByDateService";


class ListOrderByDateController{
    async handle( req: Request, res: Response){

        const date = req.query.date as string;

        const listOrderByDateService = new ListOrderByDateService();

        const order = await listOrderByDateService.execute({date});

        return res.json(order);
    }
}

export{ListOrderByDateController}