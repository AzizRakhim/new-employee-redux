import React from 'react';
import "./Header.scss";

function Header() {
  return (
    <header className="hero__header d-flex align-items-center justify-content-between">
      <form className="hero__header-form d-flex align-items-center">
        <i className="bx bx-search" />
        <input type="text" className="hero__header-input" name="header search" placeholder="Search topics" required />
      </form>
      <ul className="hero__header-list d-flex">
        <li className="hero__item">
          <button className="hero__header-btn position-relative">
            <span className="position-relative">
              <i className="bx bx-bell" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
                <span className="visually-hidden">unread messages</span>
              </span>
            </span>
          </button>
        </li>
        <li className="hero__item">
          <button className="hero__header-btn position-relative">
            <span className="position-relative">
              <i className="bx bx-message-square" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-blue bg-danger">
                3
                <span className="visually-hidden">unread messages</span>
              </span>
            </span>
          </button>
        </li>
        <li className="hero__item">
          <button className="hero__header-btn">
            <i className="bx bx-power-off" />
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header
