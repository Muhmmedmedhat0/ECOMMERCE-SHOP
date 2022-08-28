import { configureStore } from '@reduxjs/toolkit';
import products from './slices/products';
import cart from './slices/cart';
export default configureStore({
  reducer: {
    products,
    cart,
  },
});
