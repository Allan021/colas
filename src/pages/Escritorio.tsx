import { CloseCircleOutlined, ForwardOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Divider } from "antd";
const { Title, Text } = Typography;
export const Escritorio = () => {
  const handleExit = () => {
    console.log("Slir");
  };
  const handleNext = () => {
    console.log("Hola");
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Fernando</Title>
          <Text>Usted se encuentra en el escritorio: </Text>
          <Text type="success">10</Text>
        </Col>
        <Col span={4}>
          <Button danger onClick={handleExit}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Used esta atendiendo a la persona con el ticket: </Text>
          <Text type="danger" style={{ fontSize: 20 }}>
            20
          </Text>
        </Col>
      </Row>
      <Row justify="end">
        <Col span={4}>
          <Button onClick={handleNext} type="primary">
            <ForwardOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
