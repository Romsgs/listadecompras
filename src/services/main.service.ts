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
  // Retrieve by id
  getById = async (id:string) => {
    const response = await this.prisma.item.findFirst({where:{id}});
    console.log('response')
    console.log(response)
    return response
  };
  // Update an item
  updatedItem = async (id: string, name:string, quantidade:number) => {
    return await this.prisma.item.update({
      where: { id },
      data: { name, quantidade },
    });
  };
  // Delete an item
  deletedItem = async (id: string) => {
    return await this.prisma.item.delete({
      where: { id },
    });
  };
}
