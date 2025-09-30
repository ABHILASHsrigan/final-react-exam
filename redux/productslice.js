
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = 'http://localhost:3001/products';
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});
export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
});


export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, updatedProduct }) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
  return response.data;
});


export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id; 
});




const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
  
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

 
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

   
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});


export default productSlice.reducer;
