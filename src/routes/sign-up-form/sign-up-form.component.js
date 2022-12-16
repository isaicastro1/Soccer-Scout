import { useEffect, useState } from "react";

import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";

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
    phoneNumber: undefined,
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, phoneNumber, password, confirmPassword } =
    formFields;

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const resetFormFields = () => setFormFields(defaultFormFields);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(user);

      await createUserDocumentFromAuth(user, { displayName, phoneNumber });
      resetFormFields();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("email is already taken");
          break;
        case "auth/weak-password":
          alert("password is too weak");
          break;

        default:
          alert("There has been an error, please try again");
          break;
      }
    }
  };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 15,
      },
    },
  };

  return (
    <div className="sign-up-container">
      <Form
        name="register_login"
        className="register-form"
        {...formItemLayout}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item className="register-title">
          <h3>REGISTER</h3>
        </Form.Item>

        <Form.Item
          name="displayName"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            name="displayName"
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
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
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: false,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            name="phoneNumber"
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          label="Password"
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
          name="confirmPassword"
          label="Confirm Password"
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
            name="confirmPassword"
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
    </div>
  );
};
export default SignUpForm;
