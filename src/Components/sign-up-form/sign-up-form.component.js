import { useState } from "react";

import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User could not be created, email already in use");
      } else {
        console.log("user creation failed", error);
      }
    }
  };

  return (
    <Form
      name="register_login"
      className="register-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item className="register-title">
        <h3>REGISTER</h3>
      </Form.Item>

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input name="name" placeholder="Name" onChange={handleChange} />
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
        <Input name="email" placeholder="Email" onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your password again!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match!"));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          name="confirm-password"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item className="register-buttons">
        <Button
          type="primary"
          htmlType="submit"
          className="register-button"
          onClick={handleSubmit}
        >
          REGISTER
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUpForm;
