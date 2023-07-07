import style from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

export default function Form ({login}) {

    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const property=event.target.name;
        const value=event.target.value;
        setUserData({...userData,[property]:value})
        setErrors(validation({...userData,[property]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit}>

                {/* Dos metodos diferentes de combinar label e input:

                Método 1: */}
                <label htmlFor="email">Correo electrónico:<input type="text" name="email" value={userData.email} onChange={handleChange} placeholder='nelson@email.com'/></label>
                <p>{errors.email}</p>

                {/* Método 2: */}
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder='asd123'/>
                <p>{errors.password}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}