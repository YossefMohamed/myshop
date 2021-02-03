import React, { useState, useEffect } from "react";

const SlideShow = ({ products}) => {
    let sliderProducts = [];
    let counter = 1;
    const [x, setX] = useState(0);
    products.map((e) => {
      if (!(counter >= 6)) {
        sliderProducts.push(`/images/slideShow${counter}.png`);
        counter++
      }
    });
  return (
  
          <div className="carousel rounded">
            <button
              className="carousel__button carousel--right"
              onClick={() => {
                if (x === 500) {
                  setX(0);
                } else {
                  setX(x + 100);
                }
              }}
            >
              {">"}
            </button>
            <button
              className="carousel__button carousel--left"
              onClick={() => {
                if (x === 0) {
                  setX(500);
                } else {
                  setX(x - 100);
                }
              }}
            >
              {"<"}
            </button>
            {sliderProducts.map((e, indx) => (
              <div
                key={indx+1}
                className="carousel__container--image"
                style={{ transform: `translateX(-${x}%)` }}
              >
                  {console.log(sliderProducts)}
                <img src={e} className="carousel--image" />
              </div>
            ))}
          </div>
      
  );
};

export default (SlideShow);
// export default SlideShow;
