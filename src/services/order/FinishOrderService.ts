import prismaClient from "../../prisma";

interface OrderRequest {
    id_pedido: string
}

class FinishOrderService {
    async execute({ id_pedido }: OrderRequest) {
        const list = await prismaClient.pedido.update({
            where: {
                id: id_pedido,
            },
            data: {
                status: true
            }
        })
        
        return list;
    }
}

export {FinishOrderService};