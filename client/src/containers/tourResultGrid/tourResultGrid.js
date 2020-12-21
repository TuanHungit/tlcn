import React, { useEffect, useState, useMemo } from 'react';
import TourResultGrid from '../../components/search/tourResultGrid/tourResultGrid';
import axios from '../../common/axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
const TourResult = (props) => {
  window.scrollTo(0, 0);
  const [tourList, setTourList] = useState(null);
  const [query, setQuery] = useState({
    fields: [
      'duration',
      'name',
      'priceAdults',
      'images',
      'ratingsQuantity',
      'ratingsAverage',
      'startLocation',
      'country',
      'label',
      'slug',
    ],
  });
  useEffect(() => {
    const { slug } = props.match.params;
    setTourList(null);
    const fetchData = () => {
      axios
        .get(
          `/destinations/${slug}/tours/tours-dest?fields=${query.fields.join(
            ','
          )}`
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          setTourList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (query.sort) {
      const { slug } = props.match.params;
      setTourList(null);
      const fetchData = () => {
        axios
          .get(
            `/destinations/${slug}/tours/tours-dest?fields=${query.fields.join(
              ','
            )}&sort=${query.sort}`
          )
          .then((response) => {
            const data = response.data;
            console.log(data);
            setTourList(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    }
  }, [query]);
  const clickedSortHandler = (data) => {
    setQuery((state) => {
      return {
        ...state,
        sort: data,
      };
    });
  };
  const tourResult = useMemo(
    () => (
      <TourResultGrid
        tourList={tourList}
        clickedSortHandler={clickedSortHandler}
        sort={query.sort}
      />
    ),
    [tourList, query.sort]
  );
  return <div>{!tourList ? <Spinner /> : tourResult}</div>;
};

export default TourResult;
