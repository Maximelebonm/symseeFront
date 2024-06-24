import { useLocation,useParams } from 'react-router-dom';
import { LineArticle } from './lineArticle/lineArticle';
import './articleScreen.css';

export const ArticleScreen = () => {
    const location = useLocation();
    // const receivedData = location.state.id;
    const params = new URLSearchParams(location.search);
    const value = params.get('id');
    const { id } = useParams();


    return (
        <div id="articleScreenContainer">
            <p>
                test {id}
            </p>
            <LineArticle/>
        </div>
    )
}