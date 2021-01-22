import React, { useContext, useEffect } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import ISSContext from '../Context/ISSContext';
// eslint-disable-next-line no-unused-vars
import getCurrentISSLocation   from '../Services/issAPI';
import useTimer from '../Effects/useTimer';

function ISSLocation() {
//   componentDidMount() {
//     const { getCurrentISSLocation } = this.context;
// s
//     const now = new Date();
//     document.title = now.toLocaleTimeString();

//     this.timer = setInterval(
//       getCurrentISSLocation,
//       2000,
//     );
//   }

//   componentDidUpdate () {
//     const now = new Date();
//     document.title = now.toLocaleTimeString();
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

  const {
    error,
    isFetching,
    latitude,
    longitude,
    getCurrentISSLocation,
    
  } = useContext(ISSContext);
  const isLocationPresent = latitude && longitude;

  useTimer(getCurrentISSLocation, 2000)

  
  // useEffect(() => {
  //   const timer = setInterval(
  //     getCurrentISSLocation,
  //     2000
  //   )
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [])

  // [] -> didmount
  //  NADA -> didupdate
  // [estado] -> update só quando atualiza o estado especificado
  // return  -> willUnmount

  useEffect(() => {
    const now = new Date();
    document.title = now.toLocaleTimeString();
  })

  return (
    <div>
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={700}
          height={450}
          minZoom={1}
          maxZoom={20}
          zoom={1}
        >
          {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
        </Map>
      </div>
      {isFetching && 'Loading...'}
      {!isFetching && isLocationPresent && `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`}
      {!isFetching && error}
    </div>
  );

}

export default ISSLocation;