import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idReciever: null,
  amount: null,
  pin: null,
  notes: null,
};

const transfer = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    continueAction: (state ,action) =>{
        return{
          ...initialState,
          ...action.payload
     }
    }
  }})
  // extraReducers: (build) => {
  //   build.addCase(loginAction.fulfilled, (state, { payload }) => {
  //       state.id = payload.idUser;
  //       state.token = payload.token;
  //   });
  // },

export const { continueAction } = transfer.actions;

export default transfer.reducer;

