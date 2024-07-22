import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfProduct: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSongModalInfo: (state, actions) => {
      state.songModalInfo = actions.payload;
    },
    openModalSong: (state) => {
      state.showModalSong = true;
    },
    closeModalSong: (state) => {
      state.showModalSong = false;
    },
  },
});

export const {
  setSongModalInfo,
  openModalSong,
  closeModalSong,
} = appSlice.actions;

export default appSlice.reducer;
