import React, {useRef, useEffect, useState} from 'react';
import {Offers, Offer} from '../../types/offers';
import useMap from '../../hooks/use-map';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  currentCityOffers: Offers,
  selectedOffer: Offer | undefined,
}

function Map({currentCityOffers, selectedOffer}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCityOffers);
  const [points, setPoints] = useState<Marker[]>([]);

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

  useEffect(() => {
    if (map) {

      map.setView({
        lat: currentCityOffers[0].lat,
        lng: currentCityOffers[0].lng,
      },
      10,
      );

      points.forEach((point) => map.removeLayer(point));

      const markerList: Marker[] = [];
      currentCityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon)
          .addTo(map);

        markerList.push(marker);
      });

      setPoints(markerList);
    }
  }, [map, currentCityOffers, selectedOffer]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
