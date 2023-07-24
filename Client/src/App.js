import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
// import axios from 'axios';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  // const EMAIL='nelson@email.com';

  // const PASSWORD='asd123'

  // const login = (userData) => {
  //    if (userData.email===EMAIL && userData.password===PASSWORD) {
  //       setAccess(true);
  //       navigate('/home');
  //    }
  // }

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";

    // *** VERSIÓN PROMESA ***
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //    const { access } = data;
    //    setAccess(data);
    //    access && navigate('/home');
    // });

    // *** VERSIÓN ASYNC AWAIT ***
    try {
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      access && navigate("/home");
    } catch (error) {}
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    let exists = false;
    for (let character of characters) {
      if (character.id === id) {
        window.alert("¡El personaje ya existe!");
        exists = true;
      }
    }

    // En clase se usó el método .find sobre el array characters. Con esto se evita usar la variable adicional exists.

    if (!exists) {
      // *** Versiones con promesas ***
      // Usando fetch

      // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.name) {
      //       setCharacters([...characters, data]);
      //     } else {
      //       window.alert("¡No hay personajes con este ID!");
      //     }
      //   });

      // Usando axios

      // axios(`https://rickandmortyapi.com/api/character/${id}`)
      //    .then(({data}) => {
      //       if (data.name){
      //          setCharacters([...characters,data])
      //       } else {
      //          window.alert('¡No hay personajes con este ID!')  // Con axios se puede usar el método catch, que considera la respuesta en caso de petición con resultado negativo.
      //          }
      //       }
      //    )

      // *** Versión con async await ***
      try {
        const res = await fetch(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        const data = await res.json();
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      } catch (error) {}
    }
  };

  const onClose = (id) => {
    const newChar = characters.filter((character) => character.id !== id);
    setCharacters(newChar);
  };
  // const onSearch=()=> {
  //    const example = {
  //       id: 1,
  //       name: 'Rick Sanchez',
  //       status: 'Alive',
  //       species: 'Human',
  //       gender: 'Male',
  //       origin: {
  //          name: 'Earth (C-137)',
  //          url: 'https://rickandmortyapi.com/api/location/1',
  //       },
  //       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //    };
  //    setCharacters([...characters,example]);
  // }

  const location = useLocation();

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
    </div>
  );
}

export default App;
