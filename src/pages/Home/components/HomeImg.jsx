import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

class HomeImg extends React.Component {
  state = {
    data: 240,
  };

  render() {
    return (
      <Row gutter={20} justify="center" align="top">
        <Col span={4}>
          <Card
            hoverable
            style={{ width: this.state.data }}
            cover={
              <img
                alt="example"
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=152637735,3689600067&fm=26&gp=0.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: this.state.data }}
            cover={
              <img
                alt="example"
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=152637735,3689600067&fm=26&gp=0.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: this.state.data }}
            cover={
              <img
                alt="example"
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=152637735,3689600067&fm=26&gp=0.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default HomeImg;
