import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import React from "react";
import { data } from "../data/temp";
const { Text, Title } = Typography;
export const Cola = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Title level={2}>Atendiendo al Cliente</Title>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 15 }}
                  actions={[
                    <Tag color={"volcano"}>Agente: {item.agente}</Tag>,
                    <Tag color={"purple"}>Escritorio : {item.escritorio}</Tag>,
                  ]}
                >
                  <Title>{item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket N°: ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio </Text>
                      <Tag color={"volcano"}>{item.escritorio}</Tag>
                      <Text type="secondary">Agente </Text>
                      <Tag color={"purple"}>{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
