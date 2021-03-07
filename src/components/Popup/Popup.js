import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {
    IndexPageActions
} from "../../reducers/indexPageSlice";

const Popup = ({children}) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(IndexPageActions.showPopup(false));
    }

    useEffect(() => {
        document.getElementById('popup').addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }, [dispatch]);

    return <Modal onClick={handleClose}>
            <Content>
                <Close onClick={handleClose}>&times;</Close>
                <Container id={"popup"}>
                    {children}
                </Container>
            </Content>
    </Modal>
}

const Modal = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`

const Content = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    width: 500px;
    position: relative;
`

const Container = styled.div`
`

const Close = styled.div`
    color: #aaa;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 35px;
    line-height: 18px;
    font-weight: bold;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 100;
`

export default Popup;