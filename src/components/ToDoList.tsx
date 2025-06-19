import { Button, Space, Table } from "antd";
import React from "react";
const ToDoList: React.FC = () => {
  const dataSource = [
    {
      id: 1,
      title: "Mike",
      description: "32",
      address: "10 Downing Street",
    },
    {
      id: 2,
      title: "John",
      description: "42",
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      width:20,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button>Invite {record.title}</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ margin: 5 }}>
      <h3>My To Dos</h3>
      <div style={{ padding: 5 }}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};
export default ToDoList;
