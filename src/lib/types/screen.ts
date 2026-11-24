import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/* REACT APP STATE =>1)(current use) Screen component based type integration / 2) Target oriented type integration*/ 
export interface AppRootState {
  homePage: HomePageState; 
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

/* HOMEPAGE SC => define homepage state type */
export interface HomePageState { 
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/* PRODUCTS PAGE SC => define productspage state type */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/* ORDERS PAGE SC => define orderspage state type */
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}