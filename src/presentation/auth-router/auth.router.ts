import { Request, Response, Router } from "express";

const router = Router({ caseSensitive: true });

const AuthHandler = {
  LogIn: (Request: Request, Response: Response) => {
    const body = Request.body as unknown;
    Response.json(body);
  },
  SignIn: (Request: Request, Response: Response) => {
    return;
  },
};

router.post("/Login", AuthHandler.LogIn);
router.post("/SignIn", AuthHandler.SignIn);

export default router;
