import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { filterCards, getFav, orderCards } from "../redux/actions";
// import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Base = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export default function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFav);
  }, []);

  const characters = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFIlter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFIlter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <Base id="characters">
        {characters.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      </Base>
      ;
    </div>
  );
}
