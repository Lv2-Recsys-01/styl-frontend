import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const PAGE_SIZE = 10;

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

const GridItem = ({ children, index }) => {
    return <S.GridItem key={index}>{children}</S.GridItem>;
};

function ImageGridView() {
    const arr = new Array(PAGE_SIZE + 1).fill(0);
    const gridViewWrapperBottomDomRef = useRef(null);
    const currentPage = useRef(0);
    const totalPage = useRef(100);
    const [outfits, setOutfits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        totalPage.current = 100;
    });

    useEffect(() => {
        let observer;

        if (gridViewWrapperBottomDomRef.current) {
            const options = {
                root: null, // viewport
                rootMargin: "0px 0px 10px 0px",
                threshold: [0.25],
            };
            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isLoading && currentPage.current < totalPage.current) {
                        console.log("should fetch data");
                        setIsLoading(true);

                        // TODO: fetch data

                        setIsLoading(false);
                    }
                });
            }, options);

            if (gridViewWrapperBottomDomRef.current) {
                observer.observe(gridViewWrapperBottomDomRef.current);
            }
        }
        return () => {
            observer.observe(gridViewWrapperBottomDomRef.current);
        };
    }, []);

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
            <div ref={gridViewWrapperBottomDomRef} />
        </S.GridWrapper>
    );
}

export default ImageGridView;
