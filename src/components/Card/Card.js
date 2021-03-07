import React from "react";
import styled, {css} from "styled-components";

const Card = ({item}) => {
    return <>
        <Header>
            <Title>{item.title}</Title>
            <Price>{item.price}</Price>
        </Header>
        <Description><Img image={item.url}></Img>{item.description}</Description>
    </>
}

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
`

const Img = styled.div`
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 15px;

    ${props => props.image && css`
        background-image: url(${props.image});
        background-size: cover;
        background-repeat: no-repeat; 
        background-position: center;
    `}
`

const Price = styled.div`
    font-size: 20px;
    margin-left: auto;
    margin-right: 40px
`

const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
`

const Description = styled.div`
`

export default Card;