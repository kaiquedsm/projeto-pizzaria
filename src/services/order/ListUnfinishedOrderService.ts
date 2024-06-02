import prismaClient from "../../prisma";

class ListUnfinishedOrderService {
    async execute() {
        const list = await prismaClient.pedido.findMany({
            select: {
                id: true,
                mesa: true,
            }, 
            where: {
                status: false
            }
        })
        
        return list;
    }
}

export {ListUnfinishedOrderService};