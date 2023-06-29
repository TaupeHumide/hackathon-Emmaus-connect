import "./Resume.css";

function Resume({ item }) {
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
            <p>Apple</p>
            <p>Iphone 10</p>
            <p>64 Go</p>
            <p>120 000</p>
            <p>10%</p>
            <p>4-A</p>
            <p>255 - 375€</p>
            <p className="resume_price_p">350€</p>
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
