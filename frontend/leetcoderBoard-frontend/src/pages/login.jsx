import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../calls/userCalls";


function Login(){
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log(values);
        try {
            const response = await loginUser(values);
            if (response.success) {
                message.success(response.message);
                navigate('/')
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
    <>
        <header className="App-header h-screen w-screen  flex items-center justify-center">
            <main className="main-area mw-500 text-center p-9 border-0 rounded-xl border-slate-400 shadow-md shadow-slate-400 text-center">
                <section className="left-section p-5">
                <h1>Login to LeetLeader</h1>
                </section>

                <section className="right-section">
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                    label="Leetcode Profile"
                    htmlFor="leetcodeProfile"
                    name="leetcodeProfile"
                    className="d-block"
                    rules={[{ required: true, message: "Leetcode Profile is required" }]}
                    >
                    <Input id="email" type="text" placeholder="Enter your Leetcode Profile" />
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    htmlFor="password"
                    name="password"
                    className="d-block"
                    rules={[{ required: true, message: "Password is required" }]}
                    >
                    <Input id="password" type="password" placeholder="Enter your Password" />
                    </Form.Item>

                    <Form.Item className="d-block">
                    <Button type="primary" block htmlType="submit" style={{ fontSize: "1rem", fontWeight: "600" }}>
                        Login
                    </Button>
                    </Form.Item>
                </Form>
                <div>
                    <p>
                    New User? <Link to="/register">Register Here</Link>
                    </p>
                    <p>
                    Forgot Password? <Link to="/forget">Click Here</Link>
                    </p>
                </div>
                </section>
            </main>
        </header>
    </>
    );
}

export default Login;