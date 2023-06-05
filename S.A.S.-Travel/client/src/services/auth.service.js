import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.success) {
          console.log("Stored in Local Storage");
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }

        return response.data;
      });
  }

  signup(name, email, password) {
    return axios.post(API_URL + "signup", {
        name,
        email,
        password
        });
    }

  logout() {
    localStorage.removeItem("token");
  }

  register(name, email, password) {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();