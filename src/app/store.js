import { configureStore } from '@reduxjs/toolkit';
import indexPageReducer from '../reducers/indexPageSlice';

export default configureStore({
  reducer: {
    indexPage: indexPageReducer,
  },
});
