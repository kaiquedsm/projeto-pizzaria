import { Request, Response } from 'express'
import { RemoveItemService } from '../../services/order/RemoveItemService'

class RemoveItemController {

    async handle(req: Request, res: Response) {
        
        const { id_item, id_pedido } = req.body

        const removeItemService = new RemoveItemService()

        const item = await removeItemService.execute({id_item, id_pedido})

        return res.json({item})

    }

}

export {RemoveItemController}