import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";
import "./App.css";
import { BsFillCloudRainFill } from "react-icons/bs";
import { TbTrees } from "react-icons/tb";
import { FaWind, FaWater } from "react-icons/fa";
import { GiBlackHoleBolas, GiCampfire, GiSandstorm } from "react-icons/gi";
import { RiThunderstormsFill } from "react-icons/ri";

export default function App() {
  const playSound = (soundType) => {
    const audio = new Audio();

    switch (soundType) {
      
      case "chuva":
        console.log("Tocando som de chuva...");
        audio.src = "/rain.mp3";
        audio.play();
        break;

      case "floresta":
        console.log("Tocando som de floresta...");
        audio.src = "/florest.mp3";
        audio.play();
        break;

      case "ventania":
        console.log("Tocando som de ventania...");
        audio.src = "/wind.mp3";
        audio.play();
        break;

      case "oceano":
        console.log("Tocando som de oceano...");
        audio.src = "/ocean.mp3";
        audio.play();
        break;

      case "espaço":
        console.log("Tocando som de espaço...");
        audio.src = "/space2.mp3";
        audio.play();
        break;

      case "trovoada":
        console.log("Tocando som de trovoada...");
        audio.src = "/thunder.mp3";
        audio.play();
        break;

      case "chamas":
        console.log("Tocando som de chamas...");
        audio.src = "/fire.mp3";
        audio.play();
        break;

      case "areia":
        console.log("Tocando som de areia...");
        audio.src = "/sand.mp3";
        audio.play();
        break;
    }
    // os audios vão na pasta public
  };
  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1>Serendipity</h1>
          <p>Sons que surpreendem, mente que acalma...</p>
        </header>
        {/* componente Card faz ref ao import, q faz ref ao arquivo, q faz ref à função, tem conteúdo mas não tem filho*/}

        <div className="cards">
          <Card
            texto="Som de Chuva"
            img="/chuva2.jpg"
            icon={BsFillCloudRainFill}
            onClick={() => playSound("chuva")}
          />
          <Card
            texto="Som de Floresta"
            img="/floresta3.jpg"
            icon={TbTrees}
            description="Som relaxente de chuva"
            onClick={() => playSound("floresta")}
          />
          <Card
            texto="Som de Ventania"
            img="/vento.jpg"
            icon={FaWind}
            onClick={() => playSound("ventania")}
          />
          <Card
            texto="Som do Oceano"
            img="/oceano6.jpg"
            icon={FaWater}
            onClick={() => playSound("oceano")}
          />
          <Card
            texto="Som de Espaço"
            img="/espaço1.jpg"
            icon={GiBlackHoleBolas}
            onClick={() => playSound("espaço")}
          />
          <Card
            texto="Som de Trovoada"
            img="/trovoada1.jpg"
            icon={RiThunderstormsFill}
            onClick={() => playSound("trovoada")}
          />
          <Card
            texto="Som de Chamas"
            img="/fire1.jpg"
            icon={GiCampfire}
            onClick={() => playSound("chamas")}
          />
          <Card
            texto="Som de Areia"
            img="/areia3.jpg"
            icon={GiSandstorm}
            onClick={() => playSound("areia")}
          />
        </div>
      </div>
    </>
  );
}
