import React from 'react';
import { Table } from 'antd';
import { getModel } from '@/services/home';

export default class HomeTable extends React.Component {
  state = {
    a: 'xianm',
    tableData: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    // const {data: {DataSets}} = await getModel()
    const { DataSets } = await getModel();
    this.setState({ tableData: DataSets });
  };

  render() {
    const dataSource = this.state.tableData;

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
        <Table dataSource={dataSource} columns={columns} rowKey="DataSetPath" />;
      </div>
    );
  }
}
