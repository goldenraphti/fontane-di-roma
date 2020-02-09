import React, { Component, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import ImageFontana from '../components/imageFontana'
import "./mapui.css"
import {iconMapPin , iconMapPinOpened} from '../images/icons/leaflet-icons'

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
    const arrFountains = this.props.arrFountains; 

    if (typeof window !== 'undefined') {
      return (
        <Map center={position} zoom={this.state.zoom} 
        style={{
          width: `100%`,
          height: `600px`,
        }}
        onClick={ () => this.props.isOpened && this.props.setIsOpened(false) }
        >
          <TileLayer
          attribution={this.CartoDB_Positron.attribution}
          url={this.CartoDB_Positron.url}
          />
          {arrFountains.map( fountain =>          
              <Marker position={fountain.latLong.split(', ')}
                      key={fountain.id}
                      zIndexOffset={this.props.isOpened && fountain.id === this.props.openedStory.id ? 1000 : 0} 
                      icon={this.props.isOpened && fountain.id === this.props.openedStory.id ? iconMapPinOpened : iconMapPin} >
                <Popup
                  onOpen={ () => { this.props.onOpenMarker(fountain) } }
                >
                  {/* <div key={fountain.id}
                  
                    style={{
                      // width: `80vw`,
                      // height: `100vw`,
                      // backgroundColor: `#999`
                    }} >
                    <h3 dangerouslySetInnerHTML={{__html: fountain.title}}></h3>
                    <p dangerouslySetInnerHTML={{__html: fountain.story}}></p>
                    <div style={{ maxWidth: `200px`,
                                  maxHeight: `200px`  }}>
                      <ImageFontana alt={fountain.title} filename={fountain.imgPath} />
                    </div>
                  </div> */}
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
