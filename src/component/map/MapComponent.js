import React, { useRef, useState, useEffect } from "react";
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
  const [markersListToLayer, setMarkersListToLayer] = useState();

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
  const mapRef = useRef();
  mapRef.current = map;

  const markersList = [];
  // const lastLayer = {};

  const updateMarkersWhenClick = () => {
    // if (lastLayer) {
    //   map.removeLayer(lastLayer);
    // }

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
      //console.log("marker", marker);
      console.log("markersList", markersList);

      setMarkersListToLayer(markersList);
    });
  };

  let layers = new Vector({
    source: new olSource.Vector({
      features: markersListToLayer,
    }),
    visible: true,
    title: "longLatValues",
  });

  console.log("layers", layers);
  useEffect(() => {
    updateMarkersWhenClick();
  }, [randomLongLatValues]);

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
        zoom: 2,
      }),
    });

    setMap(mapObject);

    mapObject.addLayer(layers);

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
  }, [randomLongLatValues]);

  let style = {
    height: "100vh",
    width: "100%",
  };

  return (
    <div>
      <button className="map__button" onClick={() => getRandomValues()}>
        Click para generar marcadores
      </button>
      <div ref={mapElement} className="map-container" style={style} />
    </div>
  );
};

export default MapComponent;
