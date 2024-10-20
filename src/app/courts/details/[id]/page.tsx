"use client";
import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import san1 from "@/public/images/san1.png";
import san2 from "@/public/images/san2.png";
import san3 from "@/public/images/san3.png";
import san4 from "@/public/images/san4.png";

import "../style.scss";
import { useStore } from "@/libs/stores/store";
import { ICourt } from "@/libs/models/court.model";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import ListCourtImage from "../../components/ListCourtImage";
import DetailsCourtCard from "../../components/DetailsCourtCard";
import ProductList from "@/app/components/MainContent/ProductList";
import BookWithRequirement from "../../components/BookWithRequirement";
import ScheduleModel from "../../components/ScheduleModel";
export default function page() {
  const images = [
    { src: san1.src },
    { src: san2.src },
    { src: san3.src },
    { src: san4.src },
  ];
  const { courtStore } = useStore();
  const [court, setCourt] = useState<ICourt>();

  useEffect(() => {
    if (courtStore.listCourt.length === 0) {
      courtStore.loadListCourt();
    }
    setCourt((prev) => courtStore.listCourt[0]);
  }, []);

  return (
    <>
      <Typography.Title level={3}>{court?.title}</Typography.Title>

      <Typography.Paragraph
        className="flex items-center gap-2 text-md h-5"
        style={{ marginBottom: "4px" }}
      >
        <FaLocationDot />
        {court?.location.diachi +
          ", " +
          court?.location.thanhpho +
          ", " +
          court?.location.tinh}
      </Typography.Paragraph>
      <Typography.Paragraph className="flex items-center gap-1 text-md">
        Đánh giá: 4.5/5 <FaStar className="text-yellow-500" />
      </Typography.Paragraph>
      <div className="w-full">
        <Row gutter={[24, 1]}>
          <Col span={16}>
            <ListCourtImage images={images} />
          </Col>
          <Col span={8}>
            <DetailsCourtCard court={court!} />
          </Col>
        </Row>
      </div>
      <div className="w-full mt-2 mb-6">
        <Row gutter={[24, 1]}>
          <Col span={6}>
            <BookWithRequirement />
          </Col>
          <Col span={18}>
            <ScheduleModel />
          </Col>
        </Row>
      </div>
      <ProductList title="Sân thể thao gần đây" itemsPerPage={4} />
    </>
  );
}
