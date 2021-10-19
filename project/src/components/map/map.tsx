import React, {useRef, useEffect} from 'react';
import {Offers, Offer} from '../../types/offers';
import useMap from '../../hooks/useMap';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: string,
  offers: Offers,
  selectedOffer: Offer | undefined,
}

function Map({city, offers, selectedOffer}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const filterOffers = offers.filter((offer) => offer.city === city);
  const map = useMap(mapRef, filterOffers);

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
      filterOffers.forEach((offer) => {
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
      });
    }
  }, [map, filterOffers, selectedOffer]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
