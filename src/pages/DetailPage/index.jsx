import React from "react";
import { Layout, Space } from "antd";
import "./index.css";

const { Header, Footer, Content } = Layout;

function DetailHeader() {
    return <div>Header</div>;
}

function DetailCodi() {
    return (
        <div>
            <img src="sample_codi.png" alt="NoImg" />
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
