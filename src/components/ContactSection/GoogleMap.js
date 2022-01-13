import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import { Component } from "react/cjs/react.production.min";


// This is where we input the google map
function Map() {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{ lat: 50.83349991815755, lng: -0.13957246047302546 }}
        >
            <Marker
                name="Brighton BJJ School"
                position={{ lat: 50.83349991815755, lng: -0.13957246047302546 }}
                onClick={InfoWindow.toggleOpen}
            >
                <InfoWindowComponent />
            </Marker>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const InfoWindowComponent = (props) => {
    return (
        <InfoWindow onCloseClick={props.toggleClose} options={{ maxWidth: 320 }}>
            <div>
                <h3>Brighton BJJ School</h3>
                <span>Vantage Point, New England Street, Brighton,  BN1 4GW</span>
            </div>
        </InfoWindow>
    );
};

export class BjjGoogleMap extends Component {
    render() {
        return (
            // div container style width and height always needs to be set explicitly
            <div style={{ width: "90vw", height: "40vh" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
          libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        );
    }
}