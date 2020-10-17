import React, { Component } from 'react'
import {InfoWindow,withScriptjs,withGoogleMap,GoogleMap,Marker,} from "react-google-maps";
import Geocode from 'react-geocode'
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';

Geocode.setApiKey("AIzaSyCLPZILm40u5DBgDuogKOOsk9REy9APgOM")

class Map extends Component {

    //Define map details 
    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 6.9271,
            lng: 79.8612
        },
        markerPosition: {
            lat: 6.9271,
            lng: 79.8612
        }
    }
    // Get city from the geocode
    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    //Get area from the geocode
    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    //Get state from the geocode
    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    // After dragging marker from default place to another place, get the details to the InfoWindow component from google react map 
    onMarkerDragEnd = (event) => {
        let newLat =  event.latLng.lat();
        let newLng = event.latLng.lng();

        //Latitude and longitude value of new place after marker dragged to new place
         console.log('newLat', newLat)
         console.log('newLng', newLng)

        Geocode.fromLatLng(newLat,newLng)
        .then(response => {
            //console.log('response', response)
            const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        )
    }
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
            >
              <Marker
                draggable={true}
                onDragEnd={this.onMarkerDragEnd}
                position={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
              >
                <InfoWindow>
                    <div>
                        Hello
                    </div>
                </InfoWindow>
              </Marker>
            </GoogleMap>
          ));
          
        return (
            <div style={{ padding: '2px' }}>
                 <h1>Google Map </h1>
                {/*} <Descriptions bordered>
                    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
                    <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
                    <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
                    <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
                </Descriptions> */}
               
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLPZILm40u5DBgDuogKOOsk9REy9APgOM&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />   
            </div>
        )
    }
}

//   AIzaSyAIO77jnvNhYlmWe7B31Rlna-2qv2-orwU 
export default Map
