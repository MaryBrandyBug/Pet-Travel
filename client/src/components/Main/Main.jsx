import React from 'react';
// import Map from '../Map/Map';
import Slider from '../Slider/Slider';
import './Main.css';

export default function Main() {
  return (
    <div>
      <Slider sliderItems={[
        <div className="slide slide-1">slide 1</div>,
        <div className="slide slide-2">slide 2</div>,
        <div className="slide slide-3">slide 3</div>,
      ]}
      />
      {/* <Map /> */}
    </div>
  );
}
