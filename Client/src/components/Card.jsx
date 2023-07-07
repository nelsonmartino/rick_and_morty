// export default function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          {/* <h2>{props.character.id}</h2> */}
//          <h2>{props.character.name}</h2>
//          {/* <h2>{props.character.status}</h2> */}
//          <h2>{props.character.species}</h2>
//          <h2>{props.character.gender}</h2>
//          {/* <h2>{props.character.origin.name}</h2> */}
//          <img src={props.character.image} alt='' />
//       </div>   
//    );
// }

// <VERSION EN CSS MODULES>

// import style from './Card.module.css'

// export default function Card({character,onClose}) {
//    return (
//       <div className={style.book}>
//          <p>
//             <button onClick={onClose}>X</button>
//             <h2>{character.species}</h2>
//             <h2>{character.gender}</h2>
//             <img src={character.image} alt='' />
//          </p>
//          <div className={style.cover}>
//             <h2>{character.name}</h2>
//          </div>
//       </div>   
//    );
// }

// </VERSION EN CSS MODULES>

// <VERSIÓN EN STYLED COMPONENTS> //

import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../redux/actions";

const Base=styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 20px;
   border: solid black 3px;
   margin: 10px;
   background-color: lightyellow;
   overflow: hidden;
   transition: all 0.5s;
   &:hover{
      background-color: yellow;
   }
`;

const Imagen=styled.img`
   width: 100%
`;

const Info=styled.h2`
   margin: 0;
`;

const CloseButton=styled.button`
   margin: 0 0 0 250px;
`
const FavButton=styled.button`
   margin: 0 250px 0 0;
`

// Desestructurando props
export default function Card({character,onClose}) {

   const myFavorites=useSelector((state) => state.allCharacters)

   const {pathname} = useLocation();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const dispatch = useDispatch();

   // REDUX: En este caso de usaron los hooks de componentes funcionales. Ejemplo de uso de mapStateToProps y mapDispatchToProps en archivos de Code Review

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(character.id))
      } else {
         setIsFav(true);
         dispatch(addFav(character))
      }
   }

   return (
      <Base>
         <div>
            {
               isFav ? (
                  <FavButton onClick={handleFavorite}>❤️</FavButton>
               ) : (
                  <FavButton onClick={handleFavorite}>🤍</FavButton>
               )
            }
            {pathname==='/home' && <CloseButton onClick={()=> onClose(character.id)}>X</CloseButton>}
         </div>
         <h2>{character.id}</h2>
         <Link to={`/detail/${character.id}`}><Info>{character.name}</Info></Link>
         {/* <h2>{character.status}</h2> */}
         <Info>{character.species}</Info>
         <Info>{character.gender}</Info>
         {/* <h2>{character.origin.name}</h2> */}
         <Imagen src={character.image} alt='' />
      </Base>
   );
}

// </VERSIÓN EN STYLED COMPONENTS> //

// En code review
// export default function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <h2>{props.id}</h2>
//          <h2>{props.name}</h2>
//          <h2>{props.status}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <h2>{props.origin}</h2>
//          <img src={props.image} alt='' />
//       </div>
//    );
// }