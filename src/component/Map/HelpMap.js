import "leaflet/dist/leaflet.css";
import  React,{ useState } from 'react';
import { MapContainer, Rectangle, TileLayer, useMap } from 'react-leaflet';
import { useCoordinatesContext } from "../../Context/MapRelatedContext";
import './testmap.css';


export default function HelpMap(){//
  const [center,setCenter]=useState();
  const { viewports }=useCoordinatesContext();
 // console.log(`value of viewports are ${viewports}`)

  // const [c,setC]=useState(true);
const [rectangle,setRectangle]=useState(viewports);  
  const x=(viewports[0][0]+viewports[1][0])/2;
  const y=(viewports[0][1]+viewports[1][1])/2;
  
  const [old_x,setOld_x]=useState();
  const [old_y,setOld_y]=useState();
   if( x!==old_x && y!==old_y ){
    setCenter([x,y]);
    setRectangle(viewports);
    setOld_x(x);
    setOld_y(y);
}
  

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  map.fitBounds(rectangle); 
  return null;
}
const blackOptions = { color: 'teal' }
// }
  // setCenter([ x,y ]);
  
  return(
    <MapContainer
        style={{ height: "100vh", width: "100%" }}
        center={center}
        zoom="10"
        scrollWheelZoom={false}
        >
        <TileLayer
            // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={center} />
        <Rectangle bounds={rectangle} pathOptions={blackOptions}   />
    </MapContainer>
  )

}