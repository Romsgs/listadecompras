import { PrismaClient } from "@prisma/client";

export class MainService {
  constructor(private prisma: PrismaClient) {}
  // Create a new item
  newItem = async (name:string, quantidade:number) => {
    quantidade = Number(quantidade)
    return await this.prisma.item.create({
      data: {
        name,
        quantidade,
      },
    });
  };

  // Retrieve all items
  allItems = async () => {
    const response = await this.prisma.item.findMany();
    console.log('response')
    console.log(response)
    return response
  };

  // Update an item
  updatedItem = async (id: string) => {
    return await this.prisma.item.update({
      where: { id },
      data: { quantidade: 15 },
    });
  };
  // Delete an item
  deletedItem = async (id: string) => {
    return await this.prisma.item.delete({
      where: { id },
    });
  };
}
