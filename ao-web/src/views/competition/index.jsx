import React, {Component} from 'react';
import {Card, Select, Input, Button, Icon, Table, Modal, Divider,message} from 'antd';

import LinkButton from '../../components/link-button';
import {reqGetAllCompetitions} from "../../api";
import {reqUpdateCompetition} from "../../api";
import UploadFileForm from './uploadFileForm';
import UpdateForm from "./updateForm";

const Option = Select.Option;

class Competition extends Component {
  state = {
    loading: false,
    competitions: [],
    isUpdateModalShow: false,
    isUploadFileModalShow: false
  };

  //initialize table columns
  initColumns = () => {
    this.columns = [
      {
        title: 'ID',
        dataIndex: 'id', // table column name
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name', // table column name
        key: 'name',
      },
      {
        title: 'Start Day',
        dataIndex: 'startDay', // table column name
        key: 'startDay',
      },
      {
        title: 'End Day',
        dataIndex: 'endDay', // table column name
        key: 'endDay',
      },
      {
        title: 'Days',
        dataIndex: 'days', // table column name
        key: 'days',
      },
      {
        title: 'Action',
        key: 'action',
        width: 500,
        render: (competition) =>
          <span>
            <LinkButton onClick={() => {
              this.props.history.push({pathname: '/????', state: {competition}});
            }}>Members</LinkButton>
            <Divider type="vertical"/>
            <LinkButton onClick={() => {
              this.props.history.push({pathname: '/?????', state: {competition}});
            }}>Events</LinkButton>
            <Divider type="vertical"/>
            <LinkButton onClick={() => {
              this.competition = competition; //store competition in this, when we update we can get it
              this.setState({isUpdateModalShow: true})
            }}>Update</LinkButton>
          </span>
      },
    ];
  };


  //send ajax to get all competitions
  getCompetitions = async () => {
    //display loading
    this.setState({loading: true});
    //send ajax
    const competitions = await reqGetAllCompetitions();
    // hide loading
    this.setState({loading: false});
    this.setState({competitions})
  };

  //get different days
  //
  // getDays = (startDay,endDay) => {
  //   let dateStart = new Date(startDay);
  //   let dateEnd = new Date(endDay);
  //   let days = (dateEnd - dateStart) / (1000 * 60 * 60 * 24);
  //   return days;
  // };

  //cancel for update Modal
  onCancelUpdateModal = () => {
    //this.form.resetFields(); // Reset the specified fields' value(to initialValue) and status.
    this.setState({isUpdateModalShow: false})
  };

  //ok for update Modal
  onCreateUpdateModal = () => {
    this.form.validateFields( (err, values) => {
      console.log(222222)
        if (!err) {
          //get new value from update Modal
          const {name,startDay,endDay} = values;
          this.competition.name = name;
          this.competition.startDay = startDay;
          this.competition.endDay = endDay;
          console.log(this.competition);
          //send ajax

          this.setState({isUpdateModalShow: false});

          if (true) { //success
            this.getCompetitions();
            message.success('update succeed');
          } else {//fail
            message.error('update failed');
          }
        }
      }
    )

  };

  //cancel for upload file Modal
  onCancelUploadFileModal = () => {
    this.setState({isUploadFileModalShow: false})
  };

  //ok for upload file Modal
  onCreateUploadFileModal = () => {

  };

  componentWillMount() {
    this.initColumns();
  }

  componentDidMount() {
    this.getCompetitions();
  }

  render() {
    const {competitions, loading, isUpdateModalShow, isUploadFileModalShow} = this.state;


    const title = (
      <span>
        <Select
          style={{width: 200}}
        >
          <Option value="productName">search by name</Option>
          <Option value="productDesc">search by age</Option>
        </Select>
        <Input
          style={{width: 200, margin: '0 10px'}}
          placeholder="search"
        />
        <Button type="primary" onClick={() => {
        }}>SEARCH</Button>
      </span>
    );


    const extra = (
      <Button type="primary" onClick={() => {
        this.setState({isUploadFileModalShow: true})
      }}>
        <Icon type="plus"/>
        Add Competition
      </Button>
    );


    return (

      <div className="competition">
        <Card title={title} extra={extra}>
          <Table
            rowKey="_id"
            bordered={true}
            loading={loading}
            columns={this.columns}
            dataSource={competitions}
            pagination={{defaultPageSize: 6, showQuickJumper: true}}
          />
          <Modal
            visible={isUpdateModalShow}
            title="Update"
            okText="Create"
            onOk={this.onCreateUpdateModal}
            onCancel={this.onCancelUpdateModal}
          >
            <UpdateForm competition={this.competition} setForm={form => this.form = form}/>
          </Modal>
          <Modal
            visible={isUploadFileModalShow}
            title="Add Competition"
            okText="Create"
            onOk={this.onCreateUploadFileModal}
            onCancel={this.onCancelUploadFileModal}
          >
            <UploadFileForm/>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default Competition;