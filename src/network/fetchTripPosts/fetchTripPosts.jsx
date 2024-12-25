import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "../../assets/data/Data.json";

export const fetchTripPosts = createAsyncThunk(
  "tripPosts/fetchTripPosts",
  async () => {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data.tripPosts;
  }
);
