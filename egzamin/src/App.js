import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

/*
nazwa funkcji: App
opis funkcji: Wyświetla interfejs menedżera haseł.
Umożliwia wpisanie adresu WWW, loginu i hasła oraz
zapisanie i wyświetlenie wprowadzonych danych.
parametry: brak
zwracany typ i opis: JSX – interfejs użytkownika aplikacji.
autor: numer zdającego
*/

function App() {

  const [checked, setChecked] = useState(true);
  const [address, setAddress] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [savedData, setSavedData] = useState(null);

/*
nazwa funkcji: submit
opis funkcji: Obsługuje zapis danych po kliknięciu przycisku.
Jeśli zaznaczono opcję automatycznego hasła, ustawia
hasło na odpowiedni tekst. Następnie zapisuje adres,
login i hasło w stanie savedData.
parametry: e – obiekt zdarzenia używany do zapobiegania
domyślnej akcji formularza.
zwracany typ i opis: brak – funkcja nie zwraca wartości.
autor: numer zdającego
*/
    const submit = (e) => {
      e.preventDefault();

       let newPassword = password;

      if (checked) {
        newPassword = "automatycznie wygenerowane hasło";
        setPassword(newPassword);
      }

      setSavedData({
        address: address,
        login: login,
        password: newPassword
      });
    };


  return (
  <div className="strona">
      <div>
      <h1>Menadżer hasel wykonal: FL</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupaddress">
        <Form.Label>Adress WWW:</Form.Label>
        <Form.Control type="text" placeholder="Adres strony WWW" onChange={(e) => setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGrouplogin">
        <Form.Label>Login:</Form.Label>
        <Form.Control type="text" placeholder="Twój login" onChange={(e) => setLogin(e.target.value)} />
      </Form.Group>
    </Form>
    <Form.Check aria-label="option 1" label="Wygeneruj hasło" checked = {checked} onChange={(e) => setChecked(e.target.checked)} />
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Haslo:</Form.Label>
        <Form.Control type="password" disabled = {checked} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={submit}>Zapisz</Button>
    </div>
    <div>
    {savedData ? (
      <>
        <p className="p-2 text-primary lead">Adres: {savedData?.address}</p>
        <p className="p-2">Login: {savedData?.login}</p>
        <p className="p-2">Hasło: {savedData?.password}</p>
      </>
    ) : 
      <>
        <p className="p-2 text-primary lead">Adres:</p>
        <p className="p-2">Login:</p>
        <p className="p-2">Hasło:</p>
      </>
    }
    </div>
  </div>
  );
}

export default App;
