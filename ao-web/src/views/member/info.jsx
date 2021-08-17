import React, {Component} from 'react';

import {Tabs, Card, Icon,Descriptions, Badge, Table,Select} from 'antd';
import LinkButton from "../../components/link-button";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class Info extends Component {

  render () {

    const title = (
      <span>
        <LinkButton onClick={() => this.props.history.goBack()}>
          <Icon type="arrow-left"/>
        </LinkButton>
        <span>Member Detail</span>
      </span>
    );

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];



    const data = [
      {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
      },
    ];



    return (
      <Card title={title}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Personal Information" key="1">


          <Descriptions title="Member Info"  bordered>
            <Descriptions.Item label="CA#">1234537</Descriptions.Item>
            <Descriptions.Item label="Name">John Bruce</Descriptions.Item>
            <Descriptions.Item label="Gender">Male</Descriptions.Item>
            <Descriptions.Item label="Club Code">WEDRT</Descriptions.Item>
            <Descriptions.Item label="Club Name" span={2}>Toronto Race Walkers</Descriptions.Item>

            <Descriptions.Item label="DOB" >1980 - 09 - 09</Descriptions.Item>
            <Descriptions.Item label="Role" >OPEN</Descriptions.Item>
            <Descriptions.Item label="Phone">
              647-985-76436
            </Descriptions.Item>
            <Descriptions.Item label="Postal Code">M3HR5T</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>156 Borough Dr, Scarborough</Descriptions.Item>
            <Descriptions.Item label="Note">
              2 x World (Continental) Cup winner
              <br />
              2 x IAAF World Relays Silver medallist
              <br />
              1 x World U18 Championships Silver medallist
              <br />
              12 x Diamond League meeting winner
            </Descriptions.Item>
          </Descriptions>,


        </TabPane>
        <TabPane tab="Personal Bests" key="2">


          <div>

            <Table
              columns={columns}
              dataSource={data}
              bordered
            />

          </div>



        </TabPane>
        <TabPane tab="Progression" key="3">


  <Select placeholder="Please select a event" style={{width: 200}}>
    <Select.Option value="china">200 Meters Outdoor</Select.Option>
    <Select.Option value="usa">200 Meters Indoor</Select.Option>
    <Select.Option value="usa">100 Meters Indoor</Select.Option>
  </Select>

          <Table
            columns={columns}
            dataSource={data}
            bordered
          />



        </TabPane>
        <TabPane tab="Results" key="4">
          <Table
            columns={columns}
            dataSource={data}
            bordered
          />

        </TabPane>
      </Tabs>
      </Card>
    )
  }
}

