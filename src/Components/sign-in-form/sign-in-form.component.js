import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

import {
  signInWithGoogle,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import "./sign-in-form.styles.scss";

const App = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const setEmail = (event) => setUserEmail(event.target.value);
  const setPassword = (event) => setUserPassword(event.target.value);

  const signInUser = () =>
    signInUserWithEmailAndPassword(userEmail, userPassword);

  return (
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
          placeholder="Email"
          onChange={setEmail}
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
          type="password"
          placeholder="Password"
          onChange={setPassword}
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
          onClick={signInUser}
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
    </Form>
  );
};
export default App;
