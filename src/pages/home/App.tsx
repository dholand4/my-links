import React from "react";
import "./style.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <img
        className="avatar"
        src="https://avatars.githubusercontent.com/u/47678288?s=400&u=1420d5ab049e6d5eb0b45485d92cea3671959bab&v=4"
        alt="Imagem de perfil do Daniel Holanda"
      />
      <h1>Daniel Holanda</h1>
      <p>@dholand4</p>

      <ul>
        <li>
          <a
            href="https://instagram.com/dholand4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-holanda-78145a22b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dholand4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="mailto:danielholanda55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </li>
      </ul>

      <footer>Feito por Daniel Holanda 🧑🏾‍💻</footer>
    </div>
  );
};

export default App;
