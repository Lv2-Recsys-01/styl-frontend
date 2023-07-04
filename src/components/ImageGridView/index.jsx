import React from "react";
import { styled } from "styled-components";

const S = {
    GridWrapper: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    `,
    GridItem: styled.div`
        position: relative;
        width: 100%;
        padding-top: 162%; /* 황금비 1.618의 근사값. 가로 대비 세로의 높이 */
        overflow: hidden;
        border-radius: 12px;
        border: 2px solid red;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `,
};

function getRandomNumber() {
    const min = Math.ceil(300 / 100); // 3
    const max = Math.floor(600 / 100); // 6
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber * 100;
}

function GridItem({ children, key }) {
    return <S.GridItem key={key}>{children}</S.GridItem>;
}

function ImageGridView() {
    const arr = new Array(7).fill(0);

    return (
        <S.GridWrapper>
            {arr.map((_, idx) => {
                const randomNumWidth = getRandomNumber();
                const randomNumHeight = getRandomNumber();
                return (
                    <GridItem key={idx}>
                        <img src={`https://placehold.co/${randomNumWidth}x${randomNumHeight}`} alt={idx} />
                    </GridItem>
                );
            })}
        </S.GridWrapper>
    );
}

export default ImageGridView;