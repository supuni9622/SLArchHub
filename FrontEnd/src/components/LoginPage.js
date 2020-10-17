import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser, auth} from "../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import './index.css';

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                window.localStorage.setItem('firstName', response.payload.firstName);
                window.localStorage.setItem('profile_photo', response.payload.profile_photo);
                window.localStorage.setItem('userType', response.payload.userType);
               if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                } 
                // Direct to the right dashboard according to the userType
                dispatch(auth()).then(async response => {
                
                    if(response.payload.isLandscapeDesigner || response.payload.isExteriorDesigner) {
                        props.history.push('/archi-dashboard')
                    }
                    else if(response.payload.isClient){
                        props.history.push('/client-dashboard')
                    }  
                    else if(response.payload.isConstructionCompany){
                      props.history.push('/construction-dashboard')
                    }
                    else if(response.payload.isSoilEngineer){
                      props.history.push('/soilEngi-dashboard')
                    } 
                    else if(response.payload.isInteriorDesigner){
                      props.history.push('/interior-dashboard')
                    } 
                    else if(response.payload.isAdmin){
                      props.history.push('/admin-dashboard')
                    } 
                    else {
                        props.history.push('/') 
                    } 
              }) 
          }     
              else {
                setFormErrorMessage('Check your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>LOG IN</h2>
            <form onSubmit={handleSubmit} style={{ width: '350px' }}>

              <Form.Item required>
                <Input
                  id="email"
                 /*} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}*/
                  placeholder="Enter your email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                /*}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', margin: '1rem', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
                <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                  Forgot password?
                  </a>
                <div>
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                    Log in
                </Button>
                </div>
              </Form.Item>
            </form>
              <a href="/">Go To Home Page!</a>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);


