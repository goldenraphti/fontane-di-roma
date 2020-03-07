import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import "../styles/mapui.css"
import {iconMapPin , iconMapPinOpened} from '../images/icons/leaflet-icons'
import ImageFontana from '../components/imageFontana'

export default class MyMap extends Component {
  state = {
    lat: 41.895,
    lng: 	12.475,
    zoom: 14,

    isPopupOpened: false,
    fountainIdPopupOpened: null,
  }


  // light with label
  CartoDB_Positron = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    // url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    url: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
  }


  render() {
    const position = [this.state.lat, this.state.lng]
    const arrFountains = this.props.arrFountains;

    if (typeof window !== 'undefined') {
      return (
        <Map center={position} zoom={this.state.zoom} 
        style={{
          width: `100%`,
          height: `${window.innerHeight}px`,
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
                      onClick={ () => {
                        if (this.props.isMobile) {
                          this.props.onOpenMarker(fountain);
                          this.setState({isPopupOpened: false});
                        }
                      }}
                      icon={ ( this.props.isOpened && fountain.id === this.props.openedStory.id) || (this.state.isPopupOpened && this.state.fountainIdPopupOpened === fountain.id) ? iconMapPinOpened : iconMapPin  } >
                { ( !this.props.isMobile && (!this.props.isOpened  || (this.props.isOpened && fountain.id !== this.props.openedStory.id)))  &&
                  <Popup
                    id={fountain.id}
                    onOpen={ () => {
                      this.props.setIsOpened(false);
                      this.setState({isPopupOpened: true});
                      this.setState({fountainIdPopupOpened: fountain.id});  }}
                    onClose={ () => {
                      this.setState({isPopupOpened: false});
                      this.setState({fountainIdPopupOpened: null})} }
                  >
                    <div key={fountain.id}
                    
                      style={{
                        width: `150px`,
                        height: `340px`,
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `center`,
                        alignItems: `center`
                      }} >
                      <h3 style={{
                        fontSize:`18px`,
                        marginTop: `10px`,
                        marginBottom: `0`
                      }} dangerouslySetInnerHTML={{__html: fountain.title}}></h3>
                      <p  style={{
                        marginTop: `10px`,
                        fontSize:`12px`,
                        maxHeight:`50px`,
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        display: `-webkit-box`,
                        WebkitBoxOrient: `vertical`,
                        WebkitLineClamp: `3`, /* number of lines to show */
                      }} dangerouslySetInnerHTML={{__html: fountain.story}}></p>
                      <div style={{ height: `auto`,
                                    width: `120px`  }}>
                        <ImageFontana alt={fountain.title} filename={fountain.imgPath} />
                      </div>
                      <button style={{
                        color: `blue`,
                        textDecoration: `underline`,
                        backgroundColor: `transparent`,
                        border: `none`,
                        cursor: `pointer`,
                        marginTop: `10px`,
                        marginBottom: `0  `
                      }} onClick={ () => { 
                          this.props.onOpenMarker(fountain);
                          this.setState({isPopupOpened: false}); } }>See story</button>
                    </div>
                  </Popup>
                }
              </Marker>
            )
          }
        </Map>
      )
    }
    return null
  }
}
