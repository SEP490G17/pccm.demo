"use client";
import { Avatar, Button, Flex, List, Typography } from "antd";
import React from "react";

const data = [
  {
    name: "Nguyễn Văn A",
    orderTime: 1,
  },
  {
    name: "Nguyễn Văn B",
    orderTime: 2,
  },
  {
    name: "Nguyễn Văn C",
    orderTime: 3,
  },
  {
    name: "Nguyễn Văn D",
    orderTime: 4,
  },
  {
    name: "Nguyễn Văn E",
    orderTime: 5,
  },
  {
    name: "Nguyễn Văn F",
    orderTime: 6,
  },
];

export default function OrderActivity() {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} className="primary--color">
          Recent Activity
        </Typography.Title>
        <Button type="link" className="gray-color">
          View All
        </Button>
      </Flex>
      <List
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
              }
              title={<a>{user.name}</a>}
              description={`Đã đặt sân ${index + 1} cụm ${
                Math.floor(index / 2) + 1
              }`}
            ></List.Item.Meta>
            <span>{Math.floor(Math.random() * (40 - 1) + 1)} phút trước</span>
          </List.Item>
        )}
      />
    </Flex>
  );
}
