// é necessario importar o arquivo com o nome puxando da pasta alvo
import ProfessionalProfile from "./components/ProfessionalProfile";
// é a constante que vai chamar a div com o mesmo nome para renderizar na tela 
const App = () => {
  return (
    <div className="App">
      {/*dentro da div o import */ }
      <ProfessionalProfile />
    </div>
  );
};

export default App;
