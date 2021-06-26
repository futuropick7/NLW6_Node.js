import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

import "./database";

const app = express();
app.use(cors());
/** 
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
*/

/**
 * Tipos de parâmetros
 * Router params => http://localhost:3000/produtos/78347583458345
 * Query params  => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * 
 * Body params   => {
 * "name": "teclado",
 * "description": "teclado bom"
 * }
 */


app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW"));
