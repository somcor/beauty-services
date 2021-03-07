import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import {filterData} from '../utils';

export const indexPageSlice = createSlice({
  name: 'indexPage',
  initialState: {
    services: [],
    filtered: [],
    tableList: [],
    tableSettings: {
      paging: {
        startIndex: 0,
        pagesNumber: 20
      },
      filters: {
      }
    },
    popup: false,
    activeService: {}
  },
  reducers: {
    setData: (state, action) => {
      state.services = action.payload;
    },
    setFiltered: (state, action) => {
      state.filtered = filterData({
        data: state.services,
        filters: state.tableSettings.filters
      });
      state.tableSettings.paging.startIndex = 0;
    },
    setTableList: (state, action) => {
      const arr = cloneDeep(state.filtered);
      state.tableList = arr.splice(state.tableSettings.paging.startIndex, state.tableSettings.paging.pagesNumber);
    },
    setStartIndex: (state, action) => {
      state.tableSettings.paging.startIndex = (action.payload - 1) * state.tableSettings.paging.pagesNumber;
    },
    setFilterValue: (state, action) => {
      if (action.payload.value) {
        state.tableSettings.filters[action.payload.filter] = action.payload.value;
      } else {
        delete state.tableSettings.filters[action.payload.filter];
      }
    },
    showPopup: (state, action) => {
      state.popup = action.payload;
    },
    setActiveService: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const IndexPageActions = indexPageSlice.actions;

export const selectServices = state => state.indexPage.services;
export const selectFiltered = state => state.indexPage.filtered;
export const selectTableList = state => state.indexPage.tableList;
export const selectTableSettings = state => state.indexPage.tableSettings;
export const selectPopup = state => state.indexPage.popup;

export const getData = () => {
  return (dispatch) => {
    fetch('data.json')
    .then(response => response.json())
    .then(json => {
      dispatch(IndexPageActions.setData(json.services));
      dispatch(IndexPageActions.setFiltered(json.services));
      dispatch(IndexPageActions.setTableList(json.services));
    }).catch(error => {
      console.log("error", error);
    });
  }
};

export default indexPageSlice.reducer;
