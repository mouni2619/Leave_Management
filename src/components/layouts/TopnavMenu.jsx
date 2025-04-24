import React, { useState } from 'react';
import { Input, Avatar, Badge } from 'antd';
import {
  ApartmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  StopOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';

// Images
import Profile from '../../assets/images/avatar/profile.png';

/**
 * TopNav Menu
 */
export default function TopNavMenu() {
  // State
  const [selectedMenu, setSelectedMenu] = useState(1);

  const menus = [
    {
      key: 1,
      icon: <ApartmentOutlined />,
      name: 'Organization chart',
    },
    {
      key: 2,
      icon: <CalendarOutlined />,
      name: 'Calendar',
    },
    {
      key: 3,
      icon: <TeamOutlined />,
      name: 'Employees',
    },
    {
      key: 4,
      icon: <StopOutlined />,
      name: 'Absence & Leave',
    },
  ];

  function menuClick(key) {
    setSelectedMenu(key);
  }

  return (
    <div className="bg-white  w-100">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4 ps-4">
          {menus.map((menu) => {
            const { key = '', name = '', icon = '' } = menu;

            const className =
              key === selectedMenu
                ? 'side-tab-selected text-primary'
                : 'text-muted';

            return (
              <div
                className={`fw-semibold fs-6 p-2 cursor-pointer ${className}`}
                onClick={() => menuClick(key)}
              >
                {icon}
                <span className="ms-2">{name}</span>
              </div>
            );
          })}
        </div>

        <div className="d-flex align-items-center gap-3 pe-4">
          <Input
            placeholder="Search"
            size="large"
            prefix={<SearchOutlined />}
            suffix={<span className="text-muted">⌘ + /</span>}
            className="rounded px-2 bg-secondary"
          />
          <Badge dot>
            <BellOutlined className="fs-3" />
          </Badge>
          <Avatar shape="square" src={Profile} size="large" />
        </div>
      </div>
    </div>
  );
}
