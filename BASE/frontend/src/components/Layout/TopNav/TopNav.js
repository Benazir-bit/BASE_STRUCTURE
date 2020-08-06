import React, { Component } from 'react';
import { Layout, Menu,Dropdown,Button } from "antd";
import './TopNav.css'
import { DownOutlined } from '@ant-design/icons';
import { logout } from "../../../actions/auth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { Header } = Layout;

class TopNav extends Component {
  handleMenuClick=(e)=> {
    if (e.key==3){
      this.props.logout();
      localStorage.removeItem("selectedKey");
      localStorage.setItem("selectedKey", ["1"]);
    }
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" icon={""}>
          1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={""}>
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={""}>
          Logout
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className="topHeader" style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'white' }}>
        {/* <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
        <div className="ant-pro-global-header ant-pro-global-header-layout-side" >
        <div className="antd-pro-components-global-header-index-right">
          <div className="antd-pro-components-global-header-index-action 
          antd-pro-components-global-header-index-search antd-pro-components-header-search-index-headerSearch">
            <span role="img" aria-label="search" className="anticon anticon-search" style={{cursor: 'pointer'}}>
              <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em"
               height="1em" fill="currentColor" aria-hidden="true">
                 <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></svg></span><div className="ant-select antd-pro-components-header-search-index-input ant-select-auto-complete ant-select-single ant-select-customize-input ant-select-show-search" style={{height: '28px', marginTop: '-6px'}}><div className="ant-select-selector"><span className="ant-select-selection-search">
                   </span></div></div></div>
            
                  <span className="antd-pro-components-global-header-index-action 
                  antd-pro-components-notice-icon-index-noticeButton ant-dropdown-trigger">
                    <span className="antd-pro-components-notice-icon-index-badge ant-badge">
                      <span role="img" aria-label="bell" className="anticon anticon-bell 
                      antd-pro-components-notice-icon-index-icon"><svg viewBox="64 64 896 896" 
                      focusable="false"  data-icon="bell" width="1em" height="1em" fill="currentColor" 
                      aria-hidden="true">
                        <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" /></svg>
                        </span>
                        <sup data-show="true" className="ant-scroll-number ant-badge-count ant-badge-multiple-words notispan" title={11} style={{boxShadow: 'none'}}><span className="ant-scroll-number-only" style={{transform: 'translateY(-1100%)'}}><p className="ant-scroll-number-only-unit">0</p><p className="ant-scroll-number-only-unit">1</p><p className="ant-scroll-number-only-unit">2</p><p className="ant-scroll-number-only-unit">3</p><p className="ant-scroll-number-only-unit">4</p><p className="ant-scroll-number-only-unit">5</p><p className="ant-scroll-number-only-unit">6</p><p className="ant-scroll-number-only-unit">7</p><p className="ant-scroll-number-only-unit">8</p><p className="ant-scroll-number-only-unit">9</p><p className="ant-scroll-number-only-unit">0</p><p className="ant-scroll-number-only-unit current">1</p><p className="ant-scroll-number-only-unit">2</p><p className="ant-scroll-number-only-unit">3</p><p className="ant-scroll-number-only-unit">4</p><p className="ant-scroll-number-only-unit">5</p><p className="ant-scroll-number-only-unit">6</p><p className="ant-scroll-number-only-unit">7</p><p className="ant-scroll-number-only-unit">8</p><p className="ant-scroll-number-only-unit">9</p><p className="ant-scroll-number-only-unit">0</p><p className="ant-scroll-number-only-unit">1</p><p className="ant-scroll-number-only-unit">2</p><p className="ant-scroll-number-only-unit">3</p><p className="ant-scroll-number-only-unit">4</p><p className="ant-scroll-number-only-unit">5</p><p className="ant-scroll-number-only-unit">6</p><p className="ant-scroll-number-only-unit">7</p><p className="ant-scroll-number-only-unit">8</p><p className="ant-scroll-number-only-unit">9</p></span><span className="ant-scroll-number-only" style={{transform: 'translateY(-1100%)'}}><p className="ant-scroll-number-only-unit">0</p><p className="ant-scroll-number-only-unit">1</p><p className="ant-scroll-number-only-unit">2</p><p className="ant-scroll-number-only-unit">3</p><p className="ant-scroll-number-only-unit">4</p><p className="ant-scroll-number-only-unit">5</p><p className="ant-scroll-number-only-unit">6</p><p className="ant-scroll-number-only-unit">7</p><p className="ant-scroll-number-only-unit">8</p><p className="ant-scroll-number-only-unit">9</p><p className="ant-scroll-number-only-unit">0</p><p className="ant-scroll-number-only-unit current">1</p><p className="ant-scroll-number-only-unit">2</p><p className="ant-scroll-number-only-unit">3</p><p className="ant-scroll-number-only-unit">4</p><p className="ant-scroll-number-only-unit">5</p><p className="ant-scroll-number-only-unit">6</p><p className="ant-scroll-number-only-unit">7</p><p className="ant-scroll-number-only-unit">8</p><p className="ant-scroll-number-only-unit">9</p><p className="ant-scroll-number-only-unit">0</p><p className="ant-scroll-number-only-unit">1</p><p className="ant-scroll-number-only-unit">2</p><p className="ant-scroll-number-only-unit">3</p><p className="ant-scroll-number-only-unit">4</p><p className="ant-scroll-number-only-unit">5</p><p className="ant-scroll-number-only-unit">6</p><p className="ant-scroll-number-only-unit">7</p><p className="ant-scroll-number-only-unit">8</p><p className="ant-scroll-number-only-unit">9</p></span></sup></span></span>
                        
                        <Dropdown overlay={menu} trigger={['click']}>
                        
                        <span className="antd-pro-components-global-header-index-action 
                        antd-pro-components-global-header-index-account ant-dropdown-trigger">
                          <span className="ant-avatar antd-pro-components-global-header-index-avatar 
                          ant-avatar-sm ant-avatar-circle ant-avatar-image">
                            <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                             alt="avatar" />
                          </span>
                       
                       
                         
                          <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          <span className="antd-pro-components-global-header-index-name anticon">User</span>
                           </Link>
                        </span>
                        </Dropdown>
                        <span className="ant-dropdown-trigger antd-pro-components-global-header-index-action" 
                        style={{cursor: 'pointer', padding: '12px', display: 'inline-flex', alignItems: 'center',
                         justifyContent: 'center', fontSize: '18px', verticalAlign: 'middle'}}></span></div>
        </div> 
        
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps, { logout })(TopNav);