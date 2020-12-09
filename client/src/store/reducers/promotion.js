import * as actionTypes from '../actions/actionTypes';

const initialState = {
  promotionList: null,
  promotionDetail: null,
  loadding: false,
  error: false,
};

const fetchPromotionFailed = (state) => {
  return { ...state, loadding: false, error: true };
};

const setPromotionList = (state, action) => {
  return {
    ...state,
    loadding: false,
    error: false,
    promotionList: action.promotionList,
  };
};

const fetchPromotionDeatilFailed = (state) => {
  return { ...state, loadding: false, error: true };
};

const setPromotionDetail = (state, action) => {
  return {
    ...state,
    loadding: false,
    error: false,
    promotionDetail: action.promotionDetail,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROMOTION_FAILED:
      return fetchPromotionFailed(state, action);
    case actionTypes.SET_PROMOTION_LIST:
      return setPromotionList(state, action);
    case actionTypes.FETCH_PROMOTION_DETAIL_FAILED:
      return fetchPromotionDeatilFailed(state, action);
    case actionTypes.SET_PROMOTION_DETAIL:
      return setPromotionDetail(state, action);

    default:
      return state;
  }
};

export { reducer as promotionReducer };
