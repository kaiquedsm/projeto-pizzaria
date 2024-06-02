import { Request, Response } from "express";
import { FinishAndListService } from "../../Services/order/FinishAndListService";

class FinishAndListController{
    
    async handle(req: Request, res: Response){
        
        const id_pedido = req.body;

        const finishAndListService = new FinishAndListService();

        const order = await finishAndListService.execute(id_pedido);
        
        return res.json(order);
        
    }
    
}
export{FinishAndListController}