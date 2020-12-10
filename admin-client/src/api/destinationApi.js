import axios from "../common/axiosClient";

export const getAllDestinations = async (options) => {
  let url = `/destinations`;
  if (options) {
    url = `/destinations?fields=${options.join(",")}`;
  }
  const response = await axios.get(url);
  return response.data;
};
export const createOneDestination = async (data) => {
  const url = `/destinations`;
  const destinationCreate = await axios.post(url, data);
  return destinationCreate.data;
};


