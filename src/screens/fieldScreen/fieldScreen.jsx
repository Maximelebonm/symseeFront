import './fieldScreen.css'
import data from './tableauComune.json'

export const FieldScreen = ()=>{
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
            <div className='iframeMap'>
                <iframe width="100%" height="500px" frameBorder="0" allowFullScreen allow="geolocation" src="//umap.openstreetmap.fr/fr/map/new/?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"></iframe>
                <p><a href="//umap.openstreetmap.fr/fr/map/new/?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true">Voir en plein écran</a></p>
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
                            {console.log('rowTab' + index % 2)}
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