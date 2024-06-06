import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const Routes = [
  {
    name: "Home",
    component: Home,
    isAuthRequired: false,
  },
  {
    name: "Login",
    component: Login,
    isAuthRequired: true,
  },
  {
    name: "Cart",
    component: Cart,
    isAuthRequired: true,
  },
  {
    name: "Resturents",
    component: ProductList,
    isAuthRequired: true,
  },
  {
    name: "Details",
    component: ProductDetails,
    isAuthRequired:true,
  }
]

export default Routes;