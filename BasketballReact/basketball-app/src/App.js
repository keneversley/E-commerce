import React from "react";
// import "./App.css";
import './css/style.css';
import logo from "./assets/images/basketBall_Logo.svg";
import mainImg from "./assets/images/basketBall.png";
import messageIcon from "./assets/images/message.svg";


function App() {
  return (
    <div className="main_page">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="BasketBall Logo" />
            <p>BasketBall</p>
            <input type="search" defaultValue="Search Website" id="search" />
          </div>

          <ul>
            <li>
              <a href="#">News</a>
              <a href="#">Matches</a>
              <a href="#">Events</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="main_row">
        <section className="showcase">
          <img src={mainImg} alt="BasketBall" />
        </section>

        <section className="showcase2">
          <h1>
            A1, <br />
            ALITE
          </h1>
          <p>
            Take the challenge, shoot for the moon,<br />
            tell your story
          </p>
          <button>+ Join</button>
          <p className="message">
            <img src={messageIcon} alt="Message Icon" />
            <span>Leave a Message</span>
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;
