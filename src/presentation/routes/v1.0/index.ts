import { Request, Router, Response } from "express";
import userRouter from "../../controllers/user-router";
import { CheckApiKey } from "../../../app/middlewares/auth.handler";
import authRouter from "../../controllers/auth-router/index";

const router = Router({ caseSensitive: true });
router.get("/", CheckApiKey, (_Req: Request, Res: Response) => {
  Res.status(200).json({ api: "Dimebag-type-api", version: "v1.0" });
});

router.use("/auth", CheckApiKey, authRouter);
router.use("/user", CheckApiKey, userRouter);

export default router;
