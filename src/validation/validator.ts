import { VALIDATOR_MESSAGES } from "../utils";
import { IValidator, IValidatorResponse } from "../interfaces";

export const validator = (data: IValidator): IValidatorResponse => {

    const response = <IValidatorResponse>{};
    response.validate = true;
    const details: string[] = [];

    for (const item of data.schema) {
        if (!data.data.hasOwnProperty(item.name) && item.isRequired) {
            response.validate = false
            details.push(VALIDATOR_MESSAGES.IS_REQUIRED.replace('$', item.name.toUpperCase()))
            continue;
        }

        /* if (Object.values()) {
            
        } */
    }

    response.details = details.join(',')
    return response
}   