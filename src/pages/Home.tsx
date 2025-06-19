import { Col, Row } from "antd";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import React from "react";

const Home:React.FC = () => {
  return (
    <div>
      {/* <h1>To Do</h1>
      <hr /> */}
      <Row>
        <Col span={6}>
            <ToDoForm />
        </Col>
        <Col span={18}>
          <ToDoList />
        </Col>
      </Row>
    </div>
  );
};
export default Home;
