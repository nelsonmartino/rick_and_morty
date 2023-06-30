export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV';
//Estas constantes tambien pueden crearse en un archivo separado (action_types) y luego importarse de este.


// Las dos funciones hacen lo mismo pero están expresadas de diferente manera.
// La primera usa llaves y la palabra return para retornar el objeto.
// La segunda se escribe en la misma línea sin usar llaves ni return. Para que no se confundan las llaves del objeto, se agregan paréntesis.

export const addFav = (character) => {
    return {type:ADD_FAV, payload: character}
}

export const removeFav = (id) => ({type:REMOVE_FAV, payload: id})

export const filterCards = (gender) => {
    return {type:'FILTER', payload: gender}
}

export const orderCards = (orden) => {
    return {type: 'ORDER', payload: orden}
}