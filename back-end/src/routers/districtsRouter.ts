import { Router } from "express";
import authentication from "../middlewares/authentication";
import { getDistricts, 
    editDistrict, 
    removeDistrict,
    addDistrict } from "../controllers/districtsController";

const districtsRouter = Router();

districtsRouter.get("/districts", authentication, getDistricts);
districtsRouter.delete("/districts/delete/:id", authentication, removeDistrict);

export default districtsRouter;