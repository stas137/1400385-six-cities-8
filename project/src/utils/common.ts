import {
  Offer,
  Offers,
  OffersFromServer,
  OfferFromServer,
  HostFromServer,
  CommentsFromServer,
  Comments,
  Comment
} from '../types/offers';
import {AuthorizationStatus} from './const';

export const getMonthName = (monthNumber: number): string => {
  const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return monthName[monthNumber];
};

export const compareLowToHigh = (a:Offer, b:Offer):number => (a.price > b.price ? 1 : -1);
export const compareHighToLow = (a:Offer, b:Offer):number => (a.price > b.price ? -1 : 1);
export const compareTopRated = (a:Offer, b:Offer):number => (a.rating > b.rating ? -1 : 1);
export const compareCommentDate = (a:Comment, b:Comment):number => (a.date > b.date ? -1 : 1);

export const getRandomInteger = (a = 0, b = 1) => {
  const lower  = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const sortCurrentCityOffers = (selectedSort: string, currentCityOffers: Offers):Offers => {

  switch (selectedSort) {
    case 'Price: low to high':
      return [...currentCityOffers].sort(compareLowToHigh);
      break;
    case 'Price: high to low':
      return [...currentCityOffers].sort(compareHighToLow);
      break;
    case 'Top rated first':
      return [...currentCityOffers].sort(compareTopRated);
      break;
    default:
      return [...currentCityOffers];
      break;
  }
};

export const isCheckedAuthUnknown = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const adaptToClientOffers = (data: OffersFromServer): Offers => {
  const offersFromServers = [...data];
  const offers = offersFromServers.map((offerFromServer) => {

    const host = Object.assign({},
      {
        avatarUrl: offerFromServer.host['avatar_url'],
        id: offerFromServer.host['id'],
        isPro: offerFromServer.host['is_pro'],
        name: offerFromServer.host['name'],
      });

    const offer = Object.assign({},
      {
        bedrooms: offerFromServer['bedrooms'],
        city: offerFromServer.city,
        description: offerFromServer['description'],
        goods: offerFromServer.goods,
        host: host,
        id: offerFromServer['id'],
        images: offerFromServer['images'],
        isFavorite: offerFromServer['is_favorite'],
        isPremium: offerFromServer['is_premium'],
        location: offerFromServer.location,
        maxAdults: offerFromServer['max_adults'],
        previewImage: offerFromServer['preview_image'],
        price: offerFromServer['price'],
        rating: offerFromServer['rating'],
        title: offerFromServer['title'],
        type: offerFromServer['type'],
      });

    return offer;
  });

  return [...offers] as Offers;
};


export const adaptToClientOffer = (data: OfferFromServer): Offer => {
  const offerFromServer = {...data};
  const hostFromServer: HostFromServer = offerFromServer.host;

  const host = Object.assign({},
    {
      avatarUrl: hostFromServer['avatar_url'],
      id: hostFromServer['id'],
      isPro: hostFromServer['is_pro'],
      name: hostFromServer['name'],
    });

  const offer = Object.assign({},
    offerFromServer,
    {
      host: host,
      isPremium: offerFromServer['is_premium'],
      isFavorite: offerFromServer['is_favorite'],
      maxAdults: offerFromServer['max_adults'],
      previewImage: offerFromServer['preview_image'],
    });

  delete offer['is_premium'];
  delete offer['is_favorite'];
  delete offer['max_adults'];
  delete offer['preview_image'];

  return offer as Offer;
};

export const adaptToClientComments = (data: CommentsFromServer): Comments => {
  const commentsFromServer = [...data];

  const comments = commentsFromServer.map((commentFromServer) => {

    const user = Object.assign({},
      {
        avatarUrl: commentFromServer.user['avatar_url'],
        id: commentFromServer.user['id'],
        isPro: commentFromServer.user['is_pro'],
        name: commentFromServer.user['name'],
      });

    const comment: Comment = Object.assign({},
      commentFromServer,
      {
        user: user,
      });

    return comment;
  });

  return comments as Comments;
};
