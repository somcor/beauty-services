import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled, {css} from "styled-components";
import {
    selectFiltered,
    selectTableSettings,
    IndexPageActions
} from "../../reducers/indexPageSlice";

const Pagination = () => {
    const dispatch = useDispatch();
    const filtered = useSelector(selectFiltered);
    const tableSettings = useSelector(selectTableSettings);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const pagesNumber = Math.ceil(filtered.length / tableSettings.paging.pagesNumber);
        const pagesArr = [];

        for (let i = 0; i < pagesNumber; i++) {
            pagesArr.push({
                title: i + 1,
                active: i === 0 ? true : false
            });
        }

        setPages(pagesArr);
    }, [filtered, tableSettings.paging.pagesNumber]);

    const handlePageChange = number => {
        dispatch(IndexPageActions.setStartIndex(number));
        window.scrollTo(0, 0);
    }

    return <Pages>
        {pages.length > 1 && pages.map(item => <Page 
            onClick={() => handlePageChange(item.title)} 
            key={item.title} 
            active={item.title === ((Math.ceil(tableSettings.paging.startIndex / tableSettings.paging.pagesNumber) + 1))}
            >
            {item.title}
        </Page>)}
        <Total>Всего: {filtered.length}</Total>
    </Pages>;
}

const Pages = styled.div`
  display: flex;
  margin: 20px 0 50px 0;
  align-items: center;
`

const Page = styled.div`
    margin: 0 15px 0 0;
    flex: 0 0 35px;
    height: 35px;
    line-height: 33px;
    text-align: center;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 0px;
    font-size: 18px;

    ${props => props.active && css`
        font-weight: bold;
    `}
`

const Total = styled.div`
    margin-left: auto;
    margin-right: 0;
`

export default Pagination;