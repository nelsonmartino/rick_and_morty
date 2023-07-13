import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import style from './Detail.module.css'

export default function Detail() {

    const {id}=useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.info}>
            <div className={style.text}>
                <h2>{character.id}</h2>
                <h2>{character.name}</h2>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin}</h2>
            </div>
            <img src={character.image} alt={character.name} />
        </div>
    )
}