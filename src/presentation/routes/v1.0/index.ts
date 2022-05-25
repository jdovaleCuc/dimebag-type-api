import { Router } from "express";
import authRouter from "../../auth-router/index";

const router = Router({ caseSensitive: true });

router.use("/auth", authRouter);

export default router;
