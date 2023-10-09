import React, { useRef, useEffect } from 'react'
import '../styles/Sizing.css'
import "../styles/Map.css"
import mapboxgl from "mapbox-gl";
import features from './trees.json';
import boro from './BoroughNYC.json'
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXN3YXRoaXMwNyIsImEiOiJjbG1pcG5nbjcwc3NiM2xuc3dmZHc4bHhxIn0.Sjxf7YoCzfBIm7t0zbnFnQ";

const Map = ({ cen, setCen }) => {

  const mapContainerRef = useRef(null);


  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: cen,
      zoom: 8.58
    });
    map.on('load', () => {
      map.addSource('hotspot', {
      'type': 'geojson',
     'data':features
      });
      map.addSource('boronyc',{
        type: 'geojson',
        'data':boro
      })
      map.addLayer({
        'id':"add-boro",
        'type':"fill",
        "source":"boronyc",
        "paint": {
          "fill-color": [
            "match",
            ["get", "boro_name"], // Assuming "Location" is a property in your GeoJSON with location identifiers
            "Bronx", "#a8f7bc", // Specify the color for Location1
            "Queens", "#a4dafb", // Specify the color for Location2
            "Manhattan", "#fba4f6", // Specify the color for Location3
            "Brooklyn", "#f1fba4", // Specify the color for Location4
            "Staten Island", "#f97f9d", // Specify the color for Location5
            // Add more matches for other locations and colors as needed
            "#44AB80" // Default color if there's no match
          ],
           // Adjust the radius as needed
          "fill-opacity": 0.6
        }
        
      })
      map.addLayer({
        'id':"add-border",
        'type':"line",
        "source":"boronyc",
        "paint": {
          "line-color": [
            "match",
            ["get", "boro_name"], // Assuming "Location" is a property in your GeoJSON with location identifiers
            "Bronx", "#0c9c30", // Specify the color for Location1
            "Queens", "#076197", // Specify the color for Location2
            "Manhattan", "#921b8b", // Specify the color for Location3
            "Brooklyn", "#a9bd0e", // Specify the color for Location4
            "Staten Island", "#b80a35", // Specify the color for Location5
            // Add more matches for other locations and colors as needed
            "#1a5b40" // Default color if there's no match
          ],
           // Adjust the radius as needed
          "line-width": 1
        }
        
      })

      
      // map.addLayer({
      //   "id": "add-locations",
      //   "type": "circle",
      //   "source": "hotspot", // Assuming your GeoJSON data source is named 'hotspot'
      //   "paint": {
      //     "circle-color": 
      //       // hes for other locations and colors as needed
      //       "#6f6064" // Default color if there's no match
      //     ,
      //     "circle-radius":7, // Adjust the radius as needed
      //     "circle-opacity": 0.5
      //   },
      //   minzoom: 10, // Set the minimum zoom level for the layer
      //  // Set the maximum zoom level for the layer
      // });
 
      let newLayerId = 0;
      const boroughCodes = {
  'Bronx': 'BX',
  'Queens': 'QU',
  'Manhattan': 'MN',
  'Brooklyn': 'BK',
  'Staten Island': 'SI'
};
const boroughCoordinates = {
  Bronx: [-73.8568, 40.8572],     
  Queens: [-73.8258, 40.7128],    
  Manhattan: [-74.006, 40.7128], 
  Brooklyn: [-73.9465, 40.6782],  
  'Staten Island': [-74.1531, 40.5795]  
};
    map.on('click',"add-boro",(event)=>{
      const layerId = `new-layer-${newLayerId}`;
      const clickedBorough = event.features[0].properties.boro_name;

      
      const centerCoordinates = boroughCoordinates[clickedBorough];
      const zoomLevel = 12; 
      new mapboxgl.Popup()
      map.flyTo({
        center: centerCoordinates,
        zoom: zoomLevel,
        essential: true 
      });
      map.addLayer({
        "id": layerId,
        "type": "circle",
        "source": "hotspot", // Assuming your GeoJSON data source is named 'hotspot'
        "paint": {
          "circle-color": [
            "match",
            ["get",  `Borough`], // Assuming "Location" is a property in your GeoJSON with location identifiers
            `${boroughCodes[event.features[0].properties.boro_name]}`, "#0c9c30", // Specify the color for Location1
          "#6f6064"
          ],
           // Adjust the radius as needed
          "circle-radius": 8
        },
        minzoom: 10, // Set the minimum zoom level for the layer
       // Set the maximum zoom level for the layer
      });
      console.log(boroughCodes[event.features[0].properties.boro_name])
      newLayerId++;
    })
//      map.on('click', 'add-locations', (event) => {
//   const coordinates = event.features[0].geometry.coordinates; // Assuming it's in the format [lng, lat]
//   if (coordinates && coordinates.length === 2) {
//     new mapboxgl.Popup()
//       .setLngLat(coordinates)
//       .setHTML(`<strong>Borough:</strong> ${event.features[0].properties.Borough}`)
//       .addTo(map);
//   } else {
//     console.error('Invalid coordinates format:', coordinates);
//   }
// });

          
         });
          
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [cen]);


  return <div className="map-container mainsize" ref={mapContainerRef} />;
};

export default Map;

