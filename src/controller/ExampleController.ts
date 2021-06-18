import { ExampleService } from "../service/ExampleService";
import { Request, Response } from "express";

export class ExampleController {
    private readonly exampleService: ExampleService;

    public constructor(
        exampleService?: ExampleService
    ) {
        this.exampleService = exampleService ? exampleService : new ExampleService();
    }

    // Using arrow function to ensure correct context of `this` is used
    // "Methods do not capture `this`"
    public handleExampleGetRequest = (req: Request, res: Response) => {
        const result = this.exampleService.getResult();

        res.status(200).json({message: result})
    }
}
