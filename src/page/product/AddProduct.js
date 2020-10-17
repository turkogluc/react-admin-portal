import React from 'react';
import {
  Switch,
  Card,
  Form,
  Input,
  Row,
  Col,
  Select,
  Divider,
  Button,
  InputNumber,
} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

function AddProduct() {
  const [form] = Form.useForm();

  const handleSave = values => {
    console.log('onFinish', values);
    // call save API
  };

  const requiredFieldRule = [{ required: true, message: 'Required Field' }];

  const ownerArray = [
    {
      id: 1,
      value: 'John Nash',
    },
    {
      id: 2,
      value: 'Leonhard Euler',
    },
    {
      id: 3,
      value: 'Alan Turing',
    },
  ];

  const categoryArray = [
    {
      id: 1,
      value: 'Clothing',
    },
    {
      id: 2,
      value: 'Jewelery',
    },
    {
      id: 3,
      value: 'Accessory',
    },
  ];

  return (
    <Card title="Add Product" loading={false}>
      <Row justify="center">
        <Col span={12}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            form={form}
            name="product-form"
            onFinish={handleSave}
          >
            <Form.Item label="Name" name="name" rules={requiredFieldRule}>
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>
            <Form.Item label="Owner" name="owner">
              <Select>
                {ownerArray.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Category" name="category">
              <Select>
                {categoryArray.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Quantity" name="qty">
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Status"
              name="active"
              valuePropName="checked"
              initialValue={false}
            >
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
            <Divider />
            <Row justify="center">
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default AddProduct;
