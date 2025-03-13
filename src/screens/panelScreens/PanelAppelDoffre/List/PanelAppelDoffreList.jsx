import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PanelAppelDoffreList.css';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { getAllAppelDoffreApi } from './../../../../api/appelDoffre.backend';
import { MdDelete } from "react-icons/md";

export const PanelAppelDoffreList = () => {
    const [appelDoffre, setAppelDoffre] = useState([]);
    useEffect(() => {
        const fetch = async() => {
            const response = await getAllAppelDoffreApi();
            if(response.status === 200){
                response.json().then(response => {
                    console.log(response);
                setAppelDoffre(response);} );
            }
        }
        fetch();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    return (
        <div id='panelAppelDoffreListContainer'>
            <Link className='LinkBack' to='/panel'>
                <button>Retour Home</button>
            </Link>
            <div id='panelDoffreList'>
                <h1>Liste des offres</h1>
                <div id='panelDoffreListBody'>
                    {appelDoffre.map((item, index) => {
                        return (
                            <div key={index} className='panelAppelDoffreListLine'>
                                <div>
                                    <h1>{item.title}</h1>
                                    <div>{item.description}</div>
                                    <div>{item.addresse}</div>
                                    <div>Date limite : {formatDate(item.datelimite)}</div>
                                    <a href={item.lien}>{item.lien}</a>
                                    <div>{item.structure}</div>
                                </div>
                                <div className='panelitemDoffreListCommand'>
                                    <Link to={`/panel/appelDoffre/update/${item.Id_appelDoffre}`} state={item}>
                                        <button><HiOutlinePencilSquare fontSize={30}/> </button>
                                    </Link>
                                    <button><MdDelete fontSize={30}/></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}