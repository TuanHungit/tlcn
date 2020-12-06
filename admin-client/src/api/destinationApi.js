import axios from "../common/axiosClient";

export const getAllDestinations = async (options) => {
  let url = `/destinations`;
  if (options) {
    url = `/destinations?fields=${options.join(",")}`;
  }
  const response = await axios.get(url);
  return response.data;
};
