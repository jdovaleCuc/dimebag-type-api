import { Request, Response, Router } from "express";

const router = Router({ caseSensitive: true });

const AuthRouter = {
  LogIn: (Request: Request, Response: Response) => {
    Response.status(200).json({
      message: "SUCESSS",
      data: "{}",
    });
  },
  SignIn: (Request: Request, Response: Response) => {
    Response.status(200).json({
      message: "SignIn",
      data: "{}",
    });
    return;
  },
};

router.post("/login", AuthRouter.LogIn);
router.post("/signIn", AuthRouter.SignIn);

export default router;
