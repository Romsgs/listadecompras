import { Router, Response, Request } from "express";
import { Controller } from "../controllers/main.controller";
import { MainService } from "../services/main.service";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const mainService = new MainService(prisma)
const controller = new Controller(mainService)
const main_router = Router();

main_router.get('/', async (req: Request, res: Response) => {
  const data = controller.getData()
  res.render('index', { data, newItem:null });
});
main_router.get('/addItemForm', async (req: Request, res: Response) => {
  res.render('addItemForm');
});

main_router.post('/adcionarItem', async (req: Request, res: Response) => {
  console.log(`--------------------------------------------`)
  console.log(req.body)
  const {nome, quantidade} = req.body
  await controller.newItem(nome, quantidade);
  const data = await controller.getData();
  res.render('index', { data, newItem: req.body.nome });
});

export default main_router;