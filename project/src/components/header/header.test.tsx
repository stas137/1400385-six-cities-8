import {render, screen} from '@testing-library/react';
import Header from './header';
import {AuthorizationStatus} from '../../utils/const';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const history = createMemoryHistory();

describe('Component: Header', () => {

  it('should render correctly if user is Authorized', () => {

    const mockProps = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        avatarUrl: 'www.yandex.ru/keks.jpg',
        email: 'keks@mail.ru',
        id: 1,
        isPro: true,
        name: 'keks',
      },
    };

    render(
      <Router history={history}>
        <Header
          authorizationStatus={mockProps.authorizationStatus}
          userData={mockProps.userData}
          onClickHandler={jest.fn}
        />
      </Router>,
    );

    expect(screen.getByText(mockProps.userData.email)).toBeInTheDocument();
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render correctly if user is not Authorized', () => {

    const mockProps = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        avatarUrl: '',
        email: '',
        id: 0,
        isPro: false,
        name: '',
      },
    };

    render(
      <Router history={history}>
        <Header
          authorizationStatus={mockProps.authorizationStatus}
          userData={mockProps.userData}
          onClickHandler={jest.fn}
        />
      </Router>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
  });
});
