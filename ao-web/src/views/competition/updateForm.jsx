import React, {Component} from 'react';
import {Form,Input} from "antd";
import PropTypes from 'prop-types';

const Item = Form.Item;

class UpdateForm extends Component {
  static propTypes = {
    setForm: PropTypes.func.isRequired,
    competition: PropTypes.object,
  };

  componentWillMount() {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {name,startDay,endDay} = this.props.competition;

    return (
      <div>
        <Form>
          <Item>
            {
              getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  {required: true, message: 'name is required'}
                ]
              })(
                <Input type="text" placeholder="please enter name" />
              )
            }
          </Item>
          <Item>
            {
              getFieldDecorator('startDay', {
                initialValue: startDay,
                rules: [
                  {required: true, message: 'startDay is required'}
                ]
              })(
                <Input type="text" placeholder="please enter startDay" />
              )
            }
          </Item>
          <Item>
            {
              getFieldDecorator('endDay', {
                initialValue: endDay,
                rules: [
                  {required: true, message: 'endDay is required'}
                ]
              })(
                <Input type="text" placeholder="please enter endDay" />
              )
            }
          </Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(UpdateForm);