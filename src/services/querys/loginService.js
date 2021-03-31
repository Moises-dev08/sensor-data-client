import axios from "axios";
import { LOGIN_SERVER_URL, MAIN_SERVER_URL } from "../../const/const";

const loginUserService = async (data) => {
  try {
    const response = await axios.post(MAIN_SERVER_URL + LOGIN_SERVER_URL, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export { loginUserService };
