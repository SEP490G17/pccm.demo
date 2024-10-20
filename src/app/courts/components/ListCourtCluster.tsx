"use client"
import { listCourtMock } from '@/public/mocks/court.mocks';
import { Button, Flex, Image, List, Popconfirm } from 'antd'

const text = 'Bạn có muốn xóa cụm sân này không?';
const description = 'Xóa cụm sân';

const ListCourtCluster: React.FC = () => {
    const listCourt = listCourtMock;
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                pageSize: 2,
            }}
            dataSource={listCourt}
            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    extra={
                        <Image.PreviewGroup>
                            <Image
                                width={272}
                                alt="logo"
                                src={item.image}
                            />
                        </Image.PreviewGroup>
                    }
                >
                    <List.Item.Meta
                        title={<a style={{ fontSize: "20px", fontWeight: "bold" }} href={item.href}>{item.title}</a>}
                        description={`Khu vực: ${item.location.thanhpho} - ${item.location.tinh}`}
                    />
                    <h1>Địa chỉ: {item.location.diachi}</h1>
                    <h1>Giá sân: 120.000 đ</h1>
                    <h1>Dịch vụ: {item.services.map((s) => s.name).join(', ')}</h1>
                    <h1>Giờ mở cửa: 6h-23h</h1>
                    <br />
                    <Flex wrap gap="small">
                        <Button>Sửa</Button>
                        <Popconfirm
                            placement="bottom"
                            title={text}
                            description={description}
                            okText="Có"
                            cancelText="Không"
                        >
                            <Button style={{ backgroundColor: "red", color: "white" }}>Xóa</Button>
                        </Popconfirm>
                    </Flex>
                </List.Item>
            )}
        />
    )
}

export default () => <ListCourtCluster />