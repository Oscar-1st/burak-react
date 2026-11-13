import { createSlice } from '@reduxjs/toolkit';
import { HomePageState } from '../../../lib/types/screen';

const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

// storing data from database to store via actions
const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: { // actions
    setPopularDishes(state, action) {
      state.popularDishes = action.payload;
    },
    setNewDishes(state, action) {
      state.newDishes = action.payload;
    },
    setTopUsers(state, action) {
      state.topUsers = action.payload;
    },
  },
});
// why do we export actions? => because we need to use these actions in the component to dispatch data to store
export const { setPopularDishes, setNewDishes, setTopUsers } = homePageSlice.actions;

// why do we export reducer? => because we need to import this reducer in store.ts to use it in store
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;