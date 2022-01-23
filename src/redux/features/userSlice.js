import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    email: "",
    password: "",
    creationData: "",
    items: [],
    publicInfo: {
      name: "",
      image: "",
      description: "",
      location: "",
      phone: "",
      email: "",
    },

    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        creationData: action.payload.creationData,
        items: action.payload.items,
        publicInfo: action.payload.publicInfo,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export default userSlice.reducer;
