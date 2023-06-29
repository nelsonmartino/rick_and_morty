import Card from './Card';
import styled from "styled-components";

// export default function Cards(props) {
//    return <div id='characters'>
//       {props.characters.map((character) => {
//          return <Card character={character} onClose={props.onClose} />
//       })}
//    </div>;
// }

const Base=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
`;

// Desestructurando props
export default function Cards({characters,onClose}) {
   return <Base id='characters'>
      {characters.map((character) => {
         return <Card key={character.id} character={character} onClose={onClose} />
      })}
   </Base>;
}

// Code review
// export default function Cards({characters}) {
//    return <div id='characters'> {
//       characters.map(({id,name, status, species, origin, gender, image})) => 
//          <Card 
//             key={id}
//             id={id}
//             name={name}
//             status={status}
//             species={species}
//             origin={origin.name}
//             gender={gender}
//             image={image}
//             onClose={() => window.alert('Emulamos que se cierra la card')} />
//       )}
//    </div>;
// }