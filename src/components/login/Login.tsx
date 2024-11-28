import { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col, Spin } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { LoginAPI, LoginPayload } from '../../store/api/authApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/features/authSlice';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate();


  const onFinish = async (values: LoginPayload) => {
    setLoading(true);
    try {
      let response = await LoginAPI(values);
      dispatch(loginSuccess({userInfo: response?.userInfo, userToken: response?.access_token }));
      navigate("/");
    } catch(error){
      console.log("Error", error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading} tip="Loading" size="large">
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row justify="center" align="middle" style={{ width: '100%' }}>
          <Col span={8}>
            <div style={{ textAlign: 'center' }}>
              <Title level={2}>Login</Title>
            </div>

            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              style={{ padding: '20px', border: '1px solid #f0f0f0', borderRadius: '8px' }}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default Login;
