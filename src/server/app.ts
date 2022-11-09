import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routers/routes.js";
import robotRouter from "./routers/robotsRouter.js";
import usersRouter from "./routers/usersRouter.js";

const { getRobotsRoute, getUsersRoute } = routes;
const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(getUsersRoute, usersRouter);
app.use(getRobotsRoute, robotRouter);

export default app;
