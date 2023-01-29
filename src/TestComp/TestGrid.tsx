// import { UserOutlined, StepBackwardOutlined } from "@ant-design/icons";
// import { Input } from "antd";
// import React, { useState } from "react";

// function TestGrid() {
//   const [username, setUsername] = useState("");

//   function handleSubmit() {
//     // Store the value in local storage
//     localStorage.setItem("username", username);
//     console.log("Username stored in local storage: ",username);
//   }

//   return (
//     <>
//       {/* <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
//       <Input size="middle" style={{'width':'200px'}} placeholder="large size" prefix={<UserOutlined />} />
//       <button type="submit" onClick={handleSubmit}>Submit</button>
//       <Input onSubmit={()=> console.log('Username')} />
//     </>
//   );
// }

// export default TestGrid;

import React from 'react';
    // import './index.css';
    import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const TestGrid: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default TestGrid;