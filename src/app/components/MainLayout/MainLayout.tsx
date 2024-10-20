"use client";
import { Flex, Layout, Spin } from "antd";
import React, { useEffect, useState } from "react";
import LayoutSidebar from "../Sidebar/LayoutSidebar";
import LayoutHeader from "../Header/LayoutHeader";
import { Content } from "antd/es/layout/layout";
import { store, StoreContext } from "@/libs/stores/store";
import { LoadingOutlined } from "@ant-design/icons";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return (
        <Flex className="h-[100vh] w-[100vw]" align="center" justify="center">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48, color: "#00423D" }}
                spin
              />
            }
          />
        </Flex>
    );
  }
  return (
    <StoreContext.Provider value={store}>
        <Layout>
          <LayoutSidebar />
          <Layout>
            <LayoutHeader />
            <Content className="layout__content">{children}</Content>
          </Layout>
        </Layout>
    </StoreContext.Provider>
  );
}
