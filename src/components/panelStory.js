import React, { useState } from 'react';
import ImageFontana from '../components/imageFontana'

const PanelStory = props => {

  const [isExpanded, setIsExpanded] = useState(false);

  const onOpenMarker = props.onOpenMarker;
  const isOpened = props.isOpened;
  const setIsOpened = props.setIsOpened;
  const openedStory = props.openedStory;
  const isMobile= props.isMobile;
      

  return (
    <div key={openedStory.id} 
      style={{
        width: isMobile ? `100%`:`80%`,
        maxWidth: `max-content`,
        height:  isMobile ? (isExpanded ? `100%` : `20%`):`100%`,
        backgroundColor: `#FFF`,
        zIndex: `1100`,
        position: `fixed`,
        right: `0`,
        bottom: `0`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `flex-start`,
        padding: `25px`,
        boxShadow: isMobile ? `0px -2px 4px rgba(0, 0, 0, 0.25)` : `-2px 4px 4px rgba(0, 0, 0, 0.25)`,
        borderRadius: isMobile ? `10px 10px 0 0 `: `10px 0px 0px 10px`,
        transition: `all 0.3s cubic-bezier(0.27, 0.01, 0.36, 1) 0s`
      }} >
        {/* Close button for non-mobile */}
        { !isMobile &&
          <div style={{
            position: `absolute`,
            top: `15px`,
            right: `15px`
          }}>
            <button style={{ padding: `15px 10px`,
                              backgroundColor: `transparent`,
                              border: `none`,
                              cursor: `pointer`}}
                    onClick={ () => setIsOpened(false)}
            >
              <div style={{
                height: `2px`,
                width: `15px`,
                backgroundColor: `grey`,
                transform: `rotate(45deg)`
              }}>
                <div style={{
                  height: `2px`,
                  width: `15px`,
                  backgroundColor: `grey`,
                  transform: `rotate(90deg)`
                }}></div>
              </div>
            </button>
          </div>
        }
        {/* TODO: To expend/collapse button-divider for mobile */}
        {isMobile &&
          <button style={{
            backgroundColor: `transparent`,
            padding: `10px`,
            cursor: `pointer`,
            border: `none`
          }} onClick={() => setIsExpanded(!isExpanded)}><div style={{
            height: `2px`,
            width: `50px`,
            backgroundColor: `#CCC`
          }}></div></button>

        }
      {/* Photo */}
      <div className='story-panel photo-side'
        style={{ flex: `1`,
          height: `100%`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          padding: `0.5em`
        }}>
        <ImageFontana alt={openedStory.title} filename={openedStory.imgPath}
                        style={{
                        maxHeight: `300px`
                      }}/>
      </div>
      <div className='story-panel text-side'
      style={{
        flex: `1`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        margin: `2em 0.5em`,
        maxHeight: `calc(100% - 60px)`,
        overflowX: `scroll`
      }}>
        <h3 dangerouslySetInnerHTML={{__html: openedStory.title}}
            style={{
              textAlign: `center`,
              fontSize: `1.6em`
            }}></h3>
        <p dangerouslySetInnerHTML={{__html: openedStory.story}}
            style={{ fontSize: `14px`,
                      paddingBottom: `80px`}}>
        </p>
        <div style={{ background: `linear-gradient(180deg, rgba(255, 255, 255, 0) -20.75%, #FFFFFF 71.7%`,
                        minHeight: `150px`,
                        position: `absolute`,
                        bottom: `0`,
                        minWidth: `calc( (( 100% - 50px) / 2) - (2em))`}}></div>
      </div>
    </div>
  )
}

export default PanelStory;