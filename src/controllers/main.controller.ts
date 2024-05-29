import { Request, Response } from "express";
import { MainService } from "../services/main.service";

export class Controller {
  constructor(private mainService: MainService) {}
  async newItem(name: string, quantidade: number) {
    return this.mainService.newItem(name, quantidade);
  }
  async getData() {
    return await this.mainService.allItems();
  }
  async deleteById(id: string) {
    return await this.mainService.deletedItem(id);
  }
  async getById(id: string) {
    return await this.mainService.getById(id);
  }
  async update(id: string, name: string, quantidade: string) {
    const quantidadeint = parseInt(quantidade);
    return await this.mainService.updatedItem(id, name, quantidadeint);
  }
}
