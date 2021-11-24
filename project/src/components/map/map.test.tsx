import {render, screen} from '@testing-library/react';
import Map from './map';
import {AuthorizationStatus} from "../../utils/const";
import {makeFakeOffers} from "../../utils/mock";

describe('Component: Map', () => {
  it('should render correctly', () => {

    const mockProps = {
      offers: makeFakeOffers(),
    };

    render(
      <Map
        currentCityOffers={mockProps.offers}
        selectedOfferId={0}
      />,
    );

    expect(screen.getByTestId(/mapLeaflet/i)).toBeInTheDocument();
  });
});
