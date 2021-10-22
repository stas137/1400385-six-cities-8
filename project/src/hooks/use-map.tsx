import {useState, useEffect, MutableRefObject} from 'react';
import {Offers} from '../types/offers';
import {Map, TileLayer} from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offers: Offers,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instanceMap = new Map(mapRef.current);

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instanceMap.addLayer(layer);

      setMap(instanceMap);
    }
  }, [map, mapRef, offers]);

  return map;
}

export default useMap;
