import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import PromotionComponent from '../../components/promotion/promotion';
import Spinner from '../../components/UI/Spinner/Spinner';
const Promotion = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    props.onFetchPromotionList(0, 12, ['title', 'startDate', 'slug']);
  }, []);
  let promotions = props.fetchPromotionListError ? (
    <p>Promotion can't be loaded!</p>
  ) : (
    <Spinner />
  );
  if (props.promotionList) {
    promotions = <PromotionComponent promotionList={props.promotionList} />;
  }
  return <div>{promotions}</div>;
};

const mapStateToprops = (state) => {
  return {
    fetchPromotionListError: state.promotion.error,
    promotionList: state.promotion.promotionList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPromotionList: (page, limit, options) =>
      dispatch(actionCreators.fetchPromotionList(page, limit, options)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Promotion);
