import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import Select from "../../components/Select/Select";
import {
    IndexPageActions,
    selectTableSettings,
} from "../../reducers/indexPageSlice";
import {genders} from "./genders";
import {age} from "./age";
import styled from "styled-components";

const Filters = () => {
    const dispatch = useDispatch();
    const tableSettings = useSelector(selectTableSettings);

    useEffect(() => {
        dispatch(IndexPageActions.setFiltered());   
    }, [dispatch, tableSettings.filters]);

    const handleSearchString = e => {
        dispatch(IndexPageActions.setFilterValue({
            filter: 'searchString',
            value: e.target.value
        }));
    }

    const handleGenderChange = e => {
        dispatch(IndexPageActions.setFilterValue({
            filter: 'gender',
            value: e.target.value
        }));
    }

    const handleAgeChange = e => {
        dispatch(IndexPageActions.setFilterValue({
            filter: 'age',
            value: e.target.value
        }));
    }

    return <Container>
        <Input placeholder={"Поиск по услуге"} type={"text"} onChange={handleSearchString} />
        <SelectsContainer>
            <Select
                data={genders}
                onChange={handleGenderChange}
                label={'Выберите пол'}
            />
            <Select
                data={age}
                onChange={handleAgeChange}
                label={'Выберите возраст'}
            />
        </SelectsContainer>
    </Container>;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
`

const SelectsContainer = styled.div`
  flex: 1 1 100%;
  flex-wrap: no-wrap;
  display: flex;
  margin: 0 -5px;
`

const Input = styled.input`
  box-sizing: border-box;
  flex: 0 0 100%;
  border-radius: 0;
  border: 1px solid black;
  padding: 10px 10px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 5px;
`

export default Filters;