import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector} from "react-redux";
// why do we use useDispatch? => because we need to dispatch actions to the store, so we can update the state in the store
import { Dispatch} from "@reduxjs/toolkit";
// why do we need to use Dispatch? => because we need to define the type of dispatch, so we can use it in the component
import { createSelector } from "reselect";
import { setPopularDishes} from "./slice";
import { retrievePopularDishes, retrieveNewDishes, retrieveTopUsers } from "./selector";
import { Product } from "../../../lib/types/product";

/* RREDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  });

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({popularDishes})
);
  

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);


  useEffect(() => {
  
  }, []);

  console.log("popularDishes:", popularDishes);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
