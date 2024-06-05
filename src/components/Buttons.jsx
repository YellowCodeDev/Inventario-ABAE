import "./Buttons.css";

export function ButtonTrueLg({ children }) {
  return <button className="col button-true">{children}</button>;
}

export function ButtonFalseLg({ children }) {
  return <button className="col button-false">{children}</button>;
}
