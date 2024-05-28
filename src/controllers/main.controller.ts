import { Request, Response } from "express";
import { MainService } from "../services/main.service";

export class Controller{
  constructor(private mainService:MainService){}
  async newItem(name: string, quantidade: number) {
    return this.mainService.newItem(name, quantidade);
  }
  async getData() {
    return this.mainService.allItems();
  }
}