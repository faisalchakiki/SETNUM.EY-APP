import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, callback }) => {
    try {
      const { data }= await axios.post("https://68xkph-8888.preview.csb.app/auth/login",{
        email,
        password,
      });
      callback();
      // console.log(data.results)
      return data.results;
    } catch (err) {
      // console.log(err);
      callback(err)
      throw err;
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/registerAsync",
  async ({ email, password,firstName,lastName,phoneNumber,callbackRegister }) => {
    try {
      const { data }= await axios.post("https://68xkph-8888.preview.csb.app/auth/register", {
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      });
      callbackRegister();
      return data[0]
    } catch (err) {
      console.log(err);
      callbackRegister(err)
      throw err;
    }
  }
);