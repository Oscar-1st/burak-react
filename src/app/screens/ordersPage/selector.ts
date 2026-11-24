import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePopularDishes = createSelector(
  selectOrdersPage,
  (ordersPage) => ordersPage.pausedOrders
);

export const retrieveNewDishes = createSelector(
  selectOrdersPage,
  (ordersPage) => ordersPage.processOrders
);

export const retrieveTopUsers = createSelector(
  selectOrdersPage,
  (ordersPage) => ordersPage.finishedOrders
);