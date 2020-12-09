import React, { Component } from "react";
import tourCard from "../tour/tourCard/tourCard";
import Search from "../UI/search/search";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actionCreators from "../../store/actions";
import Tour from "../search/Search";

import { connect } from "react-redux";
// import Tour from "../search/Search";

class ResultSearch extends Component {
  constructor(props){
super(props);
this.state =
{ value: "Tất cả"};

  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onFetchDestination();
    this.props.onFetchTour(0, 4, [
      "duration",
      "name",
      "price",
      "ratingsQuantity",
      "ratingsAverage",
      "startLocation",
      "country",
      "slug",
    ]);
    this.props.onFetchBlog(0, 3, ["images", "title", "createdAt"]);

    this.props.onFetchREview(0, 15, ["review", "user", "createdAt"]);
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
              this.setState({ query, loading: true, message: ''  } );
              this.setState({ value:event.target.value  } );

            };
  handleSearch(){
    return  (
      <Tour tourList={this.props.tourList}
      />)
  }
  render() {
    let bestTour = this.props.tourError ? (
      <p>Destinations can't be loaded!</p>
    ) : (
      <Spinner />
    );
   
    if (this.props.tourList) {
      bestTour = (
        <Tour tourList={this.props.tourList}
        />
      );
    }
   
    return (
      <div className="main-wrapper scrollspy-container">
        <section className="page-wrapper page-result pb-0">
          <div className="page-title bg-light mb-0">
            <div className="container">
              <div className="row gap-15 align-items-center">
                <div className="col-12 col-md-7">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="tour-result-list.html#">
                          <i className="fas fa-home"></i>
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="tour-result-list.html#">Page</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Page Title by Heading Two
                      </li>
                    </ol>
                  </nav>

                  <h4 className="mt-0 line-125">36 Tour Packages in Thailand</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row equal-height gap-30 gap-lg-40">
              <div className="col-12 col-lg-4">
                <aside className="sidebar-wrapper pv">
                  <div className="secondary-search-box mb-30">
                    <h4 className="">Search</h4>

                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="col-inner">
                            <div className="form-group">
                              <label>Tour Type</label>
                              <select
                                className="chosen-the-basic form-control form-control-sm"
                                placeholder="Select one"
                                tabindex="2"
                               
                              >
                                <option>Tất cả</option>
                                { Object.values(this.props.tourList).map((el)=>
                                  <option key={el.id}>{el.country}</option>
                                  )} 
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="col-inner">
                            <div className="form-group">
                              <label>Điểm đến</label>
                              <select
                                className="chosen-the-basic form-control form-control-sm"
                                placeholder="Select two"
                                tabindex="2"
                              // value={this.this.props.value}
                                onChange={this.handleOnInputChange}
                              >
                                <option>Tất cả</option>
                                   { Object.values(this.props.tourList).map((el)=>
                                  <option key={el.id}>{el.country}</option>
                                  )} 
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="col-inner">
                            <div className="form-group">
                              <label>Thời gian</label>
                              <input
                                type="text"
                                className="form-control form-readonly-control air-datepicker"
                                placeholder="Chọn thời gian"
                                data-min-view="months"
                                data-view="months"
                                data-date-format="MM yyyy"
                                data-language="en"
                                data-auto-close="true"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="col-inner ph-20 pv-15">
                            <a 
                              href="tour-result-list.html#"
                              className="btn btn-primary btn-block"
                            >
                              <i className="ion-android-search"></i> Tìm kiếm
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="sidebar-box">
                    <div className="box-title">
                      <h5>Giá</h5>
                    </div>

                    <div className="box-content">
                      <input id="price_range" />
                    </div>
                  </div>

                  <div className="sidebar-box">
                    <div className="box-title">
                      <h5>Đánh Giá</h5>
                    </div>

                    <div className="box-content">
                      <input id="star_range" />
                    </div>
                  </div>

                  <div className="sidebar-box">
                    <div className="box-title">
                      <h5>Filter Select</h5>
                    </div>

                    <div className="box-content">
                      <div className="form-group">
                        <select
                          data-placeholder="Filter Select"
                          className="chosen-the-basic form-control"
                          tabindex="2"
                        >
                          <option value=""></option>
                          <option value="filter-select-0">
                            Filter Select One
                          </option>
                          <option value="filter-select-1">
                            Filter Select Two
                          </option>
                          <option value="filter-select-2">
                            Filter Select Three
                          </option>
                          <option value="filter-select-3">
                            Filter Select Four
                          </option>
                          <option value="filter-select-4">
                            Filter Select Five
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-box">
                    <div className="box-title">
                      <h5>Filter Text</h5>
                    </div>

                    <div className="box-content">
                      <p>
                        Park fat she nor does play deal our. Procured sex
                        material his offering humanity laughing moderate can.
                        Unreserved had she nay dissimilar admiration interested.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="col-12 col-lg-8">
                <div className="content-wrapper pv">
                  <div className="d-flex justify-content-between flex-row align-items-center sort-group page-result-01">
                    <div className="sort-box">
                      <div className="d-flex align-items-center sort-item">
                        <label className="sort-label d-none d-sm-flex">
                          Sort by:
                        </label>
                        <div className="sort-form">
                          <select
                            className="chosen-the-basic form-control"
                            tabindex="2"
                          >
                            <option value="sort-by-1">Name: A to Z</option>
                            <option value="sort-by-2">Name: Z to A</option>
                            <option value="sort-by-3">
                              Price: Hight to Low
                            </option>
                            <option value="sort-by-4">
                              Price: Low to High
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="sort-box">
                      <div className="d-flex align-items-center sort-item">
                        <label className="sort-label d-none d-sm-flex">
                          View as:
                        </label>
                        <ul className="sort-nav">
                          <li>
                            <a href="tour-result-list.html#">
                              <i className="fas fa-th"></i>
                            </a>
                          </li>
                          <li>
                            <a href="tour-result-list.html#" className="active">
                              <i className="fas fa-th-list"></i>
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
                  <div className="pager-wrappper mt-40">
                    <div className="pager-innner">
                      <div className="row align-items-center text-center text-lg-left">
                        <div className="col-12 col-lg-5">
                          Showing reslut 1 to 15 from 248
                        </div>

                        <div className="col-12 col-lg-7">
                          <nav className="float-lg-right mt-10 mt-lg-0">
                            <ul className="pagination justify-content-center justify-content-lg-left">
                              <li>
                                <a
                                  href="tour-result-list.html#"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li className="active">
                                <a href="tour-result-list.html#">1</a>
                              </li>
                              <li>
                                <a href="tour-result-list.html#">2</a>
                              </li>
                              <li>
                                <span>...</span>
                              </li>

                              <li>
                                <a href="tour-result-list.html#">13</a>
                              </li>
                              <li>
                                <a
                                  href="tour-result-list.html#"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">&raquo;</span>
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
    onFetchBlog: (page, limit, feilds) =>
      dispatch(actionCreators.fetchBlog(page, limit, feilds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch);
