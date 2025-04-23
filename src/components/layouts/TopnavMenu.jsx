import React, { useState } from 'react';
import { Input, Avatar, Badge, Button } from 'antd';
import {
  ApartmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  StopOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';

export default function TopNavMenu() {
  // State
  const [selectedMenu,setSelectedMenu] = useState(4);

  const menus = [
    {
      key:1,
      icon: <ApartmentOutlined />,
      name: 'Organization chart',
    },
    {
      key:2,
      icon: <CalendarOutlined />,
      name: 'Calendar',
    },
    {
      key:3,
      icon: <TeamOutlined />,
      name: 'Employees',
    },
    {
      key:4,
      icon: <StopOutlined />,
      name: 'Absence & Leave',
    },
  ];

  function menuClick(key){
    setSelectedMenu(key)
  }

  return (
    <div className="bg-white  w-100">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4 ps-4">
          {menus.map((menu) => {
            const {key="", name = '', icon = '' } = menu;

            const className = key === selectedMenu ? "side-tab-selected text-primary" : "text-muted"

            return (
              <div className={`fw-semibold fs-6 p-2 cursor-pointer ${className}`} onClick={()=>menuClick(key)}>
                {icon}
                <span className='ms-2'>{name}</span>
              </div>
            );
          })}
        </div>

        <div className="d-flex align-items-center gap-3 pe-4">
          <Input
            placeholder="Search"
            size='large'
            prefix={<SearchOutlined />}
            suffix={<span className="text-muted">⌘ + /</span>}
            className="rounded px-2"
            style={{ width: 250, backgroundColor: '#f9f9f9' }}
          />
          <Badge dot>
            <BellOutlined style={{ fontSize: '18px' }} />
          </Badge>
          <Avatar
            src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740"
            size="large"
          />
        </div>
      </div>
    </div>
  );
}
