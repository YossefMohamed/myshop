import React, { useState, useEffect } from "react";

const SlideShow = ({ products, height }) => {
  let sliderProducts = [];

  const [x, setX] = useState(0);
  products.map((e, index) => {
    if (index + 1 < 6) {
      sliderProducts.push(`/images/slideShow${index + 1}.png`);
    }
    return 1;
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (x === 400) {
        setX(0);
      } else {
        setX(x + 100);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [x]);
  // console.log(sliderProducts);
  return (
    <div className="carousel" style={{ height: height }}>
      <button
        className="carousel__button carousel--right"
        onClick={() => {
          if (x === 400) {
            setX(0);
          } else {
            setX(x + 100);
          }
        }}
      >
        <i class="fas fa-angle-right"></i>
      </button>
      <button
        className="carousel__button carousel--left"
        onClick={() => {
          if (x === 0) {
            setX(400);
          } else {
            setX(x - 100);
          }
        }}
      >
        <i class="fas fa-angle-left"></i>
      </button>
      {sliderProducts.map((e, indx) => (
        <div
          key={indx}
          className="carousel__container--image"
          style={{ transform: `translateX(-${x}%)` }}
        >
          {/* {console.log(indx)} */}
          <img src={e} className="carousel--image" alt="carousel" />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
// export default SlideShow;
