import axios from "./axiosClient";

export const getAllTour = async (options) => {
  let url = `/tours`;
  if (options) {
    url = `/tours?fields=${options.join(",")}`;
  }
  const tourList = await axios.get(url);
  return tourList;
};
