import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class MyMap extends Component {
  state = {
    lat: 41.895,
    lng: 	12.475,
    zoom: 14,
  }

  // light with label
  CartoDB_Positron = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
  }


  render() {
    const position = [this.state.lat, this.state.lng]
    // const { options } = this.props
    const arrFountains = this.props.arrFountains; 

    if (typeof window !== 'undefined') {
      return (
        <Map center={position} zoom={this.state.zoom} 
        style={{
          width: `100%`,
          height: `600px`,
        }}
        >
          <TileLayer
          attribution={this.CartoDB_Positron.attribution}
          url={this.CartoDB_Positron.url}
          />
          {arrFountains.map( fountain =>          
              <Marker position={fountain.latLong.split(', ')} key={fountain.id}>
                <Popup>
                  <span dangerouslySetInnerHTML={{__html: fountain.title}}></span> <br /> Easily customizable.
                </Popup>
              </Marker>
            )
          }
        </Map>
      )
    }
    return null
  }
}
