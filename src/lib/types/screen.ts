import { Member } from "./member";
import { Product } from "./product";

/* REACT APP STATE =>1)(current use) Screen component based type integration / 2) Target oriented type integration*/ 
export interface AppRootState {
  homePage: HomePageState; // declaring homepage screen component type
}

/* HOMEPAGE SC => define homepage state type */
export interface HomePageState { 
  popularDIshes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/* PRODUCTS PAGE SC => define productspage state type */
/* ORDERS PAGE SC => define orderspage state type */