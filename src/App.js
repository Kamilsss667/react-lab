import logo from './logo.svg';
import './App.css';
import "milligram";
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isAuthenticated, setIsAuthenticated] = useState (false);
    function handleChange(event) {
        setEmail(event.target.value);

    }
function logout(){
        setIsAuthenticated(false);
        setEmail(' ');

}
    let content;
    if (isAuthenticated){
        content = <div>
            <h2> Witaj {email}! </h2>
        <button onClick = {logout}>
            Wyloguj
        </button>
        </div>
    }
    else
    {
        content = <div>
            <h2> Zaloguj się swoim e-mailem</h2>
            <input value = {email}
                   type = "text"
                   onChange ={handleChange}
                   className = "dlugiepole"
                   />
            <button onClick={() => setIsAuthenticated(true)}>
                Zaloguj się
            </button>
            </div>
    }

  return (
      <div>
        <h1>Witaj w systemie do zapisów na zajęcia</h1>
          {content}
      </div>
  );
}
export default App;
