import "./login.css";
import logo from "../assets/img/ABAE-Logo.png";
import { ButtonTrue, ButtonFalse } from "./Buttons";
import { TEXT_BUTTONS } from "../constants";

export function Login({ children }) {
  return (
    <main>
      <section className="container">
        <div className="row py-3 my-3">
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
                <ButtonFalse>{TEXT_BUTTONS.REGISTER}</ButtonFalse>
                <ButtonTrue>{TEXT_BUTTONS.LOGIN}</ButtonTrue>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer>{children}</footer>
    </main>
  );
}
