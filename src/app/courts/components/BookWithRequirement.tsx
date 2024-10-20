import { Card, DatePicker, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function BookWithRequirement() {
  return (
    <Card>
      <Typography.Title level={4}>Đặt sân theo yêu cầu</Typography.Title>
      <Form>
        <Form.Item>
          <Input className="h-10" placeholder="Họ và tên" />
        </Form.Item>
        <Form.Item>
          <Input className="h-10" placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Input className="h-10" placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item>
          <DatePicker  showTime={{ format: 'HH:mm'}}  className="h-10 w-full"/>
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            min={1}
            className="h-10"
            placeholder="Số giờ thuê"
          />
        </Form.Item>
        <Form.Item>
          <TextArea rows={4} placeholder="Ghi chú" />
        </Form.Item>
      </Form>
    </Card>
  );
}
