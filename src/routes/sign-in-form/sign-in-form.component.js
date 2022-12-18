import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

import { UserContext } from "../../contexts/user.context";

import {
  signInUserWithGoogle,
  signInUserWithEmailAndPassword,
  getImageOnSignIn,
} from "../../utils/firebase/firebase";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();
  const { setUserImage } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithEmailAndPassword = async () => {
    if (!email || !password) return;

    setUserImage(await getImageOnSignIn(email));

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const signInWithGoogle = async () => {
    const result = await signInUserWithGoogle();
    if (!result) {
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <div className="sign-in-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item className="sign-in-title">
          <h3>SIGN IN</h3>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item className="sign-in-buttons">
          <Button
            type="primary"
            htmlType="submit"
            className="sign-in-button"
            onClick={signInWithEmailAndPassword}
          >
            SIGN IN
          </Button>
          <Button
            type="primary"
            className="sign-with-google-button"
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </Form.Item>
        <Form.Item className="register-button-container">
          <Form.Item name="register" noStyle>
            <Link to="/sign-up">
              <span className="register-button-link">REGISTER</span>
            </Link>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignInForm;
