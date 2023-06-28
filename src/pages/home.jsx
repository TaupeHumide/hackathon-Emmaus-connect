import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../../public/Logo-emmaus-connect.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className='container'>
      <div className='screen'>
        <div className='screen-content'>
          <form className='login' onSubmit={handleSubmit}>
            <img className='logo' src={logo} alt='logo emmaus' />
            <div className='login-field'>
              <i className='login-icon fas fa-user' />
              <input
                type='text'
                className='login-input'
                value={username}
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='login-field'>
              <i className='login-icon fas fa-lock' />
              <input
                type='password'
                className='login-input'
                value={password}
                placeholder='Mot de passe'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='button login-submit'>
              <span className='button-text'>Se connecter</span>
              <i className='button-icon fas fa-chevron-right' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
