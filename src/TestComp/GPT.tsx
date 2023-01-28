import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const {Option} = Select;

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    // gender: '',
    // firstName: '',
    // lastName: '',
    // citizenID: '',
    // expectSalary: '',
  });

  const onFinish = (values: any) => {
    const formID = localStorage.length + 1
    const keyName = `formData${formID}`
    setFormData(values);
    localStorage.setItem( keyName, JSON.stringify({values, formID}) );

    // const expireTime = new Date().getTime() + (30*60*1000)
    // localStorage.setItem('formData', JSON.stringify({values, expireTime}));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle >
      <Select defaultValue='86' style={{ 'width': '80px' }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select defaultValue='THB' style={{ 'width': '80px' }}>
        <Option value="THB">฿</Option>
        <Option value="USD">$</Option>
      </Select>
    </Form.Item>
  );


  return (
    <Form
      name="basic"
      initialValues={formData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <Form.Item
            label='Gender'
            name='gender'
            rules={[{required: true, message: 'Please select gender' }]}
        >
            <Select placeholder='Select your gender'>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
            </Select>
        </Form.Item>
        
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[{ required: true, message: 'Please input your firstname!' }]}
      >
        <Input placeholder='Input your firstname' />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[{ required: true, message: 'Please input your lastname!' }]}
      >
        <Input placeholder='Input your lastname' />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input addonBefore={prefixSelector} placeholder='Input your number' />
      </Form.Item>

      <Form.Item
        label="Citizen ID."
        name="citizenID"
        rules={[{ required: false, message: "Please input your citizen ID!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="salary"
        label="Expect salary"
        rules={[{ required: true, message: "Please input donation amount!" }]}
      >
        <Input addonAfter={suffixSelector} placeholder='Input your expect salary' />
      </Form.Item>




      

      <Form.Item>
        <Button type="primary" htmlType="submit"  >
          Submit
        </Button>
      </Form.Item>



      <br/>
      <hr/>
      <Form.Item
        label="Password"
        name="password"
        // rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder='Input your password' />
      </Form.Item>
      
    </Form>
  );
};

export default RegisterPage;
