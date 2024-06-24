import { Link } from 'react-router-dom'
import './createArticleScreen.css'
import { useState } from 'react';

export const CreateArticleScreen = () => {
    const [articleLines, setArticleLines] = useState([]);
    const handleSubmit =()=>{
        //envoie des données
    }

    const lineArticle = () => {
        return (
        <div className='lineArticleContainer'>
            <div className='CreateArticleScreenItem'>
            <label>Titre du paragraphe </label>
            <input type='text' name='titleArticle'></input>
            </div>
            <div className='CreateArticleScreenItem'>
                <label>Sous titre du paragraphe </label>
                <input type='text' name='descArticle'></input>
            </div>
            <div className='CreateArticleScreenItem'>
                <label>corps du paragraphe </label>
                <textarea type='text' name='descArticle'></textarea>
            </div>
            <div className='CreateArticleScreenItem'>
                <label>image du paragraphe </label>
                <input type='text' name='descArticle'></input>
            </div>
        </div>
        )
    }

    const addLineArticle = () =>{
        setArticleLines([...articleLines, lineArticle()]);
    }
    return (
        <div id='CreateArticleScreenContainer'>
            <form onSubmit={handleSubmit}>
                <div className='CreateArticleScreenItem'>
                    <label>Titre de l'aricle </label>
                    <input type='text' name='titleArticle'></input>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>Sous titre de l'aricle </label>
                    <input type='text' name='descArticle'></input>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>description de l'aricle </label>
                    <textarea  wrap='soft ' type='text' name='descArticle'></textarea>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>image acceuil de l'aricle </label>
                    <input type='text' name='descArticle'></input>
                </div>
                <div className='CreateArticleScreenItem'>
                    <label>crédit de l'aricle </label>
                    <input type='text' name='descArticle'></input>
                </div>
                <div id='lineArticle'>
                {articleLines.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <div onClick={addLineArticle}>
                    ajouter une Ligne
                </div>
                {<button type='submit'> envoyer l'article</button>}
            </form>
        </div>
    )
}