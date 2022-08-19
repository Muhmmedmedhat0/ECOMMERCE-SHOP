import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// get products from server and store them in the store
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        category
          ? `http://localhost:8080/api/products?category=${category}`
          : 'http://localhost:8080/api/products'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// create slice for products
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
// export reducer
export default productsSlice.reducer;
