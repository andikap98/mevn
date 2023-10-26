import { Router } from "express";
import { getUsers} from "../controllers/UserContoller";



const routes = Router();

routes.get("/", getUsers);


export default routes;