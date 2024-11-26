// Importa o arquivo css
// nao precisa importar o react dps da versão 17 do react pelo que parece
import "./ProfessionalProfile.css";

// o componente principal pra ser renderizado depois
const ProfessionalProfile = () => {
  // Não pode esquecer o retorno
  return (
    // tem que por uma div principal de acordo com oque tava no html
    <div className="professional-profile">
      <img
        // imagem do avatar (me perdi no caminho)
        src="./assets/images/avatar-jessica.jpeg"
        alt="Avatar de Jessica Randall"
        className="professional-image"
      />

      <h1 className="title">Jessica Randall</h1>
      <p className="location">Londres, Reino Unido</p>      
      <p className="description">Desenvolvedora frontEnd e leitora ávida.</p>

      {/* os links */}
      <div className="link-social">
        <a href="https://github.com/seu_usuario" target="_blank">
          GitHub
        </a>
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        <a href="https://www.linkedin.com/in/seu_usuario" target="_blank">
          LinkedIn
        </a>
        <a href="https://twitter.com/seu_usuario" target="_blank">
          Twitter
        </a>
        <a href="https://instagram.com/seu_usuario" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
};

// Exporta o componente para ser renderizado no App.jsx
export default ProfessionalProfile;
