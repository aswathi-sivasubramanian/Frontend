import React, { useRef, useEffect } from 'react'
// import '../styles/Sizing.css'
import "../styles/Map.css"
import mapboxgl from "mapbox-gl";
import features from './trees.json';
import boro from './BoroughNYC.json'
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXN3YXRoaXMwNyIsImEiOiJjbG1pcG5nbjcwc3NiM2xuc3dmZHc4bHhxIn0.Sjxf7YoCzfBIm7t0zbnFnQ";
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
            ["get", "boro_name"], 
            "Bronx", "#a8f7bc",
            "Queens", "#a4dafb", 
            "Manhattan", "#fba4f6", 
            "Brooklyn", "#f1fba4", 
            "Staten Island", "#f97f9d", 
          
            "#44AB80"
          ],
        
          "fill-opacity": 0.2
        }
        
      })
      map.addLayer({
        'id':"add-border",
        'type':"line",
        "source":"boronyc",
        "paint": {
          "line-color": [
            "match",
            ["get", "boro_name"], 
            "Bronx", "#0c9c30", 
            "Queens", "#076197", 
            "Manhattan", "#921b8b",
            "Brooklyn", "#a9bd0e", 
            "Staten Island", "#b80a35", 
            "#1a5b40"
          ],
         
          "line-width": 2,

        }
        
      })   
         map.addLayer({
        "id": "accesspoints",
        "type": "circle",
        "source": "hotspot",
        "paint": {
          "circle-color": 
          "#002e63" ,  
          "circle-radius": 8,
          "circle-opacity":0.4
        },
        minzoom: 11, 
      });
          
map.on('click',"accesspoints",(event)=>{
    new mapboxgl.Popup()
    .setLngLat(event.features[0].geometry.coordinates)
    .setHTML(` Device ID :${event.features[0].properties.OBJECTID}</br>Boroname:${event.features[0].properties.Borough}</br>Hotspot Provider: ${event.features[0].properties.Provider}</br>Service: ${event.features[0].properties.Type}</br>
    `)
    .addTo(map);
   
})
    map.on('click',"add-boro",(event)=>{
      const layerId = `accesspoints`;
      const clickedBorough = event.features[0].properties.boro_name;

      
      const centerCoordinates = boroughCoordinates[clickedBorough];
      const zoomLevel = 11; 
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
      }
      if (map.getSource(layerId)) {
        map.removeSource(layerId);
      }
      new mapboxgl.Popup()
      map.flyTo({
        center: centerCoordinates,
        zoom: zoomLevel,
        essential: true 
      });
      map.addLayer({
        "id": layerId,
        "type": "circle",
        "source": "hotspot",
        "paint": {
          "circle-color": [
            "match",
            ["get",  `Borough`], 
            `${boroughCodes[event.features[0].properties.boro_name]}`, "#954535",
          "rgba(255, 0, 0, 0)"
          ],
           
          "circle-radius": 8,
          "circle-opacity":0.2
        },
        minzoom: 11, 
      });
      console.log(event.features[0].properties.boro_name)
     
    })


          
         });
          
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [cen]);


  return <div className="map-container mainsize" ref={mapContainerRef} style={{backgroundColor:'white'}} />;
};

export default Map;

