export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

export enum HttpCode {
  Unauthorized = 401,
}

export enum Bookmark {
  Add = 1,
  Delete = 0,
}

export const URL_MARKER_DEFAULT = '../../../img/pin.svg';
export const URL_MARKER_CURRENT = '../../../img/pin-active.svg';

export enum Type {
  Main = 'main',
  Property = 'property',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const COMMENT_MIN_LENGTH = 50;
export const COMMENT_MAX_LENGTH = 300;
