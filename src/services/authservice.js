import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "users/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.Authorization) {
          localStorage.setItem("token", response.data.Authorization);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");

    return axios.post(API_URL + "users/logout");
  }

  register(username, email, password) {
    return axios.post(API_URL + "users/register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token");
  }
}

export default new AuthService();
