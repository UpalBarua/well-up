import cors from "cors";
import express, { Request, Response } from "express";

import helmet from "helmet";
import morgan from "morgan";
import { userRoutes } from "./modules/user/user.route";
import { courseRoutes } from "./modules/course/courses.route";

const app = express();

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/courses", courseRoutes);

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

export default app;
