import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { cars } from "utils/helper";
import "assets/css/carousel.css";

export const Caroussel = ({ numVisible, numScroll }) => {
  const [data, setData] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    setData(cars);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="p-mb-3">
            <img
              style={{ width: "60%" }}
              src={item.image}
              // onError={(e) =>
              //   (e.target.src =
              //     "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              // }
              alt={item.name}
              className="product-image"
            />
          </div>
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <div className="card">
        <Carousel
          value={data}
          numVisible={numVisible}
          numScroll={numScroll}
          responsiveOptions={responsiveOptions}
          itemTemplate={itemTemplate}
        />
      </div>
    </div>
  );
};
