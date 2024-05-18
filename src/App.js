import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }
    let dlugosc;

    if (email.length < 5){
        dlugosc = <div> Ale masz krótki adres! </div>;
    } else if (email.length<10){
        dlugosc = <div> Twój adres jest git </div>;
    }
    else if(email.length>10) {
        dlugosc = <div> za długi </div>;
    }

  return (
      <div>
        <h1>System do zapisów na zajęcia</h1>
        <h2>Twój e-mail to {email}</h2>
          {dlugosc}
        <input type="text" value= {email} onChange={handleChange}/>
      </div>
  );
}
export default App;
