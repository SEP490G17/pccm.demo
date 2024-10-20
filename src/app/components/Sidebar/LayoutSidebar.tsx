"use client";

import { Button, Flex, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa6";

import Sider from "antd/es/layout/Sider";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./style.scss";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function LayoutSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const router = useRouter();

  const pathname = usePathname();
  const menuList = [
    {
      key: "1",
      icon: <Link href={'/'}><UserOutlined /></Link>,
      label: "Dashboard",
      path: "/",
    },
    {
      key: "2",
      icon: <CarryOutOutlined />,
      label: "My Orders",
      path: "/orders",
    },
    {
      key: "3",
      icon: <ProfileOutlined />,
      label: "Staffs",
      path: "/staffs",
    },
    {
      key: "4",
      icon: <BookOutlined />,
      label: "Courts",
      path: "/courts",
    },

    {
      key: "5",
      icon: <SettingOutlined />,
      label: "Settings",
      path: "/settings",
    },
    {
      key: "6",
      icon: <LogoutOutlined />,
      label: "Logout",
      path: "/logout",
    },
  ];
  useEffect(() => {
    setSelectedKey(`${[...menuList].reverse().find((l) => pathname.includes(l.path))?.key}`);
  }, [pathname]);
  return (
    <>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        className="sidebar"
        collapsed={collapsed}
      >
        <Flex align="center" justify="center">
          <div className="sidebar__logo">
            <FaLeaf />
          </div>
        </Flex>
        <Menu
          mode="inline"
          className="sidebar__menu"
          items={menuList.map((item) => ({
            ...item,
            onClick: () => router.push(item.path),
          }))}
          selectedKeys={[`${selectedKey}`]}
        />

        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="sidebar__trigger-btn"
        />
      </Sider>
    </>
  );
}
