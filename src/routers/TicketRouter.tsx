import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Ingresar } from "../pages/Ingresar";
import { Cola } from "../pages/Cola";
import { Ticket } from "../pages/Ticket";
import { Escritorio } from "../pages/Escritorio";
const { Sider, Content } = Layout;
export const TicketRouter = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsedWidth={0} collapsible breakpoint="md">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/ingresar">Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/colas">Colas</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear">Tickets</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path={"/ingresar"} component={Ingresar} />
              <Route path={"/colas"} component={Cola} />
              <Route path={"/crear"} component={Ticket} />
              <Route path={"/escritorio"} component={Escritorio} />
              <Redirect to={"/ingresar"} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
