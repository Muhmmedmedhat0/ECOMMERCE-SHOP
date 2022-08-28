import { configureStore } from '@reduxjs/toolkit';
import products from './slices/products';
import cart from './slices/cart';
import user from './slices/user';
export default configureStore({
  reducer: {
    products,
    cart,
    user,
  },
});
