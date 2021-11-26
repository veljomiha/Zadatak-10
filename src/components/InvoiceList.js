import { Link } from "react-router-dom";
import imgArrowRight from "../assets/icon-arrow-right.svg";

const InvoiceList = (props) =>{
    return(
        <div className="invoice-list">
            {props.dataJson.map((invoice)=>(
                <div className="invoice" key={invoice.id}>
                    <Link className="invoice-link" to={`/invoice-${invoice.id}`}>
                        <div className="id"><span className="span-id">#</span>{invoice.id}</div>
                        <div className="date">{invoice.createdAt}</div>
                        <div className="author">{invoice.clientName}</div>
                        <div className="price">£ {invoice.total}</div>
                        <div className="parent-status"><div className={`status-invoice-list ${invoice.status}`}><div className={`circle ${invoice.status}`}></div>{invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</div></div>
                        <img src={imgArrowRight} alt="imgArrowRight" className="arrow-right desktop-only"/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default InvoiceList;