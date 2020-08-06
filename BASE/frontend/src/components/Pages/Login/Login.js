import React, { Component, Fragment } from "react";
import { Form, Icon, Input, Button, Checkbox, Spin } from "antd";
import { Redirect } from "react-router-dom";
import "./Login.css";
import "antd/dist/antd.css";
import { login } from "../../../actions/auth";
import { connect } from "react-redux";

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  async handleSubmit(event) {
    this.props.login(event.username, event.Password);
  }

  render() {
    if (this.props.isSplash) {
      return <WelcomeSplash />;
    }
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-login100">
        <div className="wrap-login100 p-t-30 p-b-50">
          <span className="login100-form-title p-b-41">Login</span>
          <Form
            onFinish={(event) => this.handleSubmit(event)}
            onFinishFailed={this.onFinishFailed}
          >
            <FormItem
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                size="large"
                // prefix={<UserOutlined style={{ fontSize: 13 }} />}
                placeholder="Username"
              />
            </FormItem>

            <FormItem
              className="Inp"
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                // prefix={<LockOutlined style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
              />
            </FormItem>
            <div style={{ position: "relative", height: 100 }}>
              <Fragment>
                <div style={{ position: "absolute", top: 0, width: "100%" }}>
                  {/* {this.props.credentials ? null : (
                    <p
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      Please Give Correct User Credentials
                    </p>
                  )} */}
                </div>
                <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </div>
              </Fragment>
            </div>
            {/* <Checkbox>Remember me</Checkbox> */}
            {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
            {/* Or <a href="">register now!</a> */}
            {/* style={{ paddingTop: 34 }} */}
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  credentials: state.auth.credentials,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { login })(Login);
// export default Login