import React, {useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
      <div className="app-container">
        <nav>
          <button id="btnComponent" onClick={() => setIsLogin(true)}>Iniciar Sesion</button>
          <button id="btnComponent" onClick={() => setIsLogin(false)}>Registrarse</button>
        </nav>
        {isLogin ? <Login /> : <Register />}
      </div>
    );
};

export default App;