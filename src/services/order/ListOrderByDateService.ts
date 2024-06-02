import prismaClient from "../../prisma";

interface OrderRequest {
  date: string;
}

class ListOrderByDateService {
  async execute({ date }: OrderRequest) {    

    const dategte = new Date(date);
    const datelt = new Date(date)
    datelt.setDate(dategte.getDate() + 1);

    const orders = await prismaClient.pedido.findMany({
      where: {
        status: true,
        atualizado_em: {
          gte: dategte,
          lt: datelt
        }
      }

    });

    return orders;
  }
}

export { ListOrderByDateService }