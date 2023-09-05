import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import useCoutdown from "./hooks/useCountdown";

import imgFundo from "./img/ftfundo.png"

function App() { 

  const [day, hour, minute, second] = useCoutdown("dec 19, 2023 00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${imgFundo})`}}>
      <div className="container">
        <Title title="Proximo Aniversário da Deh... "/>

        <div className="countdown-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
