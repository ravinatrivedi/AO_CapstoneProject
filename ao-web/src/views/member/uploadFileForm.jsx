import {Button, Form, Icon, Upload} from "antd";
import React,{Component} from "react";

class UploadFileForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="Upload members CSV file">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload"/> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
      </Form>)
  }
}

export default Form.create()(UploadFileForm)