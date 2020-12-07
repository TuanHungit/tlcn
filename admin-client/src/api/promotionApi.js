import axios from "../common/axiosClient";

export const getAllPromotion = async () => {
  const url = `/promotions`;
  const promotionList = await axios.get(url);
  return promotionList.data;
};

export const createPromotion = async (data) => {
  const url = `/promotions`;
  const promotionList = await axios.post(url, data);
  return promotionList.data;
};
