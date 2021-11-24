import {renderHook} from '@testing-library/react-hooks';
import useMap from './use-map';
import {makeFakeOffers} from '../utils/mock';

describe('Hook: useMap', () => {

  it('should return Map', () => {

    const mockProps = {
      offers: makeFakeOffers(),
    };

    const mapRef = {current: document.createElement('div')};

    const {result} = renderHook(() =>
      useMap(mapRef, mockProps.offers),
    );

    expect(result.current).toBeTruthy();
  });

});
