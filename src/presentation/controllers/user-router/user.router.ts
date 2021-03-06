import { NextFunction, Request, Response, Router } from "express";
import logger from "../../../infrastructure/utils/logger";
import { ICreateUser } from "../../../domain/interfaces/entities/user.interface";
import UserService from "../../../domain/use-cases/pg-user.data.source";
import UserSchemas from "../../../infrastructure/validation/schemas/user.schema";
import validator from "../../../infrastructure/validation/validators/Joi";
import { UserRouter } from "../../interfaces/user.interfaces";

const router = Router({ caseSensitive: true });

const UserRouter: UserRouter = {
	create: async (Request: Request, Response: Response, Next: NextFunction): Promise<void> => {
		try {
			const data = Request["body"] as ICreateUser;
			await UserService.create(data);

			logger.onSucess("Nuevo usuario creado");
			Response.status(200).json({
				status: 200,
				message: "usuario creado",
			});
		} catch (error) {
			Next(error);
		}
	},
	findAll: async (Request: Request, Response: Response, Next: NextFunction): Promise<void> => {
		try {
			const users = await UserService.findAll();
			Response.status(200).json({
				status: 200,
				message: "Usuarios obtenidos",
				data: users,
			});
		} catch (error) {
			Next(error);
		}
	},
};

router.get("/", UserRouter.findAll);
router.post("/create", validator(UserSchemas.create), UserRouter.create);

export default router;
