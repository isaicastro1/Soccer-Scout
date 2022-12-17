import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import Avatar from "@mui/material/Avatar";

import { UserContext } from "../../contexts/user.context";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  storage,
} from "../../utils/firebase/firebase";

import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    phoneNumber: undefined,
    profileImage: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [imageUrl, setImageUrl] = useState(null);
  const {
    displayName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    profileImage,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFormFields({ ...formFields, profileImage: e.target.files[0] });
    }
  };

  const { setUserImage } = useContext(UserContext);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      //uploads image to firestore storage and gets download link
      const imageRef = ref(storage, `images/${email}`);
      uploadBytes(imageRef, profileImage)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setImageUrl(url);
              setUserImage(url);
              localStorage.setItem("profile-image", url);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log("Error getting image url", err));

      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {
        displayName,
        phoneNumber,
        imageUrl,
      });

      navigate("/");
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

        <div className="upload-image">
          <input
            className="avatar"
            type="file"
            id="avatar"
            name="profileImage"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
          {formFields.profileImage ? (
            <Avatar
              className="avatar-image"
              alt="Remy Sharp"
              src={imageUrl}
              sx={{ width: 56, height: 56 }}
            />
          ) : null}
        </div>

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
