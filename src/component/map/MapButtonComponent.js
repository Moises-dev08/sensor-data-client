import React, { useState } from "react";

const MapButtonComponent = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const randomLatitude = (a, b) => {
    let values = [];
    for (let i = 0; i < 3; i++)
      values.push(Math.random() * (b - a) + parseInt(a));

    const latitudeValues = values.map((value) => parseFloat(value.toFixed(6)));

    setLatitude(latitudeValues);
  };

  const randomLongitude = (a, b) => {
    let values = [];
    for (let i = 0; i < 3; i++)
      values.push(
        Math.floor(Math.random() * (b * 1000000 - a * 1000000) + a * 1000000) /
          (a * -10000)
      );

    setLongitude(values);
  };

  const randomValues = () => {
    randomLatitude(20, 15);
    randomLongitude(-100, -80);
  };

  return (
    <div>
      <button onClick={() => randomValues()}>
        Click para generar marcadores
      </button>
    </div>
  );
};

export default MapButtonComponent;
