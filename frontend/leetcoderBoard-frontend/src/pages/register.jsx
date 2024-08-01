import React, { useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../calls/userCalls";

function Register() {
  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await registerUser(values);
      if (response.success) {
        message.success(response.message);
        navigate('/login')
      } else {
        message.error(response.message);
        // navigate('/login')
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <header className="App-header h-screen w-screen  flex items-center justify-center">
        <main className="main-area mw-500 p-9  border rounded-xl border-slate-400 shadow-md shadow-slate-500 text-center ">
          <section className="left-section">
            <h1>Register to LeetLeader</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Username"
                htmlFor="username"
                name="username"
                className="d-block"
                rules={[{ required: true, message: "Username is required!" }]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  rules={[{ required: true, message: "username is required!" }]}
                ></Input>
              </Form.Item>
              <Form.Item
                label="LeetCode Profile"
                htmlFor="leetcodeProfile"
                name="leetcodeProfile"
                className="d-block"
                rules={[{ required: true, message: "LeetCode Profile is required!" }]}
              >
                <Input
                  id="leetcodeProfile"
                  type="leetcodeProfile"
                  placeholder="Enter your leetcode-profile"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                ></Input>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Sign Up
                </Button>
              </Form.Item>
              
            </Form>
            <div>
              <p>
                Already a user? <Link to="/login">Login now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;