import express from "express";
import * as core from "express-serve-static-core";
import { exampleRouter } from "./routes/ExampleRouter";

const app: core.Express = express();
const port = 5000;

app.use("/exampleApi", exampleRouter)

app.listen(port, (err?: Error) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
