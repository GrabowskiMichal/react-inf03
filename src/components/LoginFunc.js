import axios from 'axios';
import { useState } from "react";

const LoginFunc = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http:/localhost:8081/login', {username, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return ( 
        <div className="LoginFunc">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Podaj nazwę użytkownika:" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Hasło:</label>
                    <input type="password" placeholder="Podaj hasło:" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button>Login</button>
            </form>
        </div>
     );
}
 
export default LoginFunc;