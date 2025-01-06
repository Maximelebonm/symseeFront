import './cardArticle.css';
import imageforet from '../../assets/photo/terrain/foret.png'
import MemoWave from '../SvgComponent/wave/wave';
import { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';

export const CardArticle = (props) => {
    const [divWidth, setDivWidth] = useState(0);
    const myDiv = useRef(null);

    const {title , id} = props
    useEffect(() => {
        const handleResize = () => {
            if (myDiv.current) {
                setDivWidth(myDiv.current.offsetWidth);
            }
        };

        handleResize(); // Appel une fois pour définir la largeur initiale
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Link to={{ pathname:'/article/'+ id,  state: { id: id }}} className='cardArticleContainer'>

        <div  ref={myDiv}>
        <div className='cardArticlePos'>
            <section className='cardArticleHead'>
            <h3>
                {title}
            </h3>
            <img src={imageforet}/>

            </section>
            <MemoWave className="cardArticleVague" width={divWidth}/>
            <section className='cardArticleLine'>
                
            <div className="cardArticleDesc">
                <p className="cardArticleText">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard.
                </p>
            </div>
            </section>
            </div>
        </div>
        </Link>
    )
}  
