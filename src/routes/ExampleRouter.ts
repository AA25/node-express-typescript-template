import express from "express";

import { ExampleController } from "../controller/ExampleController";

const exampleController = new ExampleController();

const exampleRouter = express.Router();

exampleRouter.get('/', exampleController.handleExampleGetRequest)

export { exampleRouter }
