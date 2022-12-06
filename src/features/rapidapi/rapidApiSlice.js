import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://apidojo-booking-v1.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "39c6162b6cmsh95679bf6bc16fc9p19c912jsne032326789bc",
    "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
  },
};

const initialState = {
  data: [],
  searchResult: [],
  savedItems: [],
  // savedItems: JSON.parse(AsyncStorage.getItem("saved")) || [],
  loading: false,
  error: null,
};

export const Hotels = createAsyncThunk("hotels/fetchHotels", async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/locations/auto-complete?text=indonesia&languagecode=en-us`,
      options
    );
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
});

// export const getDataApiForSearchbar = createAsyncThunk(
//   "api/getDataApiForSearchbar",
//   async (
//     arrivalDate,
//     departureDate,
//     roomQty,
//     guestQty,
//     childrenQty,
//     destId
//   ) => {
//     try {
//       const response = await fetch(
//         `${baseUrl}/properties/list?offset=0&arrival_date=${arrivalDate}&departure_date=${departureDate}&room_qty=${roomQty}&guest_qty=${guestQty}&children_qty=${childrenQty}&dest_ids=${destId}&search_type=city&price_filter_currencycode=IDR&languagecode=id&order_by=popularity&travel_purpose=leisure`,
//         options
//       );
//       const data = await response.json();
//       console.log("json : ", data);
//       return FormDataEvent;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );

export const rapidApiSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.savedItems.unshift(action.payload);
      AsyncStorage.setItem("saved", JSON.stringify(state.savedItems));
    },

    removeItems: (state, action) => {
      state.savedItems = state.savedItems.filter(
        (item) => item.name !== action.payload.name
      );
      AsyncStorage.setItem("saved", JSON.stringify(state.savedItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Hotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(Hotels.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(Hotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // .addCase(getDataApiForSearchbar.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getDataApiForSearchbar.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.searchResult = action.payload;
    // })
    // .addCase(getDataApiForSearchbar.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const { addItems, removeItems } = rapidApiSlice.actions;
export default rapidApiSlice.reducer;