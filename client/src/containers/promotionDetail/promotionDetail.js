import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PromotionDetailComponent from '../../components/promotion/promotionDetail/promotionDetail';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
const PromotionDetail = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const slug = props.match.params.slug;
    props.onFetchPromotionDetail(slug);
  }, [props.match.params.slug]);
  let promotions = props.error ? (
    <p>Promotion detail can't be loaded!</p>
  ) : (
    <Spinner />
  );
  if (props.promotionDetail) {
    promotions = <PromotionDetailComponent promotion={props.promotionDetail} />;
  }
  return <div>{promotions}</div>;
};

const mapStateToProps = (state) => {
  return {
    promotionDetail: state.promotion.promotionDetail,
    error: state.promotion.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPromotionDetail: (slug) =>
      dispatch(actionCreators.fetchPromotionDetail(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromotionDetail);
