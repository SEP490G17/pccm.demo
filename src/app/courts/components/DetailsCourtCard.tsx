import { ICourt } from "@/libs/models/court.model";
import { Card, Col, Divider, Flex, Row, Table, Typography } from "antd";
import React from "react";
import { FaCar, FaMotorcycle } from "react-icons/fa6";
import { IoFastFoodSharp, IoRestaurant } from "react-icons/io5";
import { MdLocalDrink } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import { TiWiFi } from "react-icons/ti";
interface IProps {
  court: ICourt;
}
export default function DetailsCourtCard({ court }: IProps) {
  return (
    <Card className="details-card" style={{ minHeight: "94%" }}>
      <Flex>
        <Divider type="vertical" className="divider" />
        <Typography.Title level={4}>Thông tin sân</Typography.Title>
      </Flex>
      <table className="w-full details-table mb-8">
        <tbody>
          <tr>
            <td>Giờ mở cửa:</td>
            <td>6h-23h</td>
          </tr>
          <tr>
            <td>Số sân thi đấu:</td>
            <td>4 Sân</td>
          </tr>
          <tr>
            <td>Giá sân:</td>
            <td>120.000 đ</td>
          </tr>
          <tr>
            <td>Giá sân giờ vàng</td>
            <td>120.000 đ</td>
          </tr>
        </tbody>
      </table>
      <Card style={{ background: "#f3f3f3" }} className="details-service">
        <Flex>
          <Typography.Title level={5}>Dịch vụ tiện ích</Typography.Title>
        </Flex>
        <Row>
          <Col span={12} className="details-service-body">
            <Flex align="center" gap={6}>
              <TiWiFi /> Wifi
            </Flex>
            <Flex align="center" gap={6}>
              <FaMotorcycle /> Bãi đỗ xe máy
            </Flex>
            <Flex align="center" gap={6}>
              <MdLocalDrink /> Trà đá
            </Flex>
            <Flex align="center" gap={6}>
              <RiDrinks2Fill /> Nước uống
            </Flex>
          </Col>
          <Col span={12} className="details-service-body">
            <Flex align="center" gap={6}>
              <FaCar /> Bãi đỗ xe ô tô
            </Flex>
            <Flex align="center" gap={6}>
              <IoRestaurant /> Căng tin
            </Flex>
            <Flex align="center" gap={6}>
              <IoFastFoodSharp /> Đồ ăn
            </Flex>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
