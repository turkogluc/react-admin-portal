import React from 'react';
import { Dropdown, Menu, Popconfirm } from 'antd';
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function useActionMenu({ selectedRow, updateEntityPath }) {
  const history = useHistory();

  const handleMenuClick = action => {
    if (action.key === 'edit') {
      const updatePath = '/' + updateEntityPath + '/' + selectedRow.id;
      history.push(updatePath);
    }
  };

  const handleSingleDelete = () => {
    console.log('handleSingleDelete, selected:', selectedRow);
  };

  const actionMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">
        <EditOutlined />
        Update
      </Menu.Item>
      <Menu.Item key="delete">
        <Popconfirm
          title="Sure to delete?"
          placement="left"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          onConfirm={handleSingleDelete}
        >
          <DeleteOutlined type="delete" />
          Delete
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  const actionColumnView = (
    <span>
      <Dropdown overlay={actionMenu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          Actions <DownOutlined />
        </a>
      </Dropdown>
    </span>
  );

  return [actionColumnView];
}

export default useActionMenu;
