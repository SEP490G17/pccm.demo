import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import StaffList from "./StaffList";
import "./style.scss";

function MainContent() {
  return (
    <div className="flex-1">
      <Flex vertical gap="2.3rem">
        <Banner />
        <ProductList title="Best Court List" itemsPerPage={3} />
        <StaffList />
      </Flex>
    </div>
  );
}
export default MainContent;
