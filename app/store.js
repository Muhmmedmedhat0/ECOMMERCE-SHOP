import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';
export default configureStore({
  reducer: {
    products,
    cart,
  },
});
