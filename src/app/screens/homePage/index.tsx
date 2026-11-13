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
  // Selector: Store => Data( selector gets data from store)

  useEffect(() => {
    // Bakcend server datat request => Data
    const result = [
      {
        _id: "6ad600a63d60cbc8992e085f",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Chicken",
        productPrice: 12,
        productLeftCount: 10,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "chicken",
        productImages: [
          "uploads/products/55496805-a0fd-4597-9f15-31733ae92a66.jpeg",
        ],
        productViews: 0,
        createdAt: "2026-10-19T11:36:06.916Z",
        updatedAt: "2026-11-04T10:46:49.967Z",
        __v: 0,
      },
      {
        _id: "6ad111bb71a0a8cdf0100f31",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Kebab",
        productPrice: 14,
        productLeftCount: 75,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "kebab",
        productImages: [
          "uploads/products/d5492c61-747b-49a7-b013-f0132dcccb04.png",
        ],
        productViews: 0,
        createdAt: "2026-10-15T17:47:39.685Z",
        updatedAt: "2026-11-04T10:46:47.907Z",
        __v: 0,
      },
    ];
    // Slice: Data => Store( slice puts data to store) why? => because we need to use this data in other components, so we need to put this data to store to use it in other components
    //@ts-ignore
    setPopularDishes(result);
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
