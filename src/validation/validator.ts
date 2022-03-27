import { DATA_TYPES, validateEmailExp, VALIDATOR_MESSAGES } from "../utils";
import { IValidator, IValidatorDetails, IValidatorResponse } from "../interfaces";
import logger from "../utils/logger";

export const validator = (data: IValidator): IValidatorResponse => {

    const response = <IValidatorResponse>{};
    response.validate = true;
    const details: IValidatorDetails[] = [];

    //validando informacion del esquema
    for (let item of data.schema) {
        let props = data.data as {};

        if (!props.hasOwnProperty(item.name) && item.isRequired) {
            response.validate = false
            details.push(
                {
                    prop: item.name,
                    obs: VALIDATOR_MESSAGES.IS_REQUIRED
                })
            continue;
        }

        if (item.type === DATA_TYPES.EMAIL) {
            if (typeof props[item.name as keyof typeof props] !== (DATA_TYPES.STRING.toLocaleLowerCase())) {
                response.validate = false;
                details.push(
                    {
                        prop: item.name,
                        obs: VALIDATOR_MESSAGES.WRONG_TYPE.replace('?', DATA_TYPES.STRING)
                    })
            }

            if (!validateEmailExp.test(props[item.name as keyof typeof props])) {
                response.validate = false;
                details.push(
                    {
                        prop: item.name,
                        obs: VALIDATOR_MESSAGES.WRONG_TYPE.replace('?', DATA_TYPES.EMAIL)
                    })
                
            }
            continue;
        }

        if (typeof props[item.name as keyof typeof props] !== (item.type.toLocaleLowerCase())) {
            logger.OnInfo(`${props[item.name as keyof typeof props]}:`, typeof props[item.name as keyof typeof props])
            response.validate = false
            details.push(
                {
                    prop: item.name,
                    obs: VALIDATOR_MESSAGES.WRONG_TYPE.replace('?', item.type)
                })
            continue;
        }
    }

    //validando propiedades no permitidas
    let keys = Object.keys(data.data);
    for (let key of keys) {
        const index = data.schema.findIndex((schema) => schema.name === key);
        if (index === -1) {
            response.validate = false
            details.push({ prop: key, obs: VALIDATOR_MESSAGES.NOT_ALLOWED });
        }
    }
    response.details = details
    return response
}   