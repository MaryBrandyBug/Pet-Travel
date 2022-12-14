/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

export default function Map({ sitter, parent }) {
  const [map, setMap] = useState(null);
  useEffect(() => {
    // console.log(window)
    if (!map) {
      console.log(`${parent.city}, ${parent.country}`);
      ymaps.geocode(`${parent?.country}, ${parent?.city}`, { results: 1 })

        .then((res) => {
        // console.log(res);
          const geoObject = res.geoObjects.get(0);
          // console.log(geoObject);
          const coords = geoObject.geometry.getCoordinates();
          geoObject.properties.set('iconCaption', geoObject.getAddressLine());
          // console.log(coords);
          function init() {
            const myMap = new ymaps.Map('map', {
              center: coords,
              zoom: 7,
              controls: {
                clickableIcons: false,
                keyboardShortcuts: false,
              },
            });
            myMap.geoObjects.add(geoObject);
          }
          ymaps.ready(init);
        })
        .catch((error) => console.log(error));
    }
  }, [map]);

  return <div id="map" style={{ width: '600px', height: '600px' }} />;
}
