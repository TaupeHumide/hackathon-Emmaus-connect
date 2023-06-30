import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Categories } from "./RefTable";
import "./Resume.css";

function objectToSearchParams(object) {
  const searchParams = new URLSearchParams();

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      searchParams.append(key, object[key]);
    }
  }

  return searchParams.toString();
}

function Resume() {
  const [searchParams] = useSearchParams();
  const [item, setItem] = useState({
    marque: searchParams.get("marque") ?? "",
    model: searchParams.get("model") ?? "",
    ram: searchParams.get("ram") ?? "",
    ramPoints: searchParams.get("ramPoints") ?? 0,
    stockage: searchParams.get("stockage") ?? "",
    indiceAntutu: searchParams.get("indiceAntutu") ?? "",
    ponderation: searchParams.get("ponderation") ?? "",
    categorie: searchParams.get("categorie") ?? "",
    pondTotal: searchParams.get("pondTotal") ?? "",
  });

  const infos = {
    0: {
      range: "0 - 90",
      value: "1 - HC ",
    },
    1: {
      range: "90 - 165",
      value: "2 - C ",
    },
    2: {
      range: "165 - 255",
      value: "3 - B ",
    },
    3: {
      range: "255 - 375",
      value: "4 - A ",
    },
    4: {
      range: "375 - ",
      value: "5 - PREMIUM ",
    },
  };

  const cat = Categories.find(
    ({ min, max }) => item.pondTotal >= min && item.pondTotal < max
  );

  if (cat) {
    const { min, max, value } = cat;
  }

  return (
    <div className=" resume_content">
      <section className="resume_section1">
        <div className="resume_section1_titre">
          <h1>Résumé de L'appareil :</h1>
        </div>
        <div className="resume_section1_spec">
          <div className="resume_section1_spec_liste">
            <h4>Marque : </h4>
            <h4>Modèle : </h4>
            <h4>Stockage : </h4>
            <h4>Indice Antutu : </h4>
            <h4>Pondération : </h4>
            <h4>Catégorie : </h4>
            <h4>Fourchette de prix : </h4>
            <h4 className="resume_price_h4">Prix estimé : </h4>
          </div>
          <div className="resume_section1_spec_value">
            <p>{item.marque ?? "Inconnue"}</p>
            <p>{item.model ?? "Inconnue"}</p>
            <p>{item.stockage ?? "Inconnue"}</p>
            <p>{item.indiceAntutu ?? "Inconnue"}</p>
            <p>{item.ponderation ?? "Inconnue"}</p>
            <p>{item.categorie ?? "Inconnue"}</p>
            <p>{`${cat.min}   -   ${cat.max} €` ?? "Inconnue"}</p>
            <p className="resume_price_p">{item.pondTotal ?? "Inconnue"}</p>
          </div>
        </div>
      </section>

      <section className="resume_section2">
        <div className="resume_section2_titre">
          <h3>Galerie d'images : </h3>
        </div>
        <div className="resume_section2_galerieImage">
          <div className="resume_section2_image">
            <img src="/smartphone1.jpg" alt="" />
          </div>
          <div>
            <img src="/smartphone2.jpg" alt="" />
          </div>
          <div>
            <img src="/smartphone3.jpg" alt="" />
          </div>
        </div>
        <div className="resume_section2_button">
          <button> Imprimer</button>
          <button>Valider</button>
        </div>
      </section>
    </div>
  );
}

export default Resume;
