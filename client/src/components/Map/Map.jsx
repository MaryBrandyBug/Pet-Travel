import React from 'react';

export default function Map() {
  function init() {
    const myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 9,
    });
  }
  ymaps.ready(init);
  return (
    <div id="map" style={{ width: '600px', height: '400px' }} />
  );
}
