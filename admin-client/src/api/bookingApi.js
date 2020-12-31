import axios from "../common/axiosClient";

export const getAllBooking = async () => {
  let url = `/booking?sort=-createdAt`;
  const bookingList = await axios.get(url);
  return bookingList.data;
};
