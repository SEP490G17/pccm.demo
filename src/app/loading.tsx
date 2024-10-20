import { Flex, Spin } from "antd";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function loading() {
  return (
    <Flex
      className="h-[100vh] w-[100vw] absolute top-0 left-0 right-0 bottom-0 bg-[#f0efea]"
      align="center"
      justify="center"
    >
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 48, color: "#00423D" }} spin />
        }
      />
    </Flex>
  );
}
