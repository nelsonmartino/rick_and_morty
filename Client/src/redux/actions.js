import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
//Estas constantes tambien pueden crearse en un archivo separado (action_types) y luego importarse de este.

// Las dos funciones hacen lo mismo pero están expresadas de diferente manera.
// La primera usa llaves y la palabra return para retornar el objeto.
// La segunda se escribe en la misma línea sin usar llaves ni return. Para que no se confundan las llaves del objeto, se agregan paréntesis.

// export const addFav = (character) => {
//   return { type: ADD_FAV, payload: character };
// };

// export const removeFav = (id) => ({ type: REMOVE_FAV, payload: id });

//Action creator para operaciones asíncronas. En axios.post, va primero la url (endpoint) y luego el body (character)
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  // *** Versión promesa ***
  // return (dispatch) => {
  //   axios.post(endpoint, character).then(({ data }) => {
  //     return dispatch({
  //       type: "ADD_FAV",
  //       payload: data,
  //     });
  //   });
  // };
  // *** Versión Async Await ***
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  // *** Versión promesa ***
  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     return dispatch({
  //       type: "REMOVE_FAV",
  //       payload: data,
  //     });
  //   });
  // };
  // *** Versión Async Await ***
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (gender) => {
  return { type: "FILTER", payload: gender };
};

export const orderCards = (orden) => {
  return { type: "ORDER", payload: orden };
};
