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

// exporting reducers to be used in store.ts
export const { setPopularDishes, setNewDishes, setTopUsers } = homePageSlice.actions;
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;