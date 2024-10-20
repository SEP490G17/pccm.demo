import { MessageOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";
import React from "react";
import { Header } from "antd/es/layout/layout";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";

export default function LayoutHeader() {
  return (
    <>
      <Header className="layout__header overflow-hidden whitespace-nowrap">
        <Flex align="center" justify="space-between" gap="large">
          <h3 className="text-2xl text-gray-500 font-medium">Welcome back, Owner</h3>
          <Flex align="center" gap="3rem">
            <Search placeholder="Search Dashboard" allowClear />
            <Flex align="center" gap="10px">
              <MessageOutlined className="header__icon" />
              <NotificationOutlined />
              <Avatar icon={<UserOutlined />}/>
            </Flex>
          </Flex>
        </Flex>
      </Header>
    </>
  );
}
