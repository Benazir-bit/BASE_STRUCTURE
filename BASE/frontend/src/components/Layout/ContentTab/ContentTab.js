import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Tabs } from "antd";
const { TabPane } = Tabs;
class ContenTab extends Component {

    render() {
        return (
            <Fragment>
                <Tabs defaultActiveKey="1" tabPosition={'left'} style={{
                    height: '100%',
                    background: 'white',
                    padding: '24px 5px'
                }}>
                    {this.props.tablist.map((value, i) => (
                        <TabPane tab={value} key={i} >
                            {this.props.children}
                        </TabPane>
                    ))}
                </Tabs>
            </Fragment>
        );
    }
}

export default ContenTab;