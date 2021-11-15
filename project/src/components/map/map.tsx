import React, {useRef, useEffect} from 'react';
import {Offers} from '../../types/offers';
import useMap from '../../hooks/use-map';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../utils/const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  currentCityOffers: Offers,
  selectedOfferId: number | null,
}

function Map({currentCityOffers, selectedOfferId}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCityOffers);

  useEffect(() => {

    const defaultCustomIcon = new Icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const currentCustomIcon = new Icon({
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    if (map) {

      if (currentCityOffers[0]) {
        map.setView({
          lat: currentCityOffers[0].city.location.latitude,
          lng: currentCityOffers[0].city.location.longitude,
        },
        currentCityOffers[0].city.location.zoom,
        );
      }

      const markerList: Marker[] = [];
      currentCityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId !== null && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon)
          .addTo(map);

        markerList.push(marker);
      });

      return () => {markerList.forEach((point) => map.removeLayer(point));};
    }
  }, [map, currentCityOffers, selectedOfferId]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
