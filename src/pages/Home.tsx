import { Col, Row } from "antd";

const Home = () => {
  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <Row>
        <Col span={6}></Col>
        <Col span={18}></Col>
      </Row>
    </div>
  );
};
export default Home;
