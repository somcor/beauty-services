import React from "react";
import styled from "styled-components";

const Info = () => {
    return <>
        <Title>Дарим 500 руб. на первое посещение!</Title>
        <Description>Потому что уверены, что Вы захотите вернуться ещё! Кодовое слово «8 марта».</Description>
    </>
}

const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
    margin-bottom: 20px;
`

const Description = styled.div`
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
`

export default Info;