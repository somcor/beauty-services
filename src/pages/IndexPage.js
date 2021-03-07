import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TableRow from "../components/TableRow/TableRow";
import Pagination from "../components/Pagination/Pagination";
import Filters from "../components/Filters/Filters";
import Popup from "../components/Popup/Popup";
import Card from "../components/Card/Card";
import Info from "../components/Info/Info";
import {
    getData,
    selectTableList,
    IndexPageActions,
    selectTableSettings,
    selectFiltered,
    selectPopup
} from "../reducers/indexPageSlice";
import styled from "styled-components";

const IndexPage = () => {
    const dispatch = useDispatch();
    const popup = useSelector(selectPopup);
    const filtered = useSelector(selectFiltered);
    const tableList = useSelector(selectTableList);
    const tableSettings = useSelector(selectTableSettings);
    const [item, setItem] = useState(null);

    useEffect(() => {
        dispatch(getData());

        window.addEventListener("scroll", () => {
            if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
                setItem(null); 
                dispatch(IndexPageActions.showPopup(true)); 
            }
        })
    }, [dispatch]);

    useEffect(() => {
        dispatch(IndexPageActions.setTableList());   
    }, [dispatch, tableSettings.paging, filtered]);

    const handleClick = item => {
        setItem(item); 
        dispatch(IndexPageActions.showPopup(true)); 
    }

    return <Container>
        <PageTitle>Услуги организации</PageTitle>
        <Filters />
        {tableList.length ? tableList.map(item => {
            return <TableRow 
                key={item.id} 
                item={item} 
                onClick={() => handleClick(item)}
            />
        }) : <>Нет результатов</>}
        <Pagination />

        {popup && <Popup>
            {item 
            ? <Card item={item} /> 
            : <Info />
            }   
        </Popup>}
    </Container>
}

const Container = styled.div`
  margin-top: 30px;
  flex: 0 0 500px;
`

const PageTitle = styled.div`
  color: black;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
`

export default IndexPage;