import { Button, Col, Form, Input, InputNumber, Row, Select, Spin } from "antd";
import { useState } from "react";
import { POST } from "src/store/api/axios";

const AddEmployee = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
  
    const onFinish = async(values: any) => {
        setLoading(true);
        try {
            let response = await POST('/users', values);
            alert("successfully inserted");
            form.resetFields();
        } catch(error){
            console.log("Error", error);
        } finally{
            setLoading(false);
        }
    };
    return (
        <div>
            <br />
            <center><h1>Add Employee</h1></center>
            <br />
            <br />
            <Spin spinning={loading} tip="Loading" size="large">
                <Row justify="center" align="middle" style={{ width: '100%' }}>
                    <Col span={8}>
                        <Form
                            form={form}
                            name="employee_form"
                            onFinish={onFinish}
                            layout="vertical"
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                password: '',
                                role: 'sales',
                            }}
                        >
                            {/* Name Field */}
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please input the employee name!' }]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Email Field */}
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please input the email address!' },
                                    { type: 'email', message: 'Please enter a valid email!' },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* Phone Field */}
                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[
                                    { required: true, message: 'Please input the phone number!' },
                                    { type: 'number', message: 'Please input a valid phone number!' },
                                ]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                             {/* Password Field */}
                             <Form.Item
                                name="password"
                                label="Password"
                                rules={[{ required: true, message: 'Please input the employee password!' }]}
                            >
                                <Input />
                            </Form.Item>


                            {/* Role Field */}
                            <Form.Item
                                name="role"
                                label="Role"
                                rules={[{ required: true, message: 'Please select a role!' }]}
                            >
                                <Select placeholder="Select a role" defaultValue={'sales'}>
                                    <Select.Option value="engineering">Engineering</Select.Option>
                                    <Select.Option value="sales">Sales</Select.Option>
                                </Select>
                            </Form.Item>

                            {/* Submit Button */}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Add Employee
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Spin>
        </div>
    )
};

export default AddEmployee;
