import "./MyEstimates.css";
import iPhone6 from "/iPhone6.png";

export default function myEstimates() {
  const phone = [
    {
      marque: "Apple",
      modèle: "iPhone 6",
      ram: 32,
      mémoire: 5,
      antutu: 12000,
      pond: 20,
      totalPond: 25.0,
      img: iPhone6,
    },
    {
      marque: "Apple",
      modèle: "iPhone 6",
      ram: 32,
      mémoire: 5,
      antutu: 12000,
      pond: 20,
      totalPond: 25.0,
      img: iPhone6,
    },
    {
      marque: "Apple",
      modèle: "iPhone 6",
      ram: 32,
      mémoire: 5,
      antutu: 12000,
      pond: 20,
      totalPond: 25.0,
      img: iPhone6,
    },
    {
      marque: "Apple",
      modèle: "iPhone 6",
      ram: 32,
      mémoire: 5,
      antutu: 12000,
      pond: 20,
      totalPond: 25.0,
      img: iPhone6,
    },
    {
      marque: "Apple",
      modèle: "iPhone 6",
      ram: 32,
      mémoire: 5,
      antutu: 12000,
      pond: 20,
      totalPond: 25.0,
      img: iPhone6,
    },
  ];

  return (
    <div className='main-card-container'>
      {phone.map((item, index) => (
        <div key={index} className='card'>
          <img src={item.img} alt='item' />
          <h3 className='card-title'>{item.marque}</h3>
          <p>Modèle: {item.modèle}</p>
          <p>Ram: {item.ram} GB</p>
          <p>Mémoire: {item.mémoire} GB</p>
          <p>Antutu: {item.antutu}</p>
          <p>Pond: {item.pond}</p>
          <p>Total Pond: {item.totalPond}</p>
        </div>
      ))}
    </div>
  );
}
