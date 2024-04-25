import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      //in vanilla redux - we can not mutate the original state ;

      //const state = [...state.items];
      //state.push(action.payload);
      //return state;


      //in redux toolkit(RTK) - we have to mutate the original state .
      // RTK behind the scenes use immerJs library to do the same thing what vanilla redux is doing .

      state.items.push(action.payload);
    },

    removeItems: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      state.items.length = 0;

      //return []
    },
  },
});

console.log(cartSlice);

//{
//     name: 'cart',
//     reducer: [Function: reducer],
//     actions: {
//       addItem: [Function: addAction],
//       removeItem: [Function: removeAction],
//       clearCart: [Function: clearAction]
//     }
//   }

export const { addItem, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
