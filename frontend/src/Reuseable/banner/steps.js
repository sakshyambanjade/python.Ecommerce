import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 100,
  paddingInline: 25,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '99%',
    }}
    
  >
    <Layout>
      <Header style={headerStyle}>Branding</Header>
    </Layout>
  </Space>
);
export default App;