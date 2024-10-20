import { fetchWrapper } from "@/libs/api/fetchWrapper";
import { Card, Col, Row } from "antd";
async function fetchCourt() {
    const data = await fetchWrapper.get("api/getCourt")
} 

const AdminCard = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
}

export default AdminCard;