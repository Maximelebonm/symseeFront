import './fieldScreen.css'
import data from './tableauComune.json';
import bassin_verssant from  '../../assets/cartes/Bassin_versant.png';
import interco from '../../assets/cartes/Interco_rework.png';
import { useState } from 'react';

export const FieldScreen = ()=>{
    const [map, setMap] = useState(true);

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     // Charger les données depuis le fichier JSON
    //     fetch('tableauComune.json')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch((error) => console.error('Erreur lors du chargement des données :', error));
    // }, []);

    return (
        <div className='fieldContainer'>
            {/* <div className='iframeMap'>
            <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=3.585201501846314%2C50.144634972263624%2C3.6058545112609868%2C50.15194317012167&amp;layer=mapnik" ></iframe><br/><small><a href="https://www.openstreetmap.org/?#map=17/50.148289/3.595528">Afficher une carte plus grande</a></small>
            </div> */}
                <div id='homeMap'>
                                    {map ?  <img src={bassin_verssant} className='map'/> : <img src={interco} className='map'/> }
                                    <button onClick={()=>setMap(!map)}>{map ? 'voir Intercomunalité' : 'voir bassin versant'} </button>
                            </div>
            <div id='listElu'>
                <table>
                    <thead>
                        <tr>
                            <th>Commune</th>
                            <th>EPCI</th>
                            <th>Delégué</th>
                            <th>suppléant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className={'rowTab' + index % 2}>
                                <td>{row.commune}</td>
                                <td>{row.cc}</td>
                                <td>{row.delegue}</td>
                                <td>{row.suppleant}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}