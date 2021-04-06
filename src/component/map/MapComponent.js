import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import Vector from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import * as olSource from "ol/source";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import "../../style/map/map.css";

const MapComponent = () => {
  const [map, setMap] = useState({});
  const [randomLongLatValues, setRandomLongLatValues] = useState([]);
  const [layer, setLayer] = useState({});

  const getRandomLatitude = (a, b) => {
    let values = [];
    for (let i = 0; i < 2; i++)
      values.push(Math.random() * (b - a) + parseInt(a));

    return values.map((value) => parseFloat(value.toFixed(6)));
  };

  const getRandomLongitude = (a, b) => {
    let values = [];
    for (let i = 0; i < 2; i++)
      values.push(
        Math.floor(Math.random() * (b * 1000000 - a * 1000000) + a * 1000000) /
          (a * -10000)
      );
    return values.map((value) => parseFloat(value.toFixed(6)));
  };

  const getRandomValues = () => {
    const latitude = getRandomLatitude(20, 19);
    const longitude = getRandomLongitude(-99, -98);

    setRandomLongLatValues([
      { longitude: longitude[0], latitude: latitude[0] },
      { longitude: longitude[1], latitude: latitude[1] },
    ]);
  };

  // References
  const mapElement = useRef();

  const markersList = [];

  const updateMarkersWhenClick = () => {
    randomLongLatValues.forEach((element) => {
      let marker = new Feature({
        geometry: new Point(fromLonLat([element.longitude, element.latitude])),
      });

      marker.setStyle(
        new Style({
          image: new Icon({
            src:
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          }),
        })
      );

      markersList.push(marker);
    });

    let layer = new Vector({
      source: new olSource.Vector({
        features: markersList,
      }),
      visible: true,
      title: "longLatValues",
    });

    setLayer(layer);
  };

  useEffect(() => {
    if (randomLongLatValues.length >= 1) {
      updateMarkersWhenClick();
    }
  }, [randomLongLatValues]);

  useEffect(() => {
    if (Object.keys(layer).length >= 1) {
      map.addLayer(layer);
    }
  }, [layer]);

  useEffect(() => {
    let mapObject = new Map({
      target: mapElement.current,

      layers: [
        new TileLayer({
          source: new olSource.OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-99.128145, 19.413793]),
        zoom: 8,
      }),
    });

    setMap(mapObject);

    mapObject.on("singleclick", function (evt) {
      let feature = mapObject.forEachFeatureAtPixel(
        evt.pixel,
        function (feature, layer) {
          return feature;
        }
      );
      if (feature) {
        let geoData = feature.getProperties();
        let longitude = geoData.geometry.flatCoordinates[0];
        let latitude = geoData.geometry.flatCoordinates[1];
        alert(`Longitud: ${longitude}
         Latitud:  ${latitude}`);
      }
    });
  }, []);

  return (
    <div>
      <div className="closeScreen">
        <Link to="/home">
          <img
            className="closeScreen__cross"
            src="https://cdn.imgbin.com/19/15/6/imgbin-computer-icons-error-computer-XVScfC5dQ1UJGyh7NvxkYtyEV.jpg"
            alt="closeImage"
          />
        </Link>
      </div>
      <button className="map__button" onClick={() => getRandomValues()}>
        Click para generar marcadores
      </button>
      <div ref={mapElement} className="map-container" />
    </div>
  );
};

export default MapComponent;
