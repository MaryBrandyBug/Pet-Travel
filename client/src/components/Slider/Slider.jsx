import React, {
  useEffect, useState, Children, cloneElement,
} from 'react';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const pageWidth = 1280;

export default function Slider({ sliderItems }) {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth;
      const maxOffset = -(pageWidth * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(sliderItems, (slider) => cloneElement(slider, {
        style: {
          height: '100%',
          minWidth: `${pageWidth}px`,
          maxWidth: `${pageWidth}px`,
        },
      })),
    );
  }, []);

  return (
    <div className="slider-container">
      <FaChevronLeft className="arrow" onClick={handleLeft} />
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >{pages}
        </div>
      </div>
      <FaChevronRight className="arrow" onClick={handleRight} />
    </div>
  );
}
