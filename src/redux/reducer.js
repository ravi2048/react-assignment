import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
        // dont add if already exists
        let flag = false;
        if(state.length) {
          state.map(item => {
            if(item.id === action.payload.id) {
              flag = true;
            }
          })
        }

        if(!flag) {
          state.push(action.payload);
        }
    },
    removeItem: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer