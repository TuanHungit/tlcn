import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';
import { fetchRevireTourList } from './review';
import { setBookingInfo } from './booking';
//tour list actions
export const fetchTourStart = () => {
  return {
    type: actionTypes.FETCH_TOUR_START,
  };
};

const setTourList = (tourList) => {
  return {
    type: actionTypes.SET_TOUR_LIST,
    tourList: tourList,
  };
};
const fetchTourFailed = () => {
  return {
    type: actionTypes.FETCH_TOUR_FAILED,
  };
};

export const fetchTour = (page = 0, limit = 9, fields) => {
  fetchTourStart();
  return (dispatch) => {
    let url = `/tours?page=${page}&limit=${limit}`;
    if (fields) {
      url = `/tours?page=${page}&limit=${limit}&fields=${fields.join(
        ','
      )}&sort=-ratingsAverage`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setTourList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTourFailed());
      });
  };
};

//tour detail actions

const fetchTourDetailFailed = () => {
  return {
    type: actionTypes.FETCH_TOUR_DETAIL_FAILED,
  };
};

const setTourDetail = (tourDetail) => {
  return {
    type: actionTypes.SET_TOUR_DETAIL,
    tourDetail: tourDetail,
  };
};
// const searchTour = (tourDetail) => {
//   return {
//     type: actionTypes.SET_SEARCH_TOUR,
//     tourDetail: tourDetail,
//   };
// };
// export const searchTour = (destination) => {
//   fetchTourStart();
//   return (dispatch) => {
//     axios
//       .get(`/tours/${destination}`)
//       .then((response) => {
//         console.log(response);
//         dispatch(searchTour(response.data));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(fetchTourFailed());
//       });
//   };
// };
export const fetchTourDetail = (slug) => {
  return (dispatch) => {
    dispatch(fetchTourStart());
    axios
      .get(`/tours/${slug}`)
      .then((response) => {
        dispatch(setTourDetail(response.data));
      })
      .catch((err) => {
        dispatch(fetchTourDetailFailed());
      });
  };
};

//fetch fimilar tour
const setSimilarTourList = (similarTourList) => {
  return {
    type: actionTypes.SET_TOUR_SIMILAR_LIST,
    similarTourList,
  };
};
const fetchSimilarTourFailed = () => {
  return {
    type: actionTypes.FETCH_TOUR__SIMILAR_FAILED,
  };
};

export const fetchSimilarTour = (tourId, page = 0, limit = 4, fields) => {
  return (dispatch) => {
    let url = `/tours?page=${page}&limit=${limit}`;
    if (fields) {
      url = `/tours?page=${page}&limit=${limit}&fields=${fields.join(
        ','
      )}&sort=-ratingsAverage`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setSimilarTourList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchSimilarTourFailed());
      });
  };
};
