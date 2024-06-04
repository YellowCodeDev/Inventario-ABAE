import "./login.css";
import logo from "../assets/img/ABAE-Logo.png";
import { Footer } from "./Footer.jsx";
export function Login({ children }) {
  return (
    <section className="container p-4 my-4">
      { 
        children 
      }
      <div className="row my-5">
        <div className="col">
          <picture>
            <img src={logo} height="500px" alt="Logo ABAE" />
          </picture>
        </div>
        <div className="col bg-white h-50 my-5 shadow-own">
          <h3 className="m-3 pt-4 text-gray">INICIA SESIÓN</h3>
          <form action="#" className="form-floating">
            <div className="px-3 pb-3">
              <input
                className="form-control-plaintext border-bottom fs-5"
                type="email"
                name="correo"
                id="correoElectronico"
                placeholder="Correo Electrónico"
              />
              <input
                className="form-control-plaintext border-bottom fs-5"
                type="password"
                name="correo"
                id="pass"
                placeholder="Contraseña"
              />
              <br />
              <small className="text-gray">
                ¿Olvidaste tu contraseña? <a href="#">Reestablecer</a>
              </small>
            </div>
            <div className="row mt-3">
              <button className="col button-register">REGISTRATE</button>
              <button className="col button-login">INGRESA</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
