import Joi from "joi";

const addPersonalInfoSchema = async () => {
  return Joi.object({
    name: Joi.string().min(2).required().messages({
      "string.base": "name should be string",
      "string.min": "name should include 2 or more characters",
      "any.required": "name is required",
    }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ge"] } })
      .required()
      .messages({
        "string.base": "email should be a string",
        "string.email": "email should be a valid email address",
        "any.required": "email is required",
      }),
    phone: Joi.string()
      .length(9)
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
        "string.base": "phone should be a string",
        "string.length": "phone should have a length of 12",
        "string.pattern.base": "phone should only contain numeric characters",
        "any.required": "phone is required",
      }),
    plan: Joi.string().required().messages({
      "string.base": "plan should be a string",
      "any.required": "plan is required",
    }),
    price: Joi.string().required().messages({
      "string.base": "price should be a string",
      "any.required": "price is required",
    }),
    payment: Joi.string().required().messages({
      "string.base": "price should be a string",
      "any.required": "price is required",
    }),
    ads: Joi.array().items(Joi.string()).required().messages({
      "array.base": "ads should be an array",
      "array.includesRequiredUnknowns": "ads should only contain strings",
      "any.required": "ads is required",
    }),
  });
};

export default addPersonalInfoSchema;
