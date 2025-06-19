import React from "react";
import { Button, Form, FormProps, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export type ToDoTypes = {
    id: number;
    title: string;
    description: string;
};

const onFinish: FormProps<ToDoTypes>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<ToDoTypes>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ToDoForm: React.FC = () => {
  return (
    <div>
      <h3>Create To Do</h3>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<ToDoTypes>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ToDoTypes>
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ToDoForm;
