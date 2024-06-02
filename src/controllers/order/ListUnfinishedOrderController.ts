import { Request, Response } from "express";
import { ListUnfinishedOrderService } from "../../services/order/ListUnfinishedOrderService";

class ListUnfinishedOrderController {

    async handle(req: Request, res: Response) {

        const listUnfinishedOrderService = new ListUnfinishedOrderService()
        const list = await listUnfinishedOrderService.execute()
        
        return list
        
    }
}

export {ListUnfinishedOrderController}