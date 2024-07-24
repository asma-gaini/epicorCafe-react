import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
};

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, actions) => {
      const { categoryId, codeNumber, value, price, nameFood, imageFood } =
        actions.payload;
      const cartCopy = { ...state.cartItems };
      const currentValue = cartCopy[codeNumber]?.[0] || 0;
      const nextValue = currentValue + value;
      if (nextValue === 0) {
        delete cartCopy[codeNumber];
      } else {
        cartCopy[codeNumber] = [
          nextValue,
          categoryId,
          price,
          nameFood,
          imageFood,
        ];
      }

      state.cartItems = cartCopy;
    },
  },
});

export const { setCartItems } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
