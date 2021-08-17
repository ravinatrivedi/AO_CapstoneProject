import React, {Component} from 'react';

import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col, Table, Card
} from 'antd';

const {Option} = Select;

class Ranking extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    const data = [
      {
        member: '6839927',
        firstname: 'Jermaila',
        lastname:'Bruce',
        club: 'Toronto Race Walkers',
        competition: 'AO INDOOR CHAMPIONSHIP SERIES MEET 1',
        date: '2018-03-28',
        mark: '10.01',
        wind: '1.3'
      },
      {
        member: '7474345',
        firstname: 'Jermaila',
        lastname:'Bruce',
        club: 'Toronto Race Walkers',
        competition: 'AO INDOOR CHAMPIONSHIP SERIES MEET 1',
        date: '2019-02-28',
        mark: '10.19',
        wind: '1.3'
      },
      {
        member: '3245332',
        firstname: 'Jermaila',
        lastname:'Bruce',
        club: 'Toronto Race Walkers',
        competition: 'AO INDOOR CHAMPIONSHIP SERIES MEET 1',
        date: '2019-04-28',
        mark: '10.09',
        wind: '1.3'
      },
      {
        member: '4435432',
        firstname: 'Jermaila',
        lastname:'Bruce',
        club: 'Toronto Race Walkers',
        competition: 'AO INDOOR CHAMPIONSHIP SERIES MEET 1',
        date: '2019-03-27',
        mark: '11.09',
        wind: '1.3'

      },
    ];

    const columns = [
      {
        title: 'Member#',
        dataIndex: 'member',
        render: text => <a>{text}</a>,
      },
      {
        title: 'First Name',
        dataIndex: 'firstname',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastname',
      },
      {
        title: 'Athlete Club',
        dataIndex: 'club',
      },
      {
        title: 'Competition Name',
        dataIndex: 'competition',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        //sorter: (a, b) => a.date - b.date,
      },
      {
        title: 'Mark',
        dataIndex: 'mark',
      },
      {
        title: 'Wind',
        dataIndex: 'wind',
      },
    ];


    return (
      <div className="ranking">
        <Card>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>


            <Form.Item label="Type">
              {getFieldDecorator('radio-button3', {
                rules: [
                  {required: true, message: 'Please select a type!'},
                ],
              })(
                <Radio.Group>
                  <Radio.Button value="indoor">Indoor</Radio.Button>
                  <Radio.Button value="outdoor">Outdoor</Radio.Button>
                </Radio.Group>,
              )}
            </Form.Item>

            <Form.Item label="Age Group">
              {getFieldDecorator('radio-button1', {
                rules: [
                  {required: true, message: 'Please select an age group!'},
                ],
              })(
                <Radio.Group>
                  <Radio.Button value="a">U14</Radio.Button>
                  <Radio.Button value="b">U16</Radio.Button>
                  <Radio.Button value="c">U18</Radio.Button>
                  <Radio.Button value="d">U20</Radio.Button>
                  <Radio.Button value="e">OPEN</Radio.Button>
                </Radio.Group>,
              )}
            </Form.Item>


            <Form.Item label="Gender">
              {getFieldDecorator('radio-button2', {
                rules: [
                  {required: true, message: 'Please select a gender!'},
                ],
              })(
                <Radio.Group>
                  <Radio.Button value="f">Girls/Women</Radio.Button>
                  <Radio.Button value="m">Boys/Men</Radio.Button>
                </Radio.Group>,
              )}
            </Form.Item>


            <Form.Item label="Event name" hasFeedback>
              {getFieldDecorator('select1', {
                rules: [{required: true, message: 'Please select an event!'}],
              })(
                <Select placeholder="Please select an event">
                  <Option value="1">60m</Option>
                  <Option value="2">200m</Option>
                  <Option value="3">1200m</Option>
                  <Option value="4">60mH</Option>
                  <Option value="5">800m RW</Option>
                  <Option value="6">HJ</Option>
                  <Option value="7">PV</Option>
                  <Option value="8">SP</Option>
                </Select>,
              )}
            </Form.Item>

            <Form.Item label="Year" hasFeedback>
              {getFieldDecorator('select2')(
                <Select placeholder="Please select a year">
                  <Option value="2020">2020</Option>
                  <Option value="2019">2019</Option>
                </Select>,
              )}
            </Form.Item>

            {/*<Form.Item label="Year">*/}
            {/*  {getFieldDecorator('radio-group')(*/}
            {/*    <Radio.Group>*/}
            {/*      <Radio value="2020">2020</Radio>*/}
            {/*      <Radio value="2019">2019</Radio>*/}
            {/*      <Radio value="2018">2018</Radio>*/}
            {/*    </Radio.Group>,*/}
            {/*  )}*/}
            {/*</Form.Item>*/}

            <Form.Item wrapperCol={{span: 12, offset: 6}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Table
            bordered={true}
            columns={columns}
            dataSource={data}
          />
        </Card>
      </div>
    );
  }
}

export default Form.create()(Ranking);
