import React, { Component } from 'react';
import UserTable from './UserTable';
import moment from 'moment';
import QueueAnim from 'rc-queue-anim';

import {
  Form,
  Button,
  Card,
  Row,
  Col,
  Input,
  InputNumber,
  DatePicker,
  Tag,
  Icon,
  Tooltip
} from 'antd';
import logo from '../africa.svg';

export class Userform extends Component {
  state = {
    show: true,
    showTable: false,
    tags: [],
    inputVisible: false,
    inputValue: '',

    //Real
    firstName: '',
    lastName: '',
    birthday: '',
    age: '',
    hobby: [],
    userDetails: [
      {
        firstName: '',
        lastName: '',
        birthday: '',
        age: '',
        hobby: []
      }
    ]
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      userDetails: [
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          age: this.state.age,
          hobby: this.state.hobby,
          birthday: this.state.birthday
        }
      ]
    });
    // console.log(this.state.userDetails);
    this.setState({
      show: !this.state.show,
      showTable: !this.state.showTable
    });
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    // console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    // console.log(tags);
    this.setState({ hobby: tags });

    this.setState({
      tags,
      inputVisible: false,
      inputValue: ''
    });
  };

  saveInputRef = input => (this.input = input);

  changeDate = (date, dateString) => {
    // console.log(date, dateString);
    let birthYear = new Date(dateString);
    if (!isNaN(birthYear)) {
      var userAge = new Date().getFullYear() - birthYear.getFullYear();
    }
    this.setState({ age: userAge });
    this.setState({ birthday: dateString });
  };
  disabledDate = current => {
    // Can not select days before today and today
    return current > moment().endOf('day');
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card bordered={false} className='cardAfri' style={{ width: 400 }}>
              <QueueAnim>
                <div key='demo1'>
                  <img alt='logo' className='logosect' src={logo} />
                </div>
                <div key='demo2'>
                  <h2 className='textColor'>Enye Challenge</h2>
                </div>
              </QueueAnim>

              <Form onSubmit={this.handleSubmit} className='ch-form'>
                <QueueAnim delay={500}>
                  {this.state.show
                    ? [
                        <div key='demo1'>
                          <Form.Item>
                            <label htmlFor='firstName'>First Name</label>
                            <Input
                              className='formInput'
                              id='firstName'
                              placeholder='First Name'
                              value={this.state.firstName}
                              onChange={event =>
                                this.setState({ firstName: event.target.value })
                              }
                            />
                          </Form.Item>
                        </div>,
                        <div key='demo2'>
                          <Form.Item>
                            <label htmlFor='lastName'>Last Name</label>
                            <Input
                              className='formInput'
                              id='lastName'
                              placeholder='Last Name'
                              value={this.state.lastName}
                              onChange={event =>
                                this.setState({ lastName: event.target.value })
                              }
                            />
                          </Form.Item>
                        </div>,
                        <div key='demo3'>
                          <Row gutter={[8]}>
                            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                              <Form.Item>
                                <label htmlFor='birthday'>Birthday</label>
                                <br />
                                <DatePicker
                                  id='birthday'
                                  format='YYYY MMMM DD'
                                  disabledDate={this.disabledDate}
                                  showToday={false}
                                  onChange={this.changeDate}
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                              <Form.Item className='ageSect'>
                                <label htmlFor='age'>Age</label>
                                <br />
                                <InputNumber
                                  className='formInput'
                                  id='age'
                                  block
                                  disabled={true}
                                  value={this.state.age}
                                  onChange={event =>
                                    this.setState({ age: event })
                                  }
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>,
                        <div key='demo4'>
                          <Form.Item>
                            <label>Hobbies</label>
                            <br />
                            {tags.map((tag, index) => {
                              const isLongTag = tag.length > 20;
                              const tagElem = (
                                <Tag
                                  key={tag}
                                  closable={index !== 0}
                                  onClose={() => this.handleClose(tag)}
                                >
                                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </Tag>
                              );
                              return isLongTag ? (
                                <Tooltip title={tag} key={tag}>
                                  {tagElem}
                                </Tooltip>
                              ) : (
                                tagElem
                              );
                            })}
                            {inputVisible && (
                              <Input
                                ref={this.saveInputRef}
                                type='text'
                                size='small'
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                              />
                            )}
                            {!inputVisible && (
                              <Tag
                                onClick={this.showInput}
                                style={{
                                  background: '#fff',
                                  borderStyle: 'dashed'
                                }}
                              >
                                <Icon type='plus' /> New Tag
                              </Tag>
                            )}
                          </Form.Item>
                        </div>,
                        <div key='demo5'>
                          <Form.Item>
                            <Button
                              htmlType='submit'
                              className='submitBtn'
                              block
                              type='primary'
                              size={'large'}
                            >
                              Send Details
                            </Button>
                          </Form.Item>
                        </div>
                      ]
                    : null}
                </QueueAnim>
              </Form>

              <QueueAnim delay={1500}>
                {this.state.showTable
                  ? [
                      <div key='demo1'>
                        <UserTable
                          showForm={this.state.show}
                          userdetails={this.state.userDetails}
                        />
                      </div>
                    ]
                  : null}
              </QueueAnim>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Userform;
