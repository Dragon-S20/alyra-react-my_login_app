import React, {useState} from "react";
import LoginForm from "./components/LoginForm"
import Dashboard from "./components/Dashboard";

function App() {
  /*variable qui va réagir avec le changement (state lors de l'authentification) 
  ne s'affiche que si différent de la valeur par défaut = false*/
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const handleLogoutClick = () => {
    setUsername('')
    setLoggedIn(false)
  }
  return (
    <div className="container my-4">
 
      <h1 className="display-3 text-center mb-4">Authentification</h1>
      {!loggedIn && <LoginForm setLoggedIn={setLoggedIn} setUsername={setUsername} />}
      {loggedIn && (
      /*Ouverture d'un fragment et y ajouter le dashboard */
      <>
<Dashboard username={username} />
      <button type="button" className="btn btn-danger" onClick={handleLogoutClick}>
        log out
      </button>
      </>
      )}
    </div>
  );
}

export default App;
