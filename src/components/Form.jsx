import { useState } from "react";
import Buttons from "./Buttons";

export default function Form() {
  const ramPoints = {
    "1 Go": 30,
    "2 Go": 40,
    "3 Go": 54,
    "4 Go": 72,
    "6 Go": 94,
    "8 Go": 120,
    "12 Go": 150,
    "16 Go": 184,
    "32 Go": 222,
    "64 Go": 264,
    "96 Go": 310,
  };
  const storagePoints = {
    "16 Go": 31,
    "32 Go": 45,
    "64 Go": 66,
    "128 Go": 94,
    "256 Go": 129,
    "512 Go": 171,
    "1 To": 220,
    "2 To": 276,
    "4 To": 339,
    "8 To": 409,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [data, setData] = useState({
    imei: "",
    imeiNum: "",
    marque: "",
    model: "",
    ram: "",
    ramPoints: 0,
    totalPoints: 0,
    stockage: "",
    indiceAntutu: "",
    ponderation: "",
    showImeiNum: false,
  });

  return (
    <div>
      <Buttons />
      <form className="input" onSubmit={handleSubmit}>
        Do you have an imei number ? &nbsp;
        <input
          type="radio"
          id="imei"
          name="imeiOption"
          value="Yes"
          onChange={(e) =>
            setData({ ...data, imei: e.target.value, showImeiNum: true })
          }
        ></input>
        <label htmlFor="ImeiYes"> Oui</label>
        <input
          id="imei"
          type="radio"
          value="No"
          name="imeiOption"
          onChange={(e) =>
            setData({ ...data, imei: e.target.value, showImeiNum: false })
          }
        ></input>
        <label htmlFor="ImeiNo"> Non</label>
        <br />
        {data.showImeiNum ? (
          <div>
            <label htmlFor="imeiNum">Numero Imei:</label> &nbsp;
            <input
              id="imeiNum"
              placeholder="imeiNum"
              type="text"
              name="imeiNum"
              onChange={(e) => setData({ ...data, imeiNum: e.target.value })}
            ></input>
          </div>
        ) : null}
        <br />
        <label htmlFor="marque">Marque:</label>
        &nbsp;
        <select
          id="marque"
          name="marque"
          type="text"
          onChange={(e) => setData({ ...data, marque: e.target.value })}
        >
          <option value="Apple">Apple</option>
          <option value="Apple">Android</option>
        </select>
        <br />
        <label htmlFor="model">Modèle:</label> &nbsp;
        <input
          id="model"
          placeholder="Modèle"
          type="text"
          name="model"
          onChange={(e) => setData({ ...data, model: e.target.value })}
        ></input>
        <br />
        <label htmlFor="ram">RAM:</label> &nbsp;
        <select
          id="ram"
          type="text"
          name="ram"
          onChange={(e) => {
            const selectedRam = e.target.value;
            const ramPointsValue = ramPoints[selectedRam];
            setData({
              ...data,
              ram: selectedRam,
              ramPoints: ramPointsValue,
            });
          }}
        >
          <option defaultValue="">Selectionnez la valeur de la RAM</option>
          <option value="">1 Go</option>
          <option value="">2 Go</option>
          <option value="">3 Go</option>
          <option value="">4 Go</option>
          <option value="">6 Go</option>
          <option value="">8 Go</option>
          <option value="">12 Go</option>
          <option value="">16 Go</option>
          <option value="">32 Go</option>
          <option value="">64 Go</option>
          <option value="">96 Go</option>
        </select>
        <br />
        <label htmlFor="stockage">Stockage:</label> &nbsp;
        <input
          id="stockage"
          placeholder="stockage"
          type="text"
          name="stockage"
          onChange={(e) => setData({ ...data, stockage: e.target.value })}
        ></input>
        <br />
        <label htmlFor="indiceAntutu">Indice Antutu:</label> &nbsp;
        <input
          id="indiceAntutu"
          placeholder="Indice_Antutu"
          type="text"
          name="indiceAntutu"
          onChange={(e) => setData({ ...data, indiceAntutu: e.target.value })}
        ></input>
        <br />
        <label htmlFor="ponderation">Pondération:</label> &nbsp;
        <select
          id="ponderation"
          type="text"
          name="ponderation"
          onChange={(e) => setData({ ...data, ponderation: e.target.value })}
        >
          <option defaultValue="">Selectionnez une ponderation</option>
          <option value="">-100%</option>
          <option value="">-50%</option>
          <option value="">-10%</option>
          <option value="">-5%</option>
          <option value="">0%</option>
          <option value="">5%</option>
          <option value="">10%</option>
        </select>
        <br />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}
