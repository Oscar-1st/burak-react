import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectProductPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
  selectProductPage,
  (productsPage) => productsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  selectProductPage,
  (productsPage) => productsPage.chosenProduct
);

export const retrieveProducts = createSelector(
  selectProductPage,
  (productsPage) => productsPage.products
);


