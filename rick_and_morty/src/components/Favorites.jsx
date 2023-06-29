import { useSelector } from "react-redux";
// import { useEffect } from "react";
import Card from './Card';
import styled from "styled-components";

const Base=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
`;

export default function Favorites() {

    const characters = useSelector((state) => state.myFavorites)

    return <Base id='characters'>
        {characters.map((character) => {
            return <Card key={character.id} character={character} />
        })}
    </Base>;
}