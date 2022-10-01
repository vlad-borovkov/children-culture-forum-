import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__navlinks">
          <li className="header__navlinks_item">
            <Link to="#">О форуме</Link>
          </li>
          <li className="header__navlinks_item">
            <Link to="#">Направления</Link>
          </li>
          <li className="header__navlinks_item">
            <Link to="#">Спикеры</Link>
          </li>
          <li className="header__navlinks_item">
            <Link to="#">Площадки</Link>
          </li>
        </ul>
        <button className="header__btn-reg">Регистрация</button>
      </nav>

      <h1 className="header__title">I Сибирский детский культурный форум</h1>
    </header>
  );
}

export default Header;
