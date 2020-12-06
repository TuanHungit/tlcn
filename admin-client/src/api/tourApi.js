import axios from "../common/axiosClient";

export const getAllTour = async (options) => {
  let url = `/tours`;
  if (options) {
    url = `/tours?fields=${options.join(",")}`;
  }
  const tourList = await axios.get(url);
  return tourList.data;
};

export const createOnTour = async (desId, data) => {
  const url = `/destinations/${desId}/tours`;
  const tourCreated = await axios.post(url, data);
  return tourCreated.data;
};

export const uploadImage = () => {};
