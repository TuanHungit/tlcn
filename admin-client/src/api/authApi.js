import axios from "../common/axiosClient";
export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
};

export const authSignin = (email, password) => {
  const authData = {
    email,
    password,
  };
  let url = "/users/signin";
  axios
    .post(`${url}`, authData)
    .then((response) => {
      console.log(response);
      const token = response.data.token;
      const user = response.data.data.user;

      const expirationDate = response.data.expirationDate;
      if (user.role !== "admin") {
        throw new Error("Tài khoản không được phép truy cập!");
      }
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
    })
    .catch((error) => {
      console.log(error);
    });
};
