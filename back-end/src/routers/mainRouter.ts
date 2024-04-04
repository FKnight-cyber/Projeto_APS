import { Router } from "express"
import authRouter from "./authRouter"
import productsRouter from "./productsRouter"
import categoryRouter from "./categoriesRouter"
import districtsRouter from "./districtsRouter"
import edgeRouter from "./edgeRouter"

const mainRouter = Router()

mainRouter.use(authRouter)
mainRouter.use(productsRouter)
mainRouter.use(categoryRouter)
mainRouter.use(districtsRouter)
mainRouter.use(edgeRouter)

export default mainRouter