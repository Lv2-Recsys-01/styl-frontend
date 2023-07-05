import React from "react";
import Login from "../../components/Login/login";
import "./index.css";
import { Row, Col } from "antd";

function EntryBackground() {
    return (
        <div className="entry-background">
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <img src="sample_codi.png" />
                </Col>
                <Col span={12}>
                    <img src="sample_codi.png" />
                </Col>
                <Col span={12}>
                    <img src="sample_codi.png" />
                </Col>
                <Col span={12}>
                    <img src="sample_codi.png" />
                </Col>
                <Col span={12}>
                    <img src="sample_codi.png" />
                </Col>
                <Col span={12}>
                    <img src="sample_codi.png" />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12} />
                <Col span={12} />
            </Row>
        </div>
    );
}

function EntryPage() {
    return (
        <div>
            <EntryBackground />
            <Login />
        </div>
    );
}

export default EntryPage;
