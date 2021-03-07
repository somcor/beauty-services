import React from "react";
import styled from "styled-components";

const Select = ({data = [], label, onChange}) => {
    return <Container>
        <Label>{label}</Label>
        <Dropdown onChange={onChange}>
            {data.map(item => {
                return <option key={item.id} value={item.value}>{item.title}</option>
            })}
        </Dropdown>
    </Container>
}

const Container = styled.div`
  margin: 0 5px;
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 0;
`

const Label = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
`

const Dropdown = styled.select`
  flex: 1 1 100%;
  border-radius: 0;
  border: 1px solid black;
  padding: 10px 7px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`

export default Select;