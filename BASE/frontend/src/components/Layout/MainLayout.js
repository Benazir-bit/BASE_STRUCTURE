import React, { Component, Fragment } from 'react';
import TopNav from './TopNav/TopNav'
import { Link } from "react-router-dom";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import "./MainLayout.css";
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
class MainLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render() {
        return (
            <Fragment>
                <Layout style={{ height: '100%' }}>
                    <TopNav />
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ zIndex: 2 }}>
                        <div className="ant-pro-sider-logo" id="logo"><Link to="#"><h1 className="logotxt">LOGO</h1></Link></div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Option 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                Option 2
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout className="site-layout">


                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                paddingTop: 64
                            }}
                        >

                            {this.props.children}

                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        );
    }
}

export default MainLayout;