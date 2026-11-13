// why do we need to use selector? => because we need to get data from store to use it in our component, so we need to use selector to get data from store
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes
  // why HmePage not homePage? => because we need to use the same name as in the state, so we need to use HomePage instead of homePage
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
