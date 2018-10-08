import { combineReducers } from "redux";
import {
  FETCH_PAINTINGS,
  DELETE_PAINTING,
  SELECT_ACTIVE_PAINTING
} from "./actions/types";

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];

    case DELETE_PAINTING:
      return [...state.filter(painting => painting.id !== action.id)];
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  // debugger;
  switch (action.type) {
    case FETCH_PAINTINGS:
      return action.payload[0].id;
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
