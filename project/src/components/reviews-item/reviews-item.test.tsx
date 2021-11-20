import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewsItem from './reviews-item';
import {makeFakeOfferComment} from '../../utils/mock';

const history = createMemoryHistory();
const mockComment = makeFakeOfferComment();

describe('Component: ReviewsItem', () => {
  it ('should render correctly', () => {
    render(
      <Router history={history}>
        <ReviewsItem comment={mockComment} />
      </Router>);

    expect(screen.getByTestId('rating')).toBeInTheDocument();
  });

});
