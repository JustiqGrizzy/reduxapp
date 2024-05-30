import axios from "./api";

const AuthSerrvice = {
  async userRegister(user) {
    const response = await axios.post("/users", { user });

    return response.data;
  },
  async userLogin() {},
  async getUser() {},
};
export default AuthSerrvice;
