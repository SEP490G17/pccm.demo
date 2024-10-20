"use client";
import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";
import React from "react";

export default function StaffList() {
  return (
    <Flex align="center" justify="space-between" gap="large" className="staff-list">
      <Flex vertical={true} gap="small" className="top-staff">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} className="primary--color">
            Top Staff
          </Typography.Title>
          <Button type="link" className="gray--color">
            View all
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 5,
                style: {
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                },
              }}
              size="large"
            >
              <Tooltip title="Staff 1" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 2" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 3" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 4" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 5" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 6" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 7" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical={true}>
              <Typography.Text type="secondary">
                1200 hours of court rental
              </Typography.Text>
              <Typography.Text type="secondary">10 staff</Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical={true} gap="small" className="featured-staff">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} className="primary--color">
            Featured Staff
          </Typography.Title>
          <Button type="link" className="gray--color">
            View all
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 5,
                style: {
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                },
              }}
              size="large"
            >
              <Tooltip title="Staff 1" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 2" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 3" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 4" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 5" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 6" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
              <Tooltip title="Staff 7" placement="top">
                <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical={true}>
              <Typography.Text type="secondary">
                1500 hours of court rental
              </Typography.Text>
              <Typography.Text type="secondary">13 staff</Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
