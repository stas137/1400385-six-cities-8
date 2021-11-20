import {render, screen} from '@testing-library/react';
import {makeFakeOfferComments} from '../../utils/mock';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewsList from './reviews-list';

const history = createMemoryHistory();
const mockComments = makeFakeOfferComments();

describe('Component: ReviewList', () => {
  it ('should render correctly', () => {
    render(
      <Router history={history}>
        <ReviewsList comments={mockComments}/>
      </Router>);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

});
