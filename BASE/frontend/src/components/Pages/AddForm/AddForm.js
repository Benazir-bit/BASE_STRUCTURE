import React, { useState, Component } from 'react';
import MainLayout from '../../Layout/MainLayout'
import ContentTab from '../../Layout/ContentTab/ContentTab'
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    Upload,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Rate
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class AddForm extends Component {

    state = {
        tablist: [
            "Tab 1",
            "Tab 2"
        ],
        componentSize: 'default',
        setComponentSize: 'default'
    }
    normFile = e => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    onFormLayoutChange = ({ size }) => {
        this.state.setComponentSize(size);
    };

    render() {
        return (
            <MainLayout>
                <ContentTab tablist={this.state.tablist}>
                    <h1>Form</h1><br />
                    <Form
                        // onFinish={onFinish}
                        initialValues={{
                            rate: 3.5,
                        }}

                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 12,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: this.state.componentSize,
                        }}
                        onValuesChange={this.onFormLayoutChange}
                        size={this.state.componentSize}
                    >
                        <Form.Item label="Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Address">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                            name="upload"
                            label="Image"
                            valuePropName="fileList"
                            getValueFromEvent={this.normFile}
                            extra=""
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <UploadOutlined /> Click to upload
                        </Button>
                            </Upload>
                        </Form.Item>
                        <div style={{ textAlign: 'center' }}> <Button type="primary">Submit</Button></div>
                    </Form>
                </ContentTab>
            </MainLayout >
        );
    }
};

export default AddForm