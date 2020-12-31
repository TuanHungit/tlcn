import React, { useState, useEffect } from 'react';
import TourCard from '../../../components/tour/tourCard/tourCard';
import axios from '../../../common/axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
export default (props) => {
  const { query, slug } = props;
  const [tourList, setTourList] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('did mount');
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
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (query.sort || query.slug) {
      setLoading(true);
      console.log(query);
      const fetchData = () => {
        let url = `/destinations/${
          query.slug
        }/tours/tours-dest?fields=${query.fields.join(',')}&sort=${query.sort}`;

        if (query.slug === '') {
          url = `/tours?fields=${query.fields.join(',')}&sort=${query.sort}`;
        } else if (query.label !== '') {
          url = url + `?label=${query.label}`;
        }
        axios
          .get(url)
          .then((response) => {
            const data = response.data;
            setLoading(false);
            setTourList(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    }
  }, [query]);

  let render = null;
  if (!loading && tourList) {
    render = tourList.map((el, key) => <TourCard key={key} tour={el} />);
  } else {
    render = <Spinner />;
  }
  return (
    <div class='row equal-height cols-1 cols-sm-2 gap-20 mb-25'>{render}</div>
  );
};
