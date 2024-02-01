import { useState } from 'react';

  import { Breadcrumb, Layout } from 'antd';
  import {Outlet} from 'react-router-dom'
  import MainMenu from './../components/MainMenu/index'

  const { Header, Content, Sider } = Layout;
  
  const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    //const navigateTo=useNavigate()
  
    return (
      <Layout style={{ minHeight: '100vh' }}> 
        {/* 左边侧边栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <MainMenu></MainMenu>
        </Sider>
        {/* 右边内容 */}
        <Layout>
            {/* 右侧头部 */}
          <Header style={{ paddingLeft: '16px', background: '#fff' }}>
             {/* 面包屑 */}
             <Breadcrumb style={{ lineHeight:'64px' }}>
                <Breadcrumb.Item>欢迎来到启源博客</Breadcrumb.Item>
                
             </Breadcrumb>
          </Header>
          {/* 右侧内容 白色底盒子*/}
          <Content style={{ margin: '16px 16px 0' ,
                padding: 24,
                minHeight: 360,
                background: '#fff',
                // borderRadius: borderRadiusLG,
            }}>
        
              {/* 窗口部分 */}
                <Outlet/>
          </Content>
          {/* 右侧底部 */}
        </Layout>
      </Layout>
    );
  };
  
  export default View;