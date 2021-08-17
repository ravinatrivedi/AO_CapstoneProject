import React, {Component} from 'react';
import {Form, List, Card,Icon} from "antd";

import {reqMemberById} from "../../api";
import LinkButton from "../../components/link-button";

const Item = Form.Item;

class Detail extends Component {
  state = {
    member: {}

  }

  getMember = async () => {
    const id = this.props.match.params.id;
    console.log(id)
    const member = await reqMemberById(id);
    console.log(member);
    this.setState(preState => ({member}));
  }

  componentDidMount() {
    this.getMember();
  }

  render() {

    const {id,firstName,lastName,dob,clubName,clubCode,gender,role,postalCode,phone,address,photo} = this.state.member;

    const title = (
      <span>
        <LinkButton onClick={() => this.props.history.goBack()}>
          <Icon type="arrow-left"/>
        </LinkButton>
        <span>Member Detail</span>
      </span>
    );

    return (
      <div>
        <Card title={title} className="detail">
          <List>
            <Item>
              <span className="detail-left">Member#:</span>
              <span>{id}</span>
            </Item>
            <Item>
              <span className="detail-left">First Name:</span>
              <span>{firstName}</span>
            </Item>
            <Item>
              <span className="detail-left">Last Name:</span>
              <span>{lastName}</span>
            </Item>
            <Item>
              <span className="detail-left">DOB:</span>
              <span>{dob}</span>
            </Item>
            <Item>
              <span className="detail-left">Club Name:</span>
              <span>{clubName}</span>
            </Item>
            <Item>
              <span className="detail-left">Club Code:</span>
              <span>{clubCode}</span>
            </Item>
            <Item>
              <span className="detail-left">Gender:</span>
              <span>{gender}</span>
            </Item>
            <Item>
              <span className="detail-left">Role:</span>
              <span>{role}</span>
            </Item>
            <Item>
              <span className="detail-left">Postal Code:</span>
              <span>{postalCode}</span>
            </Item>
            <Item>
              <span className="detail-left">Phone:</span>
              <span>{phone}</span>
            </Item>
            <Item>
              <span className="detail-left">Address:</span>
              <span>{address}</span>
            </Item>
            <Item>
              <span className="detail-left">Photo:</span>
              <span>{photo}</span>
            </Item>
          </List>
        </Card>
      </div>
    )
      ;
  }
}

export default Detail;