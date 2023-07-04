import React from "react";
import { Layout, Space } from "antd";
import "./index.css";
import { ArrowLeftOutlined, CloseOutlined, HeartOutlined, HeartTwoTone, ShareAltOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;

function DetailHeader() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const goJourney = () => {
        navigate("/journey");
    };

    return (
        <>
            <ArrowLeftOutlined className="back" onClick={goBack} />
            <CloseOutlined className="close" onClick={goJourney} />
        </>
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
                <HeartTwoTone twoToneColor="red" />
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
