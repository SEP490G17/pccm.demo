"use client";
import { Card, Flex, Typography } from "antd";
import React from "react";
import pickerball from "@/public/images/pickleball-icon.png";
import Image from "next/image";
export default function ContentSidebar() {
  return (
    <div>
      <Card className="side-card h-60">
        <Flex vertical={true} gap="large">
          <Typography.Title level={4}>
            Today <br /> 10 orders
          </Typography.Title>
          <Typography.Title level={4}>
            This Month <br /> 220 orders
          </Typography.Title>
        </Flex>
        <Image
          src={pickerball}
          style={{
            position: "absolute",
            bottom: -20,
            right: -20,
            height: "180px",
            width: "auto",
          }}
          alt={""}
        />
      </Card>
    </div>
  );
}
