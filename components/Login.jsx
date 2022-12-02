import React, { useState } from 'react';
import Styles from '../styles/Login.module.css'

export default function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [Repassword, setRepassword] = useState("");
    const [Skin,setSkin]= useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        axios.post("http://localhost:8000/login", {
            username: username,
            password: password,
            Skin: Skin,
        })
            .then(e => {
                console.log(e)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <body className={Styles.body}>
        <div className="login">
            <h1 className={Styles.h1}>Enregistrez vous</h1>   
            <form onSubmit={handleSubmit}>
                <label className={Styles.username}> 
                    username
                    <input type="text" value={username} onChange={e => setusername(e.target.value)}  />
                </label>
                <label>
                    <p>Mot de passe</p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br/>
                <label>
                    <p>repeter Mot de passe</p>
                    <input type="password" value={Repassword} onChange={e => setRePassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <label for="skins">Choisissez Skin </label>
            <select name="skins" id="skins">
                <option value="Skin1" onChange={e => setSkin(e.target.value)}></option>
                <option value="Skin2" onChange={e => setSkin(e.target.value)}></option>
                <option value="Skin3" onChange={e => setSkin(e.target.value)}></option>
                <option value="Skin4" onChange={e => setSkin(e.target.value)}></option>
            </select>

        </div>
        </body>
    )
}
