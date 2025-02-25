// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

/* The venue functionality uses slices from the Redux toolkit by
importing the createSlice() function. A slice breaks down your
application state into smaller features, helping organize your code,
making it easier to read and simpler to maintain. */

// this file contains code to slice the Redux state related to venue selection using createSlice from @reduxjs/toolkit

export const venueSlice = createSlice({
  /* The initial state consists of an array of venue objects, each
  representing a rentable room in the venue. A venue object has properties
  such as the thumbnail image, name, cost, and quantity. */

  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],
  reducers: {
    /* he venueSlice.js file includes reducer functions incrementQuantity and
    decrementQuantity to manage the number of venue items in the state. */

    incrementQuantity: (state, action) => {
      /* This function handles incrementing the quantity of a venue item in the state.
      It receives an action containing the index of the item to be incremented. */

      /* It first checks if the item exists in the state at the provided index.
      If the item exists and it's an Auditorium Hall with a quantity greater than
      or equal to 3, it returns early without modifying the state. */

      /* Otherwise, it increments the quantity of the item by one. */
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      /* This function handles decrementing the quantity of a venue item in the state.
      It receives an action containing the index of the item to be decremented. */

      /* It first checks if the item exists in the state at the provided index and
      if its quantity is greater than 0. */

      /* If both conditions are met, the quantity of the item will be decreased by
      one. */
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
