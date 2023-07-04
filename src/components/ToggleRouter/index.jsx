import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const S = {
    Wrapper: styled.div`
        display: flex;
        width: 100%;

        padding: 0 32px;
    `,
    RouteBtn: styled.button`
        width: 50%;
        margin: 0 8px;
    `,
};

function ToggleRouter() {
    const navigate = useNavigate();

    const onRouteBtnClick = (route) => {
        navigate(`/${route}`);
    };

    return (
        <S.Wrapper>
            <S.RouteBtn className="route-btn" onClick={() => onRouteBtnClick("journey")}>
                JOURNEY
            </S.RouteBtn>
            <S.RouteBtn className="route-btn" onClick={() => onRouteBtnClick("collections")}>
                My COLLECTIONS
            </S.RouteBtn>
        </S.Wrapper>
    );
}

export default ToggleRouter;
