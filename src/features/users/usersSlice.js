import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    userRemoved(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { userAdded, userRemoved } = usersSlice.actions;
export default usersSlice.reducer;
