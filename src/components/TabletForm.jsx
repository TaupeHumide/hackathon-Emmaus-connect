import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Form.css";

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
    const {
      marque,
      model,
      ram,
      ramPoints,
      stockage,
      indiceAntutu,
      ponderation,
      storagePoints,
    } = e.target.elements;

    const searchParamsString = objectToSearchParams({
      marque: marque?.value,
      model: model?.value,
      ram: ram?.value,
      ramPoints: ramPoints?.value,
      stockage: stockage?.value,
      indiceAntutu: indiceAntutu?.value,
      ponderation: ponderation?.value,
      storagePoints: storagePoints?.value,
    });
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
      <div className="tablet-container">
        <div className="tablet-form-container">
          <form className="tablet-form-input" onSubmit={handleSubmit}>
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
              <option value="Lenovo">Lenovo</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon">Amazon</option>{" "}
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
              <option value="iPad Pro" />
              <option value="Galaxy Tab 7" />
              <option value="Tab P11 Pro" />
              <option value="MediaPad M5" />
              <option value="Surface Pro 7" />
              <option value="Galaxy Tab A7" />
              <option value="iPad Air" />
              <option value="Tab M10 FHD Plus" />
              <option value="Fire HD 10" />
              <option value="MediaPad T5" />
              <option value="Galaxy Tab S6 Lite" />
              <option value="iPad Mini" />
              <option value="Surface Go 2" />
              <option value="Galaxy Tab A 8.0" />
              <option value="Tab M6 FHD" />
              <option value="Fire HD 8" />
              <option value="Yoga Smart Tab" />
              <option value="MediaPad M6" />
              <option value="iPad Pro (2021)" />
              <option value="Galaxy Tab S5e" />
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
              <option value="1 Go">1 Go</option>
              <option value="2 Go">2 Go</option>
              <option value="3 Go">3 Go</option>
              <option value="4 Go">4 Go</option>
              <option value="6 Go">6 Go</option>
              <option value="8 Go">8 Go</option>
              <option value="12 Go">12 Go</option>
              <option value="16 Go">16 Go</option>
              <option value="32 Go">32 Go</option>
              <option value="64 Go">64 Go</option>
              <option value="96 Go">96 Go</option>
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
              <option value="16 Go">16 Go</option>
              <option value="32 Go">32 Go</option>
              <option value="64 Go">64 Go</option>
              <option value="128 Go">128 Go</option>
              <option value="256 Go">256 Go</option>
              <option value="512 Go">512 Go</option>
              <option value="1 To">1 To</option>
              <option value="2 To">2 To</option>
              <option value="4 To">4 To</option>
              <option value="8 To">8 To</option>
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
              <option value="0-50 000">0-50 000</option>
              <option value="50 000-100 000">50 000-100 000</option>
              <option value="100 000-150 000">100 000-150 000</option>
              <option value="150 000-200 000">150 000-200 000</option>
              <option value="250 000-300 000">250 000-300 000</option>
              <option value="300 000-350 000">300 000-350 000</option>
              <option value="350 000-400 000">350 000-400 000</option>
              <option value="400 000-450 000">400 000-450 000</option>
              <option value="450 000-500 000">450 000-500 000</option>
              <option value="500 000-550 000">500 000-550 000</option>
              <option value="550 000-600 000">550 000-600 000</option>
              <option value="600 000-650 000">600 000-650 000</option>
              <option value="650 000-700 000">650 000-700 000</option>
              <option value="00 000-750 000">700 000-750 000</option>
              <option value="750 000-800 000">750 000-800 000</option>
              <option value="800 000-850 000">800 000-850 000</option>
              <option value="850 000-900 000">850 000-900 000</option>
              <option value="900 000-950 000">900 000-950 000</option>
              <option value="950 000<">950 000</option>
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
