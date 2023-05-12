import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const locations = [
    {
      name: 'Ubicación 1',
      lat: 51.509865,
      lng: -0.118092,
      img: 'url-de-la-imagen',
      description: 'Descripción de la ubicación 1',
    },
    {
      name: 'Ubicación 2',
      lat: 40.712776,
      lng: -74.005974,
      img: 'url-de-la-imagen',
      description: 'Descripción de la ubicación 2',
    },
  ];

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 51.509865, lng: -0.118092 }}
    >
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => handleMarkerClick(location)}
        />
      ))}
      {selectedPlace && (
        <InfoWindow
          position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <img src={selectedPlace.img} alt={selectedPlace.name} />
            <p>{selectedPlace.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
