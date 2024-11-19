import joi from "joi";

// register

export const registerSchema = joi.object({
  userName : joi.string().required(),
  role : joi.string().required(),
  email : joi.string().email().required(),
  password : joi.string().required(),
}).required()


// login 
export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
}).required()