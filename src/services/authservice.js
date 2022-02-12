import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
  async login(email, password) {
    return await axios
      .post(API_URL + "users/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.Authorization) {
          localStorage.setItem("token", response.data.Authorization);
        }

        return response.data;
      });
  }

  logout() {
    const token = jwt_decode(localStorage.getItem("token"));

    return axios
      .post(
        API_URL + "users/logout",
        {
          _user: {
            id: token.id,
            iat: token.iat,
          },
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
      });
  }

  register(username, email, password) {
    return axios.post(API_URL + "users/register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    const token = localStorage.getItem("token");

    return token;
  }

  decodeToken() {
    const token = jwt_decode(localStorage.getItem("token"));
    return token.id;
  }

  async myself() {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
        axios.get(API_URL + "myself").then((response) => {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
        });
      } else {
        console.log("No token");
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthService();
