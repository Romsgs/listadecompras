import { Router, Response, Request } from "express";
import { Controller } from "../controllers/main.controller";
import { MainService } from "../services/main.service";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const mainService = new MainService(prisma)
const controller = new Controller(mainService)
const main_router = Router();

main_router.get('/', async (req: Request, res: Response) => {
  const data = await controller.getData()
  console.log('data')
  console.log(data)
  res.render('index', { data, response:null });
});
main_router.get('/addItemForm', async (req: Request, res: Response) => {
  res.render('addItemForm');
});
main_router.get('/editForm/:id', async (req: Request, res: Response) => {

  const data = await controller.getById(req.params.id)
  res.render('editForm', {data});
});
main_router.post('/adcionarItem', async (req: Request, res: Response) => {
  const {nome, quantidade} = req.body
  const response = await controller.newItem(nome, quantidade);
  const data = await controller.getData();
  res.render('index', { data, response: {data:response, result:'created'} });
});
main_router.post('/editarItem/:id', async (req: Request, res: Response) => {
  const {nome, quantidade} = req.body
  const id = req.params.id
  const response = await controller.update(id, nome, quantidade);
  const data = await controller.getData();
  res.render('index', { data, response: {data:response, result:'created'} });
});
main_router.get('/delete/:id', async (req: Request, res: Response) => {
  const response = await controller.deleteById(req.params.id.toString());
  const data = await controller.getData();
  res.render('index', { data, response: { data: response, result: 'deleted' } });
});

export default main_router;