import { ADD_FAV, REMOVE_FAV, GET_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:
    //     return {
    //         ...state,
    //         myFavorites:[...state.myFavorites, action.payload],
    //         allCharacters:[...state.allCharacters, action.payload],
    //     };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //     allCharacters: state.allCharacters.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //   };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case GET_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };
    case "ORDER":
      let copy = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copy.sort((a, b) => {
          return action.payload === "A" ? a.id - b.id : b.id - a.id;
        }),
      };

      return;
    default:
      return { ...state };
  }
};

export default rootReducer;
