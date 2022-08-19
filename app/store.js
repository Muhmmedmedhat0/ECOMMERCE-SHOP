import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productsSlice';

export default configureStore({
  reducer: {
    products,
  },
});
