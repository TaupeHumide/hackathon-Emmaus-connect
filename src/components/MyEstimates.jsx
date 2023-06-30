import "./MyEstimates.css";
import iPhone11 from "/iPhone11.jpeg";
import redmi9 from "/redmiNote9Pro.jpeg";
import galaxyS7 from "/galaxyTabS7.jpeg";
import fireHD from "/fireHD8.jpeg";
import rog from "/rogZephyrusG14.jpeg";
import mbka from "/macBookAirProM1.jpeg";

export default function myEstimates() {
  const phone = [
    {
      marque: "Apple",
      modèle: "iPhone 11",
      ram: 4,
      mémoire: 64,
      antutu: 450000,
      pond: 5,
      totalPond: 5.2,
      img: iPhone11,
      screen: 6.1,
    },
    {
      marque: "Xiaomi",
      modèle: "Redmi Note 9 Pro",
      ram: 6,
      mémoire: 128,
      antutu: 320000,
      pond: 10,
      totalPond: 10.2,
      img: redmi9,
      screen: 6.67,
    },
    {
      marque: "Samsung",
      modèle: "Galaxy Tab S7",
      ram: 6,
      mémoire: 256,
      antutu: 380000,
      pond: 20,
      totalPond: 25.0,
      img: galaxyS7,
      screen: 11.5,
    },
    {
      marque: "Amazon",
      modèle: "Fire HD 8",
      ram: 2,
      mémoire: 32,
      antutu: 240000,
      pond: 10,
      totalPond: 15,
      img: fireHD,
      screen: 8,
    },
    {
      marque: "Asus",
      modèle: "ROG Zephyrus G14",
      ram: 16,
      mémoire: 1000,
      antutu: 470000,
      pond: 20,
      totalPond: 20,
      img: rog,
      screen: 14,
    },
    {
      marque: "Apple",
      modèle: "MacBook Pro M1",
      ram: 8,
      mémoire: 256,
      antutu: 420000,
      pond: 50,
      totalPond: 55.3,
      img: mbka,
      screen: 13.3,
    },
  ];

  return (
    <div className="main-card-container">
      <section className="myestimate_section1">
        {" "}
        <h1>Mes estimations</h1>
      </section>
      <section className="myestimate_section2">
        {phone.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt="item" className="phone-img" />
            <h3 className="card-title">{item.marque}</h3>
            <p className="e-model">Modèle: {item.modèle}</p>
            <p className="e-ram">Ram: {item.ram} GB</p>
            <p className="e-memory">Mémoire: {item.mémoire} GB</p>
            <p className="e-antutu">Antutu: {item.antutu}</p>
            <p className="e-screen">Ecran: {item.screen} pouces</p>
            <p className="e-pond">Pond: {item.pond}</p>
            <p className="e-total-pond">Total Pond: {item.totalPond}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
