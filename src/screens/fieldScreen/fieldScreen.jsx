import './fieldScreen.css'
import data from './tableauComune.json';
import bassin_verssant from  '../../assets/cartes/Bassin_versant.png';
import interco from '../../assets/cartes/Interco_rework.png';
import { useState } from 'react';

export const FieldScreen = ()=>{
    const [map, setMap] = useState(true);
    return (
        <div className='fieldContainer'>
                <div id='homeMap'>
                                    {map ?  <img src={bassin_verssant} className='map'/> : <img src={interco} className='map'/> }
                                    <button onClick={()=>setMap(!map)}>{map ? 'voir Intercommunalité' : 'voir bassin versant'} </button>
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