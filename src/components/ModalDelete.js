import { Link } from "react-router-dom";

const ModalDelete = (props) => {
    return(
        <Link to={`/`} className="delete-modal">
            <div className="delete-modal-content">
                <p className="delete-title">Confirm Deletion</p>
                <div className="delete-text">
                    Are you sure you want to delete invoice #{props.dataID}? This action cannot be undone.
                </div>
                <div className="confirm-btns">
                    <div className="confirm-cancel" onClick={props.closeDeleteModal}>Cancel</div>
                    <div className="confirm-delete" onClick={props.deleteItem}>Delete</div>
                </div>
            </div>
        </Link>

    )
}

export default ModalDelete;