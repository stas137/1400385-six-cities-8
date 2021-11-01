import {Offer, Offers, OffersFromServer} from './types/offers';
import {AuthorizationStatus} from './const';

export const getMonthName = (monthNumber: number): string => {
  const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return monthName[monthNumber];
};

export const compareLowToHigh = (a:Offer, b:Offer):number => (a.price > b.price ? 1 : -1);
export const compareHighToLow = (a:Offer, b:Offer):number => (a.price > b.price ? -1 : 1);
export const compareTopRated = (a:Offer, b:Offer):number => (a.rating > b.rating ? -1 : 1);

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

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const adaptToClient = (data: OffersFromServer): Offers => {
  const offersFromServers = [...data];
  const offers: OffersFromServer = offersFromServers.map((offerFromServer) => {
    const offer = Object.assign({},
      offerFromServer,
      {
        isPremium: offerFromServer['is_premium'],
        isFavorite: offerFromServer['is_favorite'],
        maxAdults: offerFromServer['max_adults'],
        previewImage: offerFromServer['preview_image'],
      });

    delete offer['is_premium'];
    delete offer['is_favorite'];
    delete offer['max_adults'];
    delete offer['preview_image'];

    return offer;
  });
  return [...offers] as Offers;
};
