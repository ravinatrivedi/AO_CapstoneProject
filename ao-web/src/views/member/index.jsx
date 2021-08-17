import React, {Component} from 'react';
import {Card, Select, Input, Button, Icon, Table, message, Divider, Modal} from 'antd';
import {reqGetAllMembers,reqMemberById} from "../../api";

import LinkButton from '../../components/link-button';
import UploadFileForm from "../member/uploadFileForm";

const Option = Select.Option;

class Member extends Component {

  state = {
    members: [],
    loading: false,
    isUploadFileModalShow: false

  };

  getAllMembers = async () => {
    //display loading
    this.setState(preState => ({loading: true}));
    //send ajax
    const members = await reqGetAllMembers();
    // hide loading
    this.setState(preState => ({loading: false}));
    this.setState(preState => ({members}));
  };


  //cancel for upload file Modal
  onCancelUploadFileModal = () => {
    this.setState({isUploadFileModalShow: false})
  };

  //ok for upload file Modal
  onCreateUploadFileModal = () => {

  };

  //initialize table columns
  initColumns = () => {
    this.columns = [
      {
        title: 'Member#',
        dataIndex: 'acNum',
        render: text => <a>{text}</a>,
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
      },
      {
        title: 'DOB',
        dataIndex: 'dob',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
      },
      {
        title: 'Athlete Club',
        dataIndex: 'clubName',
      },
      {
        title: 'Role',
        dataIndex: 'role',
      },
      {
        title: 'Action',
        width: 200,
        render: (member) =>
          <span>
            <LinkButton onClick={async () => {
              //await reqMemberById(member.acNum)
              this.props.history.push('/member/detail/' + member.acNum);
            }
            }>View</LinkButton>
            <Divider type="vertical"/>
            <LinkButton onClick={() => {

            }
            }>Update</LinkButton>
            <Divider type="vertical"/>
            <LinkButton onClick={() => {
              this.props.history.push('/member/detail/' + member.acNum);
            }
            }>Analyze</LinkButton>
          </span>
      },
    ]
  };

  componentWillMount() {
    this.initColumns();
  }

  componentDidMount() {
    this.getAllMembers();
  }

  render() {

    const {members, isUploadFileModalShow} = this.state;

    const title = (
      <span>
        <Select
          style={{width: 200}}
        >
          <Option value="productName">search by Name</Option>
          <Option value="productDesc">search by Member#</Option>
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
        this.setState(preState => ({isUploadFileModalShow: true}))
      }}>
        <Icon type="plus"/>
        Upload New Members
      </Button>
    );

    return (
      <div className="member">
        <Card title={title} extra={extra}>
          <Table
            bordered={true}
            columns={this.columns}
            dataSource={members}
          />
          <Modal
            visible={isUploadFileModalShow}
            title="Upload File"
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

export default Member;