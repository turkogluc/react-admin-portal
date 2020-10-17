import React from 'react';
import { Button, Col, Divider, Input, Popconfirm, Row } from 'antd';
import {
  DeleteOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

function Header({ addNewPath, hasSelected, handleSearch }) {
  const history = useHistory();

  const handleAddNew = () => {
    history.push('/' + addNewPath);
  };

  return (
    <>
      <Row>
        <Col>
          <Search
            placeholder="Search"
            onSearch={handleSearch}
            allowClear
            style={{ float: 'left', width: 350 }}
          />
        </Col>
        <Col flex="auto">
          <Button
            icon={<PlusOutlined />}
            type="primary"
            style={{ float: 'right' }}
            onClick={handleAddNew}
          >
            Add New
          </Button>

          <Button
            icon={<DeleteOutlined />}
            disabled={!hasSelected}
            style={{ float: 'right', marginRight: 12 }}
          >
            <Popconfirm
              title="Sure to delete?"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={() => {}}
            >
              Delete
            </Popconfirm>
          </Button>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default Header;
