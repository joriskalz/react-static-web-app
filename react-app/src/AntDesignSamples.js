import React from 'react';
import { Breadcrumb, Calendar, Tabs, Table, Timeline } from 'antd';
import { Tag, Divider } from 'antd';

import './App.css';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const AntDesignSamples = () => (
  <div className="content-container">
    <div className="content-title-group not-found">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/table">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/table">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="title">Table</h2>



      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Calendar" key="1">
          <Calendar onPanelChange={onPanelChange} />
        </TabPane>
        <TabPane tab="Table" key="2">
          <Table dataSource={dataSource} columns={columns} />;
        </TabPane>
        <TabPane tab="Tags" key="4">
          <Divider orientation="left">Presets</Divider>
          <div>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </div>
          <Divider orientation="left">Custom</Divider>
          <div>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#2db7f5">#2db7f5</Tag>
            <Tag color="#87d068">#87d068</Tag>
            <Tag color="#108ee9">#108ee9</Tag>
          </div>
        </TabPane>
        <TabPane tab="Timeline" key="3">
          <Timeline>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="red">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </TabPane>
      </Tabs>,
    </div>
  </div>
);

export default AntDesignSamples;
