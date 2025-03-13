import './appelDoffreScreen.css';
import { useState,useEffect } from 'react';
import { getAllAppelDoffreApi } from '../../api/appelDoffre.backend';
import { TitleH1 } from '../../components/uiElements/TitleH1/TitleH1';
import { FaExternalLinkAlt } from "react-icons/fa";

export const AppelDoffreScreen = ()=>{
    const [appelDoffre, setAppelDoffre] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
        const response = await getAllAppelDoffreApi() ;
        console.log(response);
        if(response.status === 200){
            response.json().then(response => {
                setAppelDoffre(response);
            })
        }
    }
        fetchData();
    },[])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

        console.log(appelDoffre.length);
    return (
        <div id='appelDoffreContainer' >
        <TitleH1 title={'APPELS D\'OFFRES'}/>
            {appelDoffre.map((item, index) => {
                console.log(item);
                const date = formatDate(item.datelimite);
                return (
                    <div key={index} className='appelDoffreItem'>
                        <div>
                            <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                            <p>lieu : {item.addresse}</p>
                            <p>Date limite : {date}</p>
                            <a className='appelDoffrelink' href={item.lien} target='blank'>Aller voir le marché publique<FaExternalLinkAlt /></a>
                            <p>structure : {item.structure}</p>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}
// TODO : photo groupe ; carte ; item doffre; logo; document;