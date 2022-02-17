import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import React from "react";
const { Text, Title } = Typography;
export const Ticket = () => {
  const generateNewTicket = () => {};
  return (
    <>
      <Row align="middle" justify="center">
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Title level={3}>Presione el boton para un nuevo Ticket</Title>

          <Button
            icon={<DownloadOutlined />}
            onClick={generateNewTicket}
            type="primary"
          >
            Crear nuevo ticket
          </Button>
        </Col>
      </Row>

      <Row align="middle" justify="center" style={{ marginTop: 30 }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text>Usted esta atendiendo a la persona con ticket</Text>
          <Text style={{ fontSize: 30, textAlign: "center" }}>5</Text>
        </Col>
      </Row>
    </>
  );
};
