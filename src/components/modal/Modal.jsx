export const Modal  = ({handleDelete, onClose}) => {
    return (
        <div id='modalContainer'>
            <div id='modalContent'>
                <h1>Attention</h1>
                <p>Vous êtes sur le point de supprimer un document</p>
                <button onClick={handleDelete}>Supprimer</button>
                <button onClick={onClose}>Annuler</button>
            </div>
        </div>
    )
}