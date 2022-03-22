import L from 'leaflet';
import RedMarker from "../../Assets/marker-red.png";
import BlueMarker from "../../Assets/markerblue.png";

export const iconRed = new L.Icon({
    iconUrl: RedMarker,
    iconRetinaUrl: RedMarker,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
});

export const iconBlue = new L.Icon({
  iconUrl: BlueMarker,
  iconRetinaUrl: BlueMarker,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
});