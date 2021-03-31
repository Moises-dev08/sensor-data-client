import axios from "axios";
import { SIGNUP_SERVER_URL, MAIN_SERVER_URL } from "../../const/const";

const signUpUserService = async (data) => {
  try {
    const response = await axios.post(MAIN_SERVER_URL + SIGNUP_SERVER_URL, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export { signUpUserService };
