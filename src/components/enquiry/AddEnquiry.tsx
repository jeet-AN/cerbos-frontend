import { Button, Col, Form, Input, InputNumber, Row, Spin } from "antd";
import { useState } from "react";
import { POST } from "src/store/api/axios";

const AddEnquiry = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      let response = await POST('/enquiry', values);
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
      <center><h1>Add Enquiry</h1></center>
      <br />
      <br />
      <Spin spinning={loading} tip="Loading" size="large">
        <Row justify="center" align="middle" style={{ width: '100%' }}>
          <Col span={8}>
            <Form
              form={form}
              name="enquiry_form"
              onFinish={onFinish}
              layout="vertical"
              initialValues={{
                enquiry_number: '',
                product_name: '',
                product_price: '',
              }}
            >

              <Form.Item
                name="enquiry_number"
                label="Enquiry Number"
                rules={[
                  { required: true, message: 'Please input the enquiry number!' },
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
                  Add Enquiry
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  )
};

export default AddEnquiry;
