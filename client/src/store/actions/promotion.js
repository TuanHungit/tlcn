import axios from '../../common/axios-order';
import * as actionTypes from './actionTypes';

const setPromotionList = (promotionList) => {
  return {
    type: actionTypes.SET_PROMOTION_LIST,
    promotionList: promotionList,
  };
};
const fetchPromotionListFailed = () => {
  return {
    type: actionTypes.FETCH_PROMOTION_FAILED,
  };
};

export const fetchPromotionList = (page = 0, limit = 15, options) => {
  return (dispatch) => {
    let url = `/promotions`;
    if (options) {
      url = `/promotions?fields=${options.join(
        ','
      )}&page=${page}&limit=${limit}`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setPromotionList(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchPromotionListFailed());
      });
  };
};

const setPromotionDetail = (promotionDetail) => {
  return {
    type: actionTypes.SET_PROMOTION_DETAIL,
    promotionDetail: promotionDetail,
  };
};
const fetchPromotionDetailFailed = () => {
  return {
    type: actionTypes.FETCH_BLOG_DETAIL_FAILED,
  };
};

export const fetchPromotionDetail = (slug) => {
  return (dispatch) => {
    let url = `/promotions/${slug}`;

    axios
      .get(url)
      .then((response) => {
        dispatch(setPromotionDetail(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchPromotionDetailFailed());
      });
  };
};
