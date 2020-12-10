import React from 'react';
import { Form, Input, Button, Descriptions } from 'antd';
import styles from './index.less';

export default function Search() {
  return (
    <div className={styles.search_container}>
      <Form layout="inline">
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
      <section className={styles.header}>
        <Descriptions title="ModelID: datasets" column={2}>
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </section>
      <section className={styles.content}>
        <h4 className={styles.title}>
          <Descriptions>
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          </Descriptions>
        </h4>
        <Descriptions clsssName={styles.item} column={2}>
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        </Descriptions>
      </section>
    </div>
  );
}
