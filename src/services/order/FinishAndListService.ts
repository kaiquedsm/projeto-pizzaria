import prismaClient from "../../prisma";

interface OrderRequest {
    id_pedido: string;
}

class FinishAndListService {
    async execute({ id_pedido }: OrderRequest) {

        const order = await prismaClient.pedido.findFirst({
            where: {
                id: id_pedido,
            }
        })

        if (!order) {
            return ("Pedido não encontrado")
        }
        const listOrder = await prismaClient.item.findMany({
            where: {
                id_pedido: id_pedido,
            },
            select: {
                id: true,
                quantidade: true,
                produto: {
                    select: {
                        nome: true,
                        preco: true,
                    },
                },
            },

        });

        let bill = 0;
        let orders;

        if (listOrder.length > 0) {
            for (orders of listOrder) {
                bill += (orders.quantidade * Number(orders.produto.preco));
            }
        } else {
            return ("Item não encontrado")
        }

        return {
            orderItens: listOrder,
            billPrice: bill,
        }
    }
}

export { FinishAndListService }