import { Link } from 'react-router-dom'
import './createArticleScreen.css'
import { useState } from 'react';
import { createArticleApi } from '../../../api/article.backend';
import { FaPlus } from "react-icons/fa";

export const CreateArticleScreen = () => {
    const [articleLines, setArticleLines] = useState([]);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const title = data.get('titleArticle');
        const subtitle = data.get('subtitleArticle');
        const description = data.get('descArticle');
        const media = data.get('MediaArticle');
        const auteur = data.get('AuteurArticle');
        const visible = data.get('visible');
        const formArticleLine = articleLines;
        
        console.log(form);
        console.log(articleLines);


        // const fetch = async() => {
        //     const response = await createArticleApi(title, subtitle, description, media, auteur, visible,articleLines);
        //     console.log(response);
        //     if(response.status === 200){
        //         alert('article crée');
        //     }
        // }
        // fetch();
    }

    

    const addlineArticle = () => {
        setArticleLines([
            ...articleLines,
            { title: '', subtitle: '', body: '', media: '',pictutre_position: 0}
        ])
    }

    const handleChange = (e,obj,index) => {
        const newLineArticle = [...articleLines];

        newLineArticle.forEach((line, i) => {
            if(i === index){
                console.log(obj);
                switch(obj){
                    case 'titleLine': line.title = e; break;
                    case 'subtitleLine': line.subtitle = e; break;
                    case 'bodyLine': line.body = e; break;
                    case 'media': line.media = e; break;
                    case 'positionMedia': line.positionMedia = e; break;
                    default: break;
                }
            }
        });

        setArticleLines(newLineArticle);

    }
    return (
        <div id='CreateArticleScreenContainer'>
        <Link className='LinkBack' to='/panel'>
        <button>Retour Home</button></Link>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className=''>
            <label>visibilité de l&apos;article </label>
            <input type='checkbox' name='visible'></input>
            </div>
                <div className='CreateArticleScreenItem'>
                    <label>Titre de l&apos;article </label>
                    <input type='text' name='titleArticle'></input>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>Sous titre de l&apos;aricle </label>
                    <input type='text' name='subtitleArticle'></input>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>Description de l&apos;aricle </label>
                    <textarea  wrap='soft ' type='text' name='descArticle'></textarea>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>image acceuil de l&apos;aricle </label>
                    <input type='file' name='MediaArticle'></input>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>Auteur de l&apos;aricle </label>
                    <input type='text' name='AuteurArticle'></input>
                </div>
                <div id='lineArticle'>
                {articleLines?.map((line, index) => (
                        <div key={index}>        
                            <div className='lineArticleContainer'>
                                <div className='CreateArticleScreenItem'>
                                <label>Titre du paragraphe </label>
                                <input type='text' name='titleLine' value={line.title} onChange={(e)=>handleChange(e.target.value, 'titleLine', index)}></input>
                                </div>
                                <div className='CreateArticleScreenItem'>
                                    <label>Sous titre du paragraphe </label>
                                    <input type='text' name='subtitleLine' value={line.subtitle} onChange={(e)=>handleChange(e.target.value, 'subtitleLine', index)}></input>
                                </div>
                                <div className='CreateArticleScreenItem'>
                                    <label>corps du paragraphe </label>
                                    <textarea type='text' name='bodyLine' value={line.body} onChange={(e)=>handleChange(e.target.value, 'bodyLine', index)}></textarea>
                                </div>
                                <div className='CreateArticleScreenItem'>
                                    <label>image du paragraphe </label>
                                    <input type='file' name='pictureLine' value={line.body} onChange={(e)=>handleChange(e.target.value, 'body', index)}></input>
                                </div>
                                <div className='CreateArticleScreenItem'>
                                    <label>position image </label>
                                    <input type='number' name='pictutre_position' value={line.pictutre_position} onChange={(e)=>handleChange(e.target.value, 'body', index)}></input>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="addLinearticle" onClick={addlineArticle}>
                    ajouter une Ligne <FaPlus />
                </div>
                {<button type='submit'> envoyer l&apos;article</button>}
            </form>
        </div>
    )
}