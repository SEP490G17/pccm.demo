import { Col, Image, Row } from "antd";
import React from "react";

interface IProps {
  images: {
    src: string;
  }[];
}

export default function ListCourtImage({ images }: IProps) {
  return (
        <Row gutter={[8, 12]}>
          <Image.PreviewGroup>
            <Col span={16}>
              <Image
                src={images[0].src}
                width="100%"
                height="405px"
                className="rounded-lg object-cover"
              />
            </Col>
            <Col span={8}>
              <Row gutter={[12, 6]}>
                <Col span={24}>
                  <Image
                    src={images[1].src}
                    width={"100%"}
                    height={"200px"}
                    className="rounded-lg object-cover"
                  />
                  {images.length > 3 ? (
                    <>
                      <div style={{ position: "relative" }}>
                        <Image
                          id="image-group-2"
                          src={images[2].src}
                          width={"100%"}
                          height={"200px"}
                          className="rounded-lg object-cover"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 5,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff",
                            fontSize: 18,
                          }}
                          className="rounded-lg cursor-pointer"
                          onClick={() => {
                            document.getElementById("image-group-2")?.click();
                          }}
                        >
                          Xem thêm {images.length - 3} ảnh
                        </div>
                      </div>
                      {images.slice(3, images.length).map((image) => (
                        <Image
                          height={0}
                          width={0}
                          key={image.src}
                          src={image.src}
                          hidden
                        />
                      ))}
                    </>
                  ) : (
                    <Image
                      src={images[2].src}
                      width={"100%"}
                      height={"200px"}
                      className="rounded-lg object-cover"
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </Image.PreviewGroup>
        </Row>
  );
}
