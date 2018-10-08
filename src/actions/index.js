import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, FILTER_MUSEUMS} from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function onHandleDelete(activeID) {
  return { type: DELETE_PAINTING, id: activeID, payload: artworks };
}

export function filterMuseums(museumID) {
  return { type: FILTER_MUSEUMS, id: museumID}
}
