import L from 'leaflet'

let iconMapPin,
iconMapPinOpened;

if (typeof window !== 'undefined') {
    
    iconMapPin = new L.Icon({
        iconUrl: require('./map-pin-violet.svg'),
        iconRetinaUrl: require('./map-pin-violet.svg'),
        iconAnchor: [11, 22],
        popupAnchor: [0, -35],
        shadowUrl: require('./marker-shadow.png'),
        shadowSize: [29, 40],
        shadowAnchor: [8, 35],
        iconSize: [22, 28],
        className: 'leaflet-div-icon'
    });


    iconMapPinOpened = new L.Icon({
        iconUrl: require('./map-pin-violet-opened.svg'),
        iconRetinaUrl: require('./map-pin-violet-opened.svg'),
        iconAnchor: [11, 22],
        popupAnchor: [0, -35],
        shadowUrl: require('./marker-shadow.png'),
        shadowSize: [29, 40],
        shadowAnchor: [8, 35],
        iconSize: [22, 28],
        className: 'leaflet-div-icon'
    });

}
export { iconMapPinOpened };
export { iconMapPin };