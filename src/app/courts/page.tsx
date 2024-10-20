"use client"
import { Button, Flex } from "antd";
import ListCourtCluster from "./components/ListCourtCluster";
import React, { useState } from "react";
import FormCreateCourtCluster from "./components/FormCreateCourtCluster";

export default function CourtManagement() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Flex gap="middle" vertical>
      <Flex gap="middle" justify="flex-end">
        <Button type="primary" size="large" onClick={showModal}>Thêm cụm sân</Button>
      </Flex>

      <ListCourtCluster></ListCourtCluster>
      <FormCreateCourtCluster visible={visible} onClose={handleClose} ></FormCreateCourtCluster>
    </Flex>
  );
}
