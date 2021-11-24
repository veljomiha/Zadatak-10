import {useState} from 'react'
import { useParams } from "react-router";
import imgArrowLeft from "../assets/icon-arrow-left.svg"
import { Link } from 'react-router-dom';
import ModalDelete from './ModalDelete';
import { useHistory } from 'react-router';
import ModalEditInvoice from './ModalEditInvoice';

const InvoiceDetails = (props) =>{
    const {id} = useParams();
    const [data, setData] = useState(props.dataJson.filter(item => item.id === id));
    const [deleteModal, setDeleteModal] = useState(false);
    const [editInvoiceModal, setEditInvoiceModal] = useState(false);
    const history = useHistory();

    function openDeleteModal(){
        setDeleteModal(true);
    }

    function closeDeleteModal(){
        setDeleteModal(false);
    }
    
    function openEditInvoiceModal(){
        setEditInvoiceModal(true);
    }
    function closeEditInvoiceModal(){
        setEditInvoiceModal(false);
    }

    function markAsPaid(){
        if(data[0].status === "pending"){
            data[0].status = "paid";
            history.push(`/invoice-${data[0].id}`);
        }
    }

    return(
        <div className="invoice-details">
            {editInvoiceModal ? <ModalEditInvoice closeEditInvoiceModal={closeEditInvoiceModal} dataID={data[0].id}/> : null}
            {deleteModal ? <ModalDelete deleteItem={()=> props.deleteItem(id)} closeDeleteModal={closeDeleteModal} dataID={data[0].id}/> : null}
            <div className="go-back" >
                <Link to={`/`} className="go-back">
                        <img src={imgArrowLeft} alt="imgArrowLeft" />
                        Go back
                </Link>
            </div>
            <div className="invoice-details--part-1">
                <div className="status-invoice-details">
                    <p className="sid-text">Status</p>
                    <div className={`sid-block ${data[0].status}`}><div className={`circle ${data[0].status}`}></div>{data[0].status.charAt(0).toUpperCase() + data[0].status.slice(1)}</div>
                </div>
                <div className="edit-delete-mp desktop-only">
                    <div className="edit" onClick={openEditInvoiceModal}>Edit</div>
                    <div className="delete" onClick={openDeleteModal}>Delete</div>
                    <div className="mark-as-paid" onClick={markAsPaid}>Mark as Paid</div>
                </div>
            </div>
            <div className="invoice-details--part-2">
                <div className="info-part1">
                    <div className="info-part11">
                        <div className="info-part11-id"><span>#</span>{data[0].id}</div>
                        <div className="info-part11-description">{data[0].description}</div>
                    </div>
                    <div className="info-part12">
                        <div className="info-part12-street">{data[0].senderAddress.street}</div>
                        <div className="info-part12-city">{data[0].senderAddress.city}</div>
                        <div className="info-part12-postCode">{data[0].senderAddress.postCode}</div>
                        <div className="info-part12-country">{data[0].senderAddress.country}</div>
                    </div>
                </div>
                <div className="info-part2">
                    <div className="info-part21">
                        <div>
                            Invoice Date
                            <div className="info-part21-createdAt">{data[0].createdAt}</div>
                        </div>
                        <div>
                            Payment Due
                            <div className="info-part21-paymentDue">{data[0].paymentDue}</div>
                        </div>
                    </div>
                    <div className="info-part22">
                        <div>Bill to</div>
                        <div className="info-part22-clientName">{data[0].clientName}</div>
                        <div>{data[0].clientAddress.street}</div>
                        <div>{data[0].clientAddress.city}</div>
                        <div>{data[0].clientAddress.postCode}</div>
                        <div>{data[0].clientAddress.country}</div>
                    </div>
                    <div className="info-part23">
                        <div>Sent to</div>
                        <div className="info-part23-clientEmail">{data[0].clientEmail}</div>
                    </div>
                </div>
                <div className="info-part3">
                    <div className="info-part31 desktop-only">
                        <div className="item-name">Item Name</div>
                        <div className="item-qty">QTY.</div>
                        <div className="item-price">Price</div>
                        <div className="item-total">Total</div>
                    </div>
                    {data[0].items.map((item)=>(
                    <div className="info-part32">
                        <div className="name-and-qty-mobile">
                            <div className="item-name-value">{item.name}</div>
                            <div className="item-price-value  mobile-only">{item.quantity} x £ {item.total.toFixed(2)}</div>
                        </div>
                        <div className="item-qty-value desktop-only">{item.quantity}</div>
                        <div className="item-price-value desktop-only">£ {item.price.toFixed(2)}</div>
                        <div className="item-total-value">£ {item.total.toFixed(2)}</div>
                    </div>
                    ))}
                    <div className="info-part33">
                        <div className="amount-due">Amount Due</div>
                        <div className="total-price">£ {data[0].total.toFixed(2)}</div>
                    </div>
                </div>
                
            </div>
            <div className="invoice-details--part-1-mobile mobile-only">
                <div className="edit-delete-mp">
                    <div className="edit" onClick={openEditInvoiceModal}>Edit</div>
                    <div className="delete" onClick={openDeleteModal}>Delete</div>
                    <div className="mark-as-paid" onClick={markAsPaid}>Mark as Paid</div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetails;