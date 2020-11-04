import { Card } from "@material-ui/core";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function MapChart(props){
    
const markers = [
    {
      markerOffset: -30,
      name: props.city,
      coordinates: [parseFloat(props.latitude)-20, -30.6037]
    },
  
  ];
  
  return (
      <Card style = {{background:'black',boxShadow:'10px 10px 100px'}}>
  <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400
      }}
      
    >
      <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "blue",fontSize:'25px',fontWeight:'bold' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
      </Card>
  
  );
};

export default MapChart;
