import { Col, Row } from "antd";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import React from "react";
import { toDoContext, ToDoContextType } from "../context/toDoContext";

const Home: React.FC = () => {

  const context = React.useContext<ToDoContextType | null>(toDoContext);
  if (!context) {
    // handle null case, show loading, error, etc.
    return null;
  }
  const { toDo, setToDo } = context;

  console.log(toDo);

  return (
    <div>
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
