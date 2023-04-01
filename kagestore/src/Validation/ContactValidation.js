import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstname: yup.string().trim().min(3).required(),
  subject: yup.string().trim().min(3).required(),
  email: yup
    .string()
    .trim()
    .required()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  body: yup.string().min(4).max(350),
});
