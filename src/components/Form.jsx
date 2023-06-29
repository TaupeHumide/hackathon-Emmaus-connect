import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Form.css";
import calculate from "./calculatePrice";

function objectToSearchParams(object) {
  const searchParams = new URLSearchParams();

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      searchParams.append(key, object[key]);
    }
  }

  return searchParams.toString();
}

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
  const antutuPoints = {
    "0-50 000": 40,
    "50 000-100 000": 44,
    "100 000-150 000": 49,
    "150 000-200 000": 55,
    "200 000-250 000": 62,
    "250 000-300 000": 70,
    "300 000-350 000": 79,
    "350 000-400 000": 89,
    "400 000-450 000": 100,
    "450 000-500 000": 112,
    "500 000-550 000": 125,
    "550 000-600 000": 139,
    "600 000-650 000": 154,
    "650 000-700 000": 170,
    "700 000-750 000": 187,
    "750 000-800 000": 205,
    "800 000-850 000": 224,
    "850 000-900 000": 244,
    "900 000-950 000": 265,
    "950 000": 287,
  };

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // on recup tte les infos du formulaire
    const { marque, model, ram, stockage, indiceAntutu, ponderation } =
      e.target.elements;

    const values = {
      marque: marque?.value,
      model: model?.value,
      ram: parseInt(ram?.value),
      stockage: parseInt(stockage?.value),
      indiceAntutu: parseInt(indiceAntutu?.value),
      ponderation: ponderation?.value,
    };
    const estimatedPrice = calculate(values);
    values["categorie"] = estimatedPrice[1];
    values["pondTotal"] = estimatedPrice[0];
    const searchParamsString = objectToSearchParams(values);
    navigate("/recap?" + searchParamsString);
  };

  const [data, setData] = useState({
    imei: searchParams.get("imei") ?? "",
    imeiNum: searchParams.get("imeiNum") ?? "",
    marque: searchParams.get("marque") ?? "",
    model: searchParams.get("model") ?? "",
    ram: searchParams.get("ram") ?? "",
    ramPoints: searchParams.get("ramPoints") ?? 0,
    stockage: searchParams.get("stockage") ?? "",
    indiceAntutu: searchParams.get("indiceAntutu") ?? "",
    ponderation: searchParams.get("ponderation") ?? "",
    showImeiNum: false,
    storagePoints: parseInt(storagePoints ?? "0"),
  });

  return (
    <div>
      <div className="phone-container">
        <div className="phone-form-container">
          <form className="phone-form-input" onSubmit={handleSubmit}>
            <br />
            <label htmlFor="marque">Marque:</label>
            &nbsp;
            <select
              id="marque"
              name="marque"
              type="text"
              onChange={(e) => setData({ ...data, marque: e.target.value })}
              value={data.marque}
            >
              <option defaultValue="">Selectionnez la marque</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Huawei">Huawei</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Google">Google</option>
              <option value="Vivo">Vivo</option>
            </select>
            <br />
            <label htmlFor="model">Modèle:</label> &nbsp;
            <input
              id="model"
              placeholder="Modèle"
              type="text"
              name="model"
              list="modelOptions"
              value={data.model}
              onChange={(e) => setData({ ...data, model: e.target.value })}
            />
            <datalist id="modelOptions">
              <option value="iPhone 11" />
              <option value="iPhone SE (2020)" />
              <option value="iPhone 12 Pro Max" />
              <option value="Xiaomi Redmi Note 9 Pro" />
              <option value="OnePlus 8 Pro" />
              <option value="Google Pixel 5" />
              <option value="Huawei P40 Pro" />
              <option value="Samsung Galaxy Note 20 Ultra" />
              <option value="Xiaomi Redmi 9" />
              <option value="OnePlus Nord 2" />
              <option value="Vivo X60 Pro" />
              <option value="Samsung Galaxy A52" />
              <option value="Xiaomi Mi 11" />
              <option value="Huawei Mate 40 Pro" />
              <option value="Google Pixel 4a" />
              <option value="Samsung Galaxy S20 FE" />
              <option value="OnePlus 9 Pro" />
              <option value="Xiaomi Poco X3 Pro" />
              <option value="Vivo X50 Pro" />
            </datalist>
            <br />
            <select
              id="ram"
              type="text"
              name="ram"
              value={data.ram}
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
              <option defaultValue="">Sélectionnez la valeur de la RAM</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="3">3 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
              <option value="12">12 Go</option>
              <option value="16">16 Go</option>
              <option value="32">32 Go</option>
              <option value="64">64 Go</option>
              <option value="96">96 Go</option>
            </select>
            <br />
            <label htmlFor="stockage">Stockage:</label> &nbsp;
            <select
              id="stockage"
              placeholder="stockage"
              type="text"
              name="stockage"
              value={data.stockage}
              onChange={(e) => {
                const selectedStorage = e.target.value;
                const storagePointsValue = storagePoints[selectedStorage];
                setData({
                  ...data,
                  stockage: selectedStorage,
                  storagePoints: storagePointsValue,
                });
              }}
            >
              <option defaultValue="">
                Sélectionnez la mémoire de stockage
              </option>
              <option value="16">16 Go</option>
              <option value="32">32 Go</option>
              <option value="64">64 Go</option>
              <option value="128">128 Go</option>
              <option value="256">256 Go</option>
              <option value="512">512 Go</option>
              <option value="1000">1 To</option>
              <option value="2000">2 To</option>
              <option value="4000">4 To</option>
              <option value="8000">8 To</option>
            </select>
            <br />
            <label htmlFor="indiceAntutu">Indice Antutu:</label> &nbsp;
            <select
              id="indiceAntutu"
              type="text"
              name="indiceAntutu"
              value={data.indiceAntutu}
              onChange={(e) => {
                const selectedAntutu = e.target.value;
                const antutuPointsValue = antutuPoints[selectedAntutu];
                setData({
                  ...data,
                  indiceAntutu: selectedAntutu,
                  antutuPoints: antutuPointsValue,
                });
              }}
            >
              <option defaultValue="">Sélectionnez un indice Antutu</option>
              <option value="40">0-50 000</option>
              <option value="44">50 000-100 000</option>
              <option value="49">100 000-150 000</option>
              <option value="55">150 000-200 000</option>
              <option value="62">250 000-300 000</option>
              <option value="70">300 000-350 000</option>
              <option value="79">350 000-400 000</option>
              <option value="89">400 000-450 000</option>
              <option value="100">450 000-500 000</option>
              <option value="112">500 000-550 000</option>
              <option value="125">550 000-600 000</option>
              <option value="139">600 000-650 000</option>
              <option value="154">650 000-700 000</option>
              <option value="170">700 000-750 000</option>
              <option value="187">750 000-800 000</option>
              <option value="205">800 000-850 000</option>
              <option value="224">850 000-900 000</option>
              <option value="244">900 000-950 000</option>
              <option value="287">950 000</option>
            </select>
            <br />
            <label htmlFor="ponderation">Pondération:</label> &nbsp;
            <select
              id="ponderation"
              type="text"
              name="ponderation"
              value={data.ponderation}
              onChange={(e) =>
                setData({ ...data, ponderation: e.target.value })
              }
            >
              <option defaultValue="">Sélectionnez une pondération</option>
              <option value="-100">-100 %</option>
              <option value="-50">-50 %</option>
              <option value="-10">-10 %</option>
              <option value="-5">-5 %</option>
              <option value="0">0 %</option>
              <option value="5">5 %</option>
              <option value="10">10 %</option>
            </select>
            <br />
            <button type="submit" className="form-submit-button">
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
