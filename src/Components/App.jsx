import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class App extends Component {

//Below is only if you are using superagent
  componentDidtMount() {
    console.log('componentDidtMount')
  }

  render(){

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

//Below is where you create your pins/markers
    const markers = [
      {
        location:{
          lat: 40.7575285,
          lng: -73.9884469
        }
      }
    ]

    return (
      <div>

{/* *Below we are creating space for the map to showup */}
        <div style={{width:300, height:600, background: 'red'}}>
{/* *Below Map is inheriting the center property + markers property from above   */}
          <Map center={location} markers={markers} />
        </div>

      <Places />
    </div>
      )
  }
}

export default App;
