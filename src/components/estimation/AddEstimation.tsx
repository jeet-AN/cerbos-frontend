import { Button, Col, Form, Input, InputNumber, Row, Spin } from "antd";
import { useState } from "react";
import { POST } from "src/store/api/axios";

const AddEstimation = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      let response = await POST('/estimation', values);
      alert("successfully inserted");
      form.resetFields();
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <br />
      <center><h1>Add Estimation</h1></center>
      <br />
      <br />
      <Spin spinning={loading} tip="Loading" size="large">
        <Row justify="center" align="middle" style={{ width: '100%' }}>
          <Col span={8}>
            <Form
              form={form}
              name="estimation_form"
              onFinish={onFinish}
              layout="vertical"
              initialValues={{
                estimation_number: '',
                product_name: '',
                product_price: '',
              }}
            >

              <Form.Item
                name="estimation_number"
                label="Estimation Number"
                rules={[
                  { required: true, message: 'Please input the estimation number!' },
                ]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="product_name"
                label="Product Name"
                rules={[{ required: true, message: 'Please input the product name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="product_price"
                label="Product Price"
                rules={[
                  { required: true, message: 'Please input the product price!' },
                ]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Add Estimation
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  )
};

export default AddEstimation;
