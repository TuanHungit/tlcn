import axios from "../common/axiosClient";
// api/productApi.js
class ProductApi {
  getAll = () => {
    const url = "/api/products";
    return axios.get(url);
  };
}
const productApi = new ProductApi();
export default productApi;
