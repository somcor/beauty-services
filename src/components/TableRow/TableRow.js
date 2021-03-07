import React from "react";
import styled, {css} from "styled-components";

const TableRow = ({item, onClick}) => {
    return <Row onClick={onClick}>
        <Img image={item.url}></Img>
        <Title>{item.title}</Title>
        <Price>{item.price}</Price>
    </Row>
}

const Row = styled.div`
    border-bottom: 1px solid black;
    padding: 15px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Img = styled.div`
    flex: 0 0 50px;
    height: 50px;
    margin-right: 15px;

    ${props => props.image && css`
        background-image: url(${props.image});
        background-size: cover;
        background-repeat: no-repeat; 
        background-position: center;

    `}
`

const Price = styled.div`
    margin-left: 15px;
    flex: 0 0 80px;
    text-align: right;
`

const Title = styled.div`
    margin-right: auto;
`

export default TableRow;