import React from 'react';
// import Map from '../Map/Map';
import Slider from '../Slider/Slider';
import './Main.css';
import familyCat from '../../imgMain/familyCat.png';
import dogGlasses from '../../imgMain/dogGlasses.webp';
import cuteDog from '../../imgMain/cuteDog.png';

export default function Main() {
  return (
    <div>
      <div>
        <Slider
          sliderItems={[
            <div className="slide slide-1">slide 1</div>,
            <div className="slide slide-2">slide 2</div>,
            <div className="slide slide-3">slide 3</div>,
          ]}
          pageWidth={1900}
        />
      </div>
      <div className="reasons_why_us">
        <h2>Почему хаус ситтинг?</h2>
        <div className="reasons_in_row">
          <div className="reason">
            <div className="reason_photo"><img src={familyCat} alt="" /></div>
            <div className="reason_title">
              <h3>Для владельцев животных</h3>
            </div>
            <div className="reason_text">
              <p>Владельцы животных могут быть по-настоящему спокойны, зная,
                что их питомцы (и дом) находятся под присмотром, пока они в отъезде.
              </p>
            </div>
          </div>
          <div className="reason">
            <div className="reason_photo"><img src={dogGlasses} alt="" /></div>
            <div className="reason_title">
              <h3>Для домашних любимцев</h3>
            </div>
            <div className="reason_text">
              <p>Домашние животные остаются довольными дома с ситтером, который дарит им заботу и внимание.</p>
            </div>
          </div>
          <div className="reason">
            <div className="reason_photo"><img src={cuteDog} alt="" /></div>
            <div className="reason_title">
              <h3>Для ситтеров</h3>
            </div>
            <div className="reason_text">
              <p>Ситтеры обменивают свое время, заботу и опыт на интересные знакомства с людьми по всему миру и их домашними любимцами
                и уникальные впечатления от путешествий.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
