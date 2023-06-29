import { useState } from 'react';
import styled from 'styled-components'

const DivSearch=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: start;
   margin: 20px 0 20px 20px;
`;


export default function SearchBar({onSearch}) { //Destructuring de props
   
   const [id,setId] = useState("");

   const handleChange=(event) => {
      setId(event.target.value)
   }

   const search = () => {
      onSearch(id);
      setId('');
   }

   const randomId=Math.round(Math.random()*826)
   // console.log(id)
   return (
      <DivSearch>
         <input type='search' onChange={handleChange} value={id} placeholder='Ingrese un id...'/>
         <button onClick={search}>Agregar</button>
         <button onClick={() => onSearch(Math.round(randomId))}>Random</button>
      </DivSearch>
   );
}
