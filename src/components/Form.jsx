import { useState } from "react";
import Buttons from "./Buttons";
import "./Form.css";
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
    storagePoints: 0,
  });

  return (
    <div>
      <Buttons className='Boutons' />

      <div className='container'>
        <div className='form-container'>
          <form className='input' onSubmit={handleSubmit}>
            Do you have an imei number ? &nbsp;
            <input
              type='radio'
              id='imei'
              name='imeiOption'
              value='Yes'
              onChange={(e) =>
                setData({ ...data, imei: e.target.value, showImeiNum: true })
              }
            ></input>
            <label htmlFor='ImeiYes'> Oui</label>
            <input
              id='imei'
              type='radio'
              value='No'
              name='imeiOption'
              onChange={(e) =>
                setData({ ...data, imei: e.target.value, showImeiNum: false })
              }
            ></input>
            <label htmlFor='ImeiNo'> Non</label>
            <br />
            {data.showImeiNum ? (
              <div>
                <label htmlFor='imeiNum'>Numero Imei:</label> &nbsp;
                <input
                  type='radio'
                  id='imei'
                  name='imeiOption'
                  value='Yes'
                  onChange={(e) =>
                    setData({
                      ...data,
                      imei: e.target.value,
                      showImeiNum: true,
                    })
                  }
                ></input>
              </div>
            ) : null}
            <br />
            <label htmlFor='marque'>Marque:</label>
            &nbsp;
            <select
              id='marque'
              name='marque'
              type='text'
              onChange={(e) => setData({ ...data, marque: e.target.value })}
            >
              <option value='Apple'>Apple</option>
              <option value='Apple'>Android</option>
            </select>
            <br />
            <label htmlFor='model'>Modèle:</label> &nbsp;
            <input
              id='model'
              placeholder='Modèle'
              type='text'
              name='model'
              onChange={(e) => setData({ ...data, model: e.target.value })}
            ></input>
            <br />
            <select
              id='ram'
              type='text'
              name='ram'
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
              <option defaultValue=''>Sélectionnez la valeur de la RAM</option>
              <option value='1 Go'>1 Go</option>
              <option value='2 Go'>2 Go</option>
              <option value='3 Go'>3 Go</option>
              <option value='4 Go'>4 Go</option>
              <option value='6 Go'>6 Go</option>
              <option value='8 Go'>8 Go</option>
              <option value='12 Go'>12 Go</option>
              <option value='16 Go'>16 Go</option>
              <option value='32 Go'>32 Go</option>
              <option value='64 Go'>64 Go</option>
              <option value='96 Go'>96 Go</option>
            </select>
            <br />
            <label htmlFor='stockage'>Stockage:</label> &nbsp;
            <select
              id='stockage'
              placeholder='stockage'
              type='text'
              name='stockage'
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
              <option defaultValue=''>
                Sélectionnez la mémoire de stockage
              </option>
              <option value='16 Go'>16 Go</option>
              <option value='32 Go'>32 Go</option>
              <option value='64 Go'>64 Go</option>
              <option value='128 Go'>128 Go</option>
              <option value='256 Go'>256 Go</option>
              <option value='512 Go'>512 Go</option>
              <option value='1 To'>1 To</option>
              <option value='2 To'>2 To</option>
              <option value='4 To'>4 To</option>
              <option value='8 To'>8 To</option>
            </select>
            <br />
            <label htmlFor='indiceAntutu'>Indice Antutu:</label> &nbsp;
            <select
              id='indiceAntutu'
              type='text'
              name='indiceAntutu'
              onChange={(e) =>
                setData({ ...data, indiceAntutu: e.target.value })
              }
            >
              <option defaultValue=''>Sélectionnez un indice Antutu</option>
              <option value=''>0-50 000</option>
              <option value=''>50 000-100 000</option>
              <option value=''>100 000-150 000</option>
              <option value=''>150 000-200 000</option>
              <option value=''>250 000-300 000</option>
              <option value=''>300 000-350 000</option>
              <option value=''>350 000-400 000</option>
              <option value=''>400 000-450 000</option>
              <option value=''>450 000-500 000</option>
              <option value=''>500 000-550 000</option>
              <option value=''>550 000-600 000</option>
              <option value=''>600 000-650 000</option>
              <option value=''>650 000-700 000</option>
              <option value=''>700 000-750 000</option>
              <option value=''>750 000-800 000</option>
              <option value=''>800 000-850 000</option>
              <option value=''>850 000-900 000</option>
              <option value=''>900 000-950 000</option>
              <option value=''>950 000</option>
            </select>
            <br />
            <label htmlFor='ponderation'>Pondération:</label> &nbsp;
            <select
              id='ponderation'
              type='text'
              name='ponderation'
              onChange={(e) =>
                setData({ ...data, ponderation: e.target.value })
              }
            >
              <option defaultValue=''>Sélectionnez une pondération</option>
              <option value=''>-100%</option>
              <option value=''>-50%</option>
              <option value=''>-10%</option>
              <option value=''>-5%</option>
              <option value=''>0%</option>
              <option value=''>5%</option>
              <option value=''>10%</option>
            </select>
            <br />
            <button type='submit'>Valider</button>
          </form>
        </div>
      </div>
    </div>
  );
}
