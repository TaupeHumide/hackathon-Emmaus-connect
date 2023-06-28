import { useState } from "react";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [data, setData] = useState({
    imeiYes: "",
    imeiNo: "",
    imeiNum: "",
    marque: "",
    model: "",
    ram: "",
    stockage: "",
    indiceAntutu: "",
    ponderation: "",
  });
  return (
    <form className="input" onSubmit={handleSubmit}>
      Do you have an imei number?
      <input
        type="radio"
        id="ImeiYes"
        name="ImeiY"
        value="Yes"
        onChange={(e) => setData({ ...data, imeiY: e.target.value })}
      ></input>
      <label htmlFor="ImeiYes"> Oui</label>
      <input
        id="ImeiNo"
        type="radio"
        value="No"
        name="ImeiN"
        onChange={(e) => setData({ ...data, imeiN: e.target.value })}
      ></input>
      <label htmlFor="ImeiNo"> Non</label>
      <br />
      <label htmlFor="imeiNum">Numero Imei</label>
      <input
        id="imeiNum"
        placeholder="imeiNum"
        type="text"
        name="imeiNum"
        onChange={(e) => setData({ ...data, imeiNum: e.target.value })}
      ></input>
      <br />
      <label htmlFor="marque">Marque:</label>
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
      <label htmlFor="model">Modèle:</label>
      <input
        id="model"
        placeholder="Modèle"
        type="text"
        name="model"
        onChange={(e) => setData({ ...data, model: e.target.value })}
      ></input>
      <br />
      <label htmlFor="ram">RAM:</label>
      <input
        id="ram"
        placeholder="ram"
        type="text"
        name="ram"
        onChange={(e) => setData({ ...data, ram: e.target.value })}
      ></input>
      <br />
      <label htmlFor="stockage">Stockage:</label>
      <input
        id="stockage"
        placeholder="stockage"
        type="text"
        name="stockage "
        onChange={(e) => setData({ ...data, stockage: e.target.value })}
      ></input>
      <br />
      <label htmlFor="indiceAntutu">Indice Antutu:</label>
      <input
        id="indiceAntutu"
        placeholder="Indice_Antutu"
        type="text"
        name="indiceAntutu"
        onChange={(e) => setData({ ...data, indiceAntutu: e.target.value })}
      ></input>
      <br />
      <label htmlFor="ponderation">Pondération:</label>
      <select
        id="ponderation"
        type="text"
        name="ponderation"
        onChange={(e) => setData({ ...data, ponderation: e.target.value })}
      >
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
  );
}
