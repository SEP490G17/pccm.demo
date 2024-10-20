"use client";
import { useStore } from "@/libs/stores/store";
import { Button, Card, Flex, Image, Skeleton, Typography } from "antd";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";
interface IProps{
  title:string,
  itemsPerPage:number
}
function ProductList({title,itemsPerPage}:IProps) {
  const { courtStore } = useStore();
  const { listCourt, loadListCourt, loadingInitial } = courtStore;
  useEffect(() => {
    loadListCourt();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = listCourt.slice(startIndex, startIndex + itemsPerPage);

  const hasPrevious = currentPage > 1;
  const hasNext = startIndex + itemsPerPage < listCourt.length;

  const handleNext = () => {
    if (hasNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3}>{title}</Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <Flex align="center" gap="large">
        {loadingInitial ? (
          <>
            <Skeleton />
          </>
        ) : (
          <>
            <Button
              onClick={handlePrevious}
              type="primary"
              style={{
                borderRadius: "100%",
                width: "3.5rem",
                height: "3.5rem",
              }}
              disabled={!hasPrevious}
            >
              <IoIosArrowBack />
            </Button>
            {currentItems.map((c) => (
              <Card key={c.id} className="court-card" hoverable>
                <Image src={c.image} width={"300px"} height={"200px"} />
                <div className="text-start">
                  <Typography.Title
                    className="overflow-hidden whitespace-nowrap text-ellipsis max-w-full"
                    level={5}
                  >
                    {c.title}
                  </Typography.Title>
                  <Typography.Paragraph className="overflow-hidden w-full">
                    Khu vực: {c.location.thanhpho} - {c.location.tinh}
                  </Typography.Paragraph>
                  <Typography.Paragraph>Số sân: 3</Typography.Paragraph>
                </div>
                <Link href="/courts/details/1" shallow>
                  <Button className="w-full" type="primary">
                    Xem chi tiết
                  </Button>
                </Link>
              </Card>
            ))}
            {currentItems.length < itemsPerPage &&
              Array.from({ length: itemsPerPage - currentItems.length }).map(
                (_, index) => (
                  <div key={index} className="court-card empty-card"></div>
                )
              )}
            <Button
              onClick={handleNext}
              type="primary"
              style={{
                borderRadius: "100%",
                width: "3.5rem",
                height: "3.5rem",
              }}
              disabled={!hasNext}
            >
              <IoIosArrowForward className="text-2xl" />
            </Button>
          </>
        )}
      </Flex>
    </>
  );
}
export default observer(ProductList);
