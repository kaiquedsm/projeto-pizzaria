import prismaClient from "../../prisma";

interface ItemRequest {
    id_item: string;
    id_pedido: string;
}

class RemoveItemService {

    async execute({ id_item, id_pedido }: ItemRequest) {

        const orderExist = await prismaClient.pedido.findUnique({
            where: {
                id: id_pedido
            }, 
            select: {
                rascunho: true
            }
        })

        if(!orderExist) {
            throw new Error("Pedido não encontrado")
        }

        const productExist = await prismaClient.item.findFirst({
            where: {
                id: id_item,
                id_pedido: id_pedido,
            }
        })

        if(!productExist) {
            throw new Error("Produto não encontrado")
        }

        console.log(`Deleting item with id: ${id_item}`);
        
        await prismaClient.item.delete({
            where: {
                id: id_item
            }
        })
        
        return productExist
        
    }

}

export {RemoveItemService}