import React from 'react'; // Ajout de l'import explicite de React
import './Card_Simple.css'
import { Link } from 'react-router-dom';


interface CardSimpleProps {
    title: string;
    desc: string;
    icon:  React.ReactNode;
    path : string;
}

export const Card_Simple_Link: React.FC<CardSimpleProps> = ({ title, desc, icon,path }) => {
    return (
        <Link to={path} id='CardSimpleContainer'>
                <h3>{title}</h3>
                <div>{desc}</div>
                <div id="CardSimpleIcon">{icon}</div>
        </Link>
    );
};