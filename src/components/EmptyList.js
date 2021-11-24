import imgEmptyList from "../assets/illustration-empty.svg"

const EmptyList = () =>{
    return(
        <div className="empty-list">
            <img src={imgEmptyList} alt="empty list" />
            <div className="empty-list-title">There is nothing here</div>
            <div className="empty-list-text">Create an invoice by clicking the <span>New Invoice</span> button and get started</div>
        </div>
    )
}

export default EmptyList;