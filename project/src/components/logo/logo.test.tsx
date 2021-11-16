import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';

describe('Component: Logo', ()=>{
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const screen = render(
      <Router history={history}>
        <Logo />
      </Router>
    );

    const imgElement = screen.getByAltText('6 cities logo');

    expect(imgElement).toBeInTheDocument();
  });
});
