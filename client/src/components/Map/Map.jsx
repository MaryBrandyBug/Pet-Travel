import React, { useState, useEffect } from 'react';

export default function Map({ parents, parent }) {
  const [map, setMap] = useState(null);
  // useEffect(() => {
  //   function init() {
  //     const myMap = new ymaps.Map('map', {
  //       center: [55.75, 37.61],
  //       zoom: 2,
  //       controls: {
  //         clickableIcons: false,
  //         keyboardShortcuts: false,
  //       },
  //     });
  //     parents.forEach((el) => {
  //       ymaps.geocode(`${el?.country}, ${el?.city}`, { results: 1 })
  //         .then((res) => {
  //           const geoObject = res.geoObjects.get(0);
  //           const coords = geoObject.geometry.getCoordinates();
  //           const myGeoObject = new ymaps.GeoObject(
  //             {
  //               geometry: {
  //                 type: 'Point',
  //                 coordinates: coords,
  //               },
  //               properties: {
  //                 hintContent: el.city,
  //                 balloonContentHeader: el.city,
  //                 population: 11848762,
  //               },
  //             },
  //             {

  //               preset: 'islands#redDotIcon',

  //               draggable: true,

  //               balloonContentFooterLayout: ymaps.templateLayoutFactory.createClass(
  //                 'population: {{ properties.population }}, coordinates: {{ geometry.coordinates }}',
  //               ),

  //               hintCloseTimeout: null,

  //             },
  //           );
  //           myMap.geoObjects.add(myGeoObject);
  //           // console.log('el', el);
  //         });
  //     });
  //   }
  //   ymaps.ready(init);
  // }, []);

  useEffect(() => {
    ymaps.geocode(`${parent?.country}, ${parent?.city}`)
      .then((res) => {
        const geoObject = res.geoObjects.get(0);
        const coords = geoObject.geometry.getCoordinates();
        geoObject.properties.set('iconCaption', geoObject.getAddressLine());
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
      });
  }, [parent]);

  return <div id="map" style={{ width: '800px', height: '400px', marginLeft: '300px' }} />;
}
