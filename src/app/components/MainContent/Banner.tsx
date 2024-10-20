"use client";
import { Button, Card, Flex, Typography } from "antd";
import React from "react";

export default function Banner() {
  return (
    <Card className="h-60">
      <Flex vertical gap='30px'>
        <Flex vertical align="flex-start">
          <Typography.Title level={2} >
            Create and sell products
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Create and sell products
          </Typography.Text>
        </Flex>
        <Flex gap='large' >
            <Button type="primary" size="large">Explore More</Button>
            <Button size="large">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
}
