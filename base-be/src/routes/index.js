import { Router } from "express";
import { getProducts } from "../controllers/productController.js"; // import thiếu .js

const routes = Router();

// routes.use("/products", hanldeProduct...)

routes.get("/products", getProducts);

export default routes;

