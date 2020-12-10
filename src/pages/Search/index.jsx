import React from 'react';
import { Form, Input, Button, Descriptions } from 'antd';
import { getSearch } from '@/services/home';
import styles from './index.less';

const headerModel = {
  Algorithm: '模型算法',
  StrongAudit: '强审计',
  StartTime: '开始时间',
  EndTime: '结束时间',
};
const contentHeaderModel = {
  MSPID: '发起方',
  OrgName: '组织者',
  todo: '标示',
};
const contentItemModel = {
  DataSetName: '数据集名称',
  DataSetHash: '数据集MT Hash',
  todo: '隐私求交发送',
  PsiResultHash: '隐私交集  Hash',
  todo0: '模型训练发送',
  ModelHash: '模型结果  Hash',
  Version: '客户端版本',
  SignOff: '签字确认',
};
export default class Search extends React.Component {
  state = {
    searchData: {},
  };

  getSearch = async (key) => {
    const data = await getSearch(key);
    this.setState({
      searchData: data,
    });
  };

  onFinish = (val) => {
    const { username } = val;
    this.getSearch(username);
  };

  render() {
    const { Participants } = this.state.searchData;
    return (
      <div className={styles.search_container}>
        <Form layout="inline" onFinish={this.onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入模型ID, 中间结果验证等' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
        {!Participants ? (
          ''
        ) : (
          <>
            <section className={styles.header}>
              <Descriptions title="ModelID: datasets" column={2}>
                {Object.keys(headerModel).map((item) => {
                  return (
                    <Descriptions.Item key={item} label={headerModel[item]}>
                      {this.state.searchData[item] === true ? '是' : this.state.searchData[item]}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </section>
            <section className={styles.content}>
              {Participants &&
                Participants.map((item) => {
                  return (
                    <>
                      <h4 className={styles.title} key={item}>
                        <Descriptions>
                          {Object.keys(contentHeaderModel).map((subItem) => {
                            return (
                              <Descriptions.Item key={subItem} label={contentHeaderModel[subItem]}>
                                {item[subItem]}
                              </Descriptions.Item>
                            );
                          })}
                        </Descriptions>
                      </h4>
                      <Descriptions clsssName={styles.item} column={2}>
                        {Object.keys(contentItemModel).map((subItem) => {
                          return (
                            <Descriptions.Item key={subItem} label={contentItemModel[subItem]}>
                              {item[subItem]}
                            </Descriptions.Item>
                          );
                        })}
                      </Descriptions>
                    </>
                  );
                })}
            </section>
          </>
        )}
      </div>
    );
  }
}
