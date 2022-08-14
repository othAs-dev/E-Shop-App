import React, { useState, useEffect, useRef } from "react";
import "./ProductShowcase.css";
import { useParams } from "react-router-dom";
import inventory from "../../data/inventory";
import { useDispatch } from "react-redux";
const ProductShowCase = () => {
  const [nbMugs, setNbMugs] = useState(1);
  const { id } = useParams();
  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );
  console.log(productClicked);
  const updateMugs = (e) => {
    setNbMugs(Number(e.target.value));
  };

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    const itemAdded = {
      ...inventory[productClicked],
      quantity: nbMugs,
    };
    dispatch({
      type: "ADDITEM",
      payload: itemAdded,
    });
    addingInfo.current.innerText = "Ajouté au panier";
    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 600);
    }
  };
  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, []);
  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          src={
            process.env.PUBLIC_URL +
            `/images/${inventory[productClicked].img}.png`
          }
          alt=""
          className="showcase"
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix : {inventory[productClicked].price} €</p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity"></label>
          <input
            type="number"
            id="quantity"
            value={nbMugs}
            onChange={updateMugs}
          />
          <button>Ajouter au panier</button>
          <span ref={addingInfo} className="adding-info"></span>
        </form>
      </div>
    </div>
  );
};

export default ProductShowCase;
