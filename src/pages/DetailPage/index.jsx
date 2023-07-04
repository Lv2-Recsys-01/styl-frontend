import React from "react";
import { Layout, Space } from "antd";
import "./index.css";
import { ArrowLeftOutlined, CloseOutlined, HeartOutlined, HeartFilled, ShareAltOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

function DetailHeader() {
    return (
        <div>
            <ArrowLeftOutlined />
            <CloseOutlined />
        </div>
    );
}

function DetailCodi() {
    return (
        <div>
            <img className="codi" src="sample_codi.png" alt="NoImg" />
            <p>
                <img className="logo" src="musinsa.png" alt="NoImg" />
                <ShareAltOutlined />
                <HeartOutlined />
                <HeartFilled />
            </p>
        </div>
    );
}

function SimilarItems() {
    return (
        <Space direction="horizontal" className="similar">
            <img src="sample_codi.png" alt="NoImg" />
            <img src="sample_codi.png" alt="NoImg" />
            <img width src="sample_codi.png" alt="NoImg" />
        </Space>
    );
}

function DetailPage() {
    return (
        <Space
            direction="vertical"
            style={{
                width: "100%",
            }}
            size={[0, 48]}
        >
            <Layout className="detail">
                <Header className="header">
                    <DetailHeader />
                </Header>
                <Content className="content">
                    <DetailCodi />
                </Content>
                <Footer className="footer">
                    <SimilarItems />
                </Footer>
            </Layout>
        </Space>
    );
}

export default DetailPage;
