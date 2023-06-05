import * as Yup from "yup";
//must contain minimum 1 lowercase 1uppercase 1 numerical 1 special min 8 or longer
const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name."),
    email: Yup.string()
        .email("Please enter valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .matches(passwordRegex, "Please enter a minimum of 8 characters: min 1 lowercase, min 1 uppercase, min 1 numerical, min 1 special character.")
        .required("Please enter your password."),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password do NOT match!")
        .required("Please enter confirm password."),
});



//login validation
export const loginSchema = Yup.object({
    // name: Yup.string().min(3).required("Please enter your name."),
    email: Yup.string()
        .email("Please enter valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .matches(passwordRegex, "Please enter a minimum of 8 characters: min 1 lowercase, min 1 uppercase, min 1 numerical, min 1 special character.")
        .required("Please enter your password."),
    // cpassword: Yup.string()
    //     .oneOf([Yup.ref("password")], "Password do NOT match!")
    //     .required("Please enter confirm password."),
});