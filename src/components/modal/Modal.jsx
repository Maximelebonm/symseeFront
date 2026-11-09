import "./Modal.css"

export const Modal = ({ handleDelete, onClose }) => {
    return (
        <div id='modalContainer' onClick={onClose}>
            <div id='modalContent' onClick={(e) => e.stopPropagation()}>
                <h1>Attention</h1>
                <p>Êtes vous sûr de vouloir supprimer ?</p>
                <button onClick={handleDelete}>Supprimer</button>
                <button onClick={onClose}>Annuler</button>
            </div>
        </div>
    )
}