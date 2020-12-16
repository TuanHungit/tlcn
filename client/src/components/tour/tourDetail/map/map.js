import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './map.css';
export default (props) => {
  const [viewport, setViewport] = useState({
    latitude: props.locations[2].coordinates[1],
    longitude: props.locations[2].coordinates[0],
    width: '100%',
    height: '650px',
    zoom: 6,
  });
  const [selectedLoc, setSelectedLoc] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedLoc(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div
      id='detail-content-sticky-nav-03'
      class='fullwidth-horizon-sticky-section'
    >
      <h4 class='heading-title'>
        <i class='fas fa-map-marker-alt'></i> Bản đồ
      </h4>

      <div id='map' className='d-flex justify-content-between width-full'>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken='pk.eyJ1IjoidHVhaHVuZyIsImEiOiJjazlsNHZiaDAyMjNrM21xdHliOXFscWY4In0.Farhq517EmyRg7g4-yu1Rw'
          mapStyle='mapbox://styles/tuahung/ckhswed373ecl19ke88gfbbpo'
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {Object.values(
            props.locations.filter(
              (loc) => loc.coordinates[1] && loc.coordinates[0]
            )
          ).map((loc, key) => (
            <Marker
              key={key}
              latitude={loc.coordinates[1]}
              longitude={loc.coordinates[0]}
            >
              <h4>Ngày {key + 1}</h4>
              <img
                src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
                alt='Skate Park Icon'
                style={{ width: '40px' }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedLoc(loc);
                }}
              />
            </Marker>
          ))}

          {selectedLoc ? (
            <Popup
              latitude={selectedLoc.coordinates[1]}
              longitude={selectedLoc.coordinates[0]}
              onClose={() => {
                setSelectedLoc(null);
              }}
            >
              <p>
                <p>{selectedLoc.title}</p>
              </p>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
      <div class='mb-50'></div>
    </div>
  );
};
