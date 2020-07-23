import {lazy} from 'react';
const HOME_PATH = '/';
const LOGIN_PATH  = '/login';
const REGISTERATION_PAGE  = '/register';
const USERHOME_PATH = '/home';
const PRODUCT_PATH = '/product/:productId/:productName';
const CART_PATH = '/cart';
const SEARCH_PATH = '/search';
export const COMMON_ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('../../screens/home.screen')),
  },

  {
    path: LOGIN_PATH,
    title: 'Login',
    screen: lazy(() => import('../../screens/login.screen')),
  },
  {
    path: REGISTERATION_PAGE,
    title: 'Register',
    screen: lazy(() => import('../../screens/registration.screen')),
  },
  {
    path: PRODUCT_PATH,
    title: 'Product-overview',
    screen: lazy(() => import('../../screens/product.screen')),
  },
  {
    path: CART_PATH,
    title: 'Product-overview',
    screen: lazy(() => import('../../screens/cart.screen')),
  },
  {
    path: SEARCH_PATH,
    title: 'Product-overview',
    screen: lazy(() => import('../../screens/search.screen')),
  },
];
