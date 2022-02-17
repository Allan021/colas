import { SaveOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber, Divider } from "antd";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";

const { Text, Title } = Typography;
export const Ingresar = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    history.push("/escritorio");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el nombre del agente",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Boleta n°"
          name="boleto"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el numero de boleto",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ marginTop: 4 }}>
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
