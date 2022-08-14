import React from "react";
import imgShopHome from "./shopimg.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="global-container">
      <h1 className="home-title">
        {" "}
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Fan d'informatique ? L'amour pour le développement est en vous ? Alors
        bienvenue à la première boutique de vente de mug dans le thème du dev,
        histoire que vous puissez prendre votre café tout en restant dans le
        mood des développeurs. Vous passerez pour un geek MAIS un geek cool !
      </p>
      <img src={imgShopHome} alt="" />
    </div>
  );
};

export default Home;
