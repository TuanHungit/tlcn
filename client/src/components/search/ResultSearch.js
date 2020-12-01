import React, { Component } from "react";
import tourCard from "../tour/tourCard/tourCard";
import Search from "./Search";
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actionCreators from '../../store/actions';

import { connect } from 'react-redux';
import BestTour from "../tour/bestTour/BestTour";

class ResultSearch extends Component {
  render(){  
   
    let bestTour = this.props.tourError ? (
      <p>Destinations can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.tourList) {
      bestTour = <BestTour tourList={this.props.tourList} />;
    }
    return (
      <div classNameName='main-wrapper scrollspy-container'>
        <section className='page-wrapper page-result pb-0'>
          <div className='page-title bg-light mb-0'>
            <div className='container'>
              <div className='row gap-15 align-items-center'>
                <div className='col-12 col-md-7'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href='tour-result-grid.html#'>
                          <i className='fas fa-home'></i>
                        </a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='tour-result-grid.html#'>Page</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Page Title by Heading Two
                      </li>
                    </ol>
                  </nav>

                  <h4 className="mt-0 line-125">
                    36 Tour Packages in 
                    {/* {this.props.destinationList[0].name} */}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row equal-height gap-30 gap-lg-40'>
              <div className='col-12 col-lg-4'>
                <aside className='sidebar-wrapper pv'>
                  <div className='secondary-search-box mb-30'>
                    <h4 className=''>Search</h4>

                    <form>
                      <div className="row">
                    {/* {search} */}

                        <div className="col-12">
                          <div className="col-inner">
                            <div className="form-group">
                              <label>Tour Type</label>
                              <select
                                className='chosen-the-basic form-control form-control-sm'
                                placeholder='Select one'
                                tabindex='2'
                              >
                                <option>Tất cả</option>
                                {/* { Object.values(this.props.tourList).map((el)=>
                                  <option key={el.id}>{el.country}</option>
                                  )}  */}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className='col-12'>
                          <div className='col-inner'>
                            <div className='form-group'>
                              <label>Destination</label>
                              <select
                                className='chosen-the-basic form-control form-control-sm'
                                placeholder='Select two'
                                tabindex='2'
                              >
                      
                                <option>Tất cả</option>
                                
                                {/* { Object.values(this.props.destinationList).map((el)=>
                                  <option key={el.id}>{el.name}</option>
                                  )}  */}
                                 {/* <option>Asia</option>
                                <option>Europe</option>
                                <option>Africa</option>
                                <option>America</option>  */}
                              </select>
                            </div>
                          </div>
                                </div>
                        <div className="col-12"> 
                          <div className="col-inner">
                            <div className="form-group">
                              <label>When</label>
                              <input
                                type='text'
                                className='form-control form-readonly-control air-datepicker'
                                placeholder='Pick a month'
                                data-min-view='months'
                                data-view='months'
                                data-date-format='MM yyyy'
                                data-language='en'
                                data-auto-close='true'
                                readonly
                              />
                            </div>
                          </div>
                        </div>

                        <div className='col-12'>
                          <div className='col-inner ph-20 pv-15'>
                            <a
                              href='tour-result-grid.html#'
                              className='btn btn-primary btn-block'
                            >
                              <i className='ion-android-search'></i> search
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className='sidebar-box'>
                    <div className='box-title'>
                      <h5>Price Range</h5>
                    </div>

                    <div className='box-content'>
                      <input id='price_range' />
                    </div>
                  </div>

                  <div className='sidebar-box'>
                    <div className='box-title'>
                      <h5>Star Slider</h5>
                    </div>

                    <div className='box-content'>
                      <input id='star_range' />
                    </div>
                  </div>
   
                  <div className="sidebar-box">
                    <div className="box-title">
                      <h5>Filter Text</h5>
                    </div>

                    <div className='box-content'>
                      <p>
                        Park fat she nor does play deal our. Procured sex
                        material his offering humanity laughing moderate can.
                        Unreserved had she nay dissimilar admiration interested.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>

              <div className='col-12 col-lg-8'>
                <div className='content-wrapper pv'>
                  <div className='d-flex justify-content-between flex-row align-items-center sort-group page-result-01'>
                    <div className='sort-box'>
                      <div className='d-flex align-items-center sort-item'>
                        <label className='sort-label d-none d-sm-flex'>
                          Sort by:
                        </label>
                        <div className='sort-form'>
                          <select
                            className='chosen-the-basic form-control'
                            tabindex='2'
                          >
                            <option value='sort-by-1'>Name: A to Z</option>
                            <option value='sort-by-2'>Name: Z to A</option>
                            <option value='sort-by-3'>
                              Price: Hight to Low
                            </option>
                            <option value='sort-by-4'>
                              Price: Low to High
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='sort-box'>
                      <div className='d-flex align-items-center sort-item'>
                        <label className='sort-label d-none d-sm-flex'>
                          View as:
                        </label>
                        <ul className='sort-nav'>
                          <li>
                            <a href='tour-result-grid.html#' className='active'>
                              <i className='fas fa-th'></i>
                            </a>
                          </li>
                          <li>
                            <a href='tour-result-grid.html#'>
                              <i className='fas fa-th-list'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row equal-height cols-1 cols-sm-2 gap-20 mb-25">
                    <div className="col">
             {bestTour}
                       </div> 
                     </div>

                  <div className='pager-wrappper mt-40'>
                    <div className='pager-innner'>
                      <div className='row align-items-center text-center text-lg-left'>
                        <div className='col-12 col-lg-5'>
                          Showing reslut 1 to 15 from 248
                        </div>

                        <div className='col-12 col-lg-7'>
                          <nav className='float-lg-right mt-10 mt-lg-0'>
                            <ul className='pagination justify-content-center justify-content-lg-left'>
                              <li>
                                <a
                                  href='tour-result-grid.html#'
                                  aria-label='Previous'
                                >
                                  <span aria-hidden='true'>&laquo;</span>
                                </a>
                              </li>
                              <li className='active'>
                                <a href='tour-result-grid.html#'>1</a>
                              </li>
                              <li>
                                <a href='tour-result-grid.html#'>2</a>
                              </li>
                            
                              <li>
                                <span>...</span>
                              </li>
                             
                              <li>
                                <a href='tour-result-grid.html#'>12</a>
                              </li>
                              <li>
                                <a href='tour-result-grid.html#'>13</a>
                              </li>
                              <li>
                                <a
                                  href='tour-result-grid.html#'
                                  aria-label='Next'
                                >
                                  <span aria-hidden='true'>&raquo;</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
// export default ResultSearch;
const mapStateToProps = (state) => {
  return {
    destinationList: state.destination.destinationList,
    destinationError: state.destination.error,
    tourList: state.tour.tourList,
    tourError: state.tour.error,
    reviewList: state.review.reviewList,
    reviewError: state.review.error,
   
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDestination: () => dispatch(actionCreators.fetchDestination()),
    onFetchTour: (page, limit, feilds) =>
      dispatch(actionCreators.fetchTour(page, limit, feilds)),
    onFetchREview: (page, limit, feilds) =>
      dispatch(actionCreators.fetchReview(page, limit, feilds)),
 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch);