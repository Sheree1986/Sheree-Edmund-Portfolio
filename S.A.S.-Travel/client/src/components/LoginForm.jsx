import "./loginform.css";

import React from "react";
import { Formik, Form, Field } from "formik";
import { loginSchema } from "../assets/utils/validationSchema/index";
import AuthService from "../services/auth.service";
import VideoBackground from "./VideoBackground";
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const LoginForm = () => {

  const navigate = useNavigate();

  const onSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();

    AuthService.login(data.email, data.password).then(
      (response) => {
        console.log(response);
        if(response.success){
          alert("Login Successful");
          navigate("/profile");
        }else{
          alert(response.data.message);
        }
      });
  };

  return (
    <div className="parent" style={{display: 'block'}}>
        <h1 style={{textAlign: 'center',marginTop: '-2em'}}>S.A.S Travel Blog</h1>
        {/* <VideoBackground style={{height: '100%',backgroundSize: 'cover'}}/> */}
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup_form" action="#">
            {/* <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <div className="error_container">
              {errors.name && touched.name && (
                <p className="form_error">{errors.name}</p>
              )}
            </div> */}

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <div className="error_container">
              {errors.email && touched.email && (
                <p className="form_error">{errors.email}</p>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <div className="error_container">
              {errors.password && touched.password && (
                <p className="form_error">{errors.password}</p>
              )}
            </div>

            {/* <label htmlFor="cpassword">Confirm Password</label>
            <Field type="password" name="cpassword" />
            <div className="error_container">
              {errors.cpassword && touched.cpassword && (
                <p className="form_error">{errors.cpassword}</p>
              )}
            </div> */}

            <button type="submit">Login</button>
          </Form>
        )}
    
      </Formik>
    </div>
  );
};

export default LoginForm;
