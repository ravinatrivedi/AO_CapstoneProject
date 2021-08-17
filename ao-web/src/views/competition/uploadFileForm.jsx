import {Button, Form, Icon, Input, Upload} from "antd";
import React,{Component} from "react";

const Item = Form.Item;

class UploadFileForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form layout="vertical">
        <Item label="Competition Name">
          {
            getFieldDecorator('name', {
              initialValue: '',
              rules: [
                {required: true, message: 'name is required'}
              ]
            })(
              <Input type="text" placeholder="please enter name" />
            )
          }
        </Item>
        <Item label="Upload competition csv file">
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
        </Item>
      </Form>)
  }
}

export default Form.create()(UploadFileForm)