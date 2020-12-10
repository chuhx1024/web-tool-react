import React from 'react';
import { Table } from 'antd';

export default class HomeTable extends React.Component {
  state = {
    a: 'xianm',
  };

  render() {
    const dataSource = [
      {
        key: '1',
        DataSetPath: '胡彦斌',
        MerkleTreeRootHash: 32,
      },
      {
        key: '2',
        DataSetPath: '胡彦祖',
        MerkleTreeRootHash: 42,
      },
    ];

    const columns = [
      {
        title: '数据集',
        dataIndex: 'DataSetPath',
        key: 'DataSetPath',
      },
      {
        title: '默克尔树根哈希',
        dataIndex: 'MerkleTreeRootHash',
        key: 'MerkleTreeRootHash',
      },
    ];
    return (
      <div>
        {this.state.a}
        <h3>本地数据集</h3>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    );
  }
}
