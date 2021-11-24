import InvoiceList from "./InvoiceList";
import EmptyList from "./EmptyList";
import ModalNewInvoice from "./ModalNewInovice";
import { useState } from "react";
import imgArrowDown from "../assets/icon-arrow-down.svg";
import imgArrowUp from "../assets/icon-arrow-up.svg";
import imgPlus from "../assets/icon-plus.svg";

const Main = (props) =>{
    const lengthData = props.dataJson.length;
    const [newInvoiceModal, setNewInvoiceModal] = useState(false);
    const [filterMenu, setFilterMenu] = useState(false);

    function openNewInvoiceModal(){
        setNewInvoiceModal(true);
    }
    function closeNewInvoiceModal(){
        setNewInvoiceModal(false);
    }
    function openCloseFilterMenu(){
        if(filterMenu === false){
            setFilterMenu(true);
        }
        else{
            setFilterMenu(false);
        }
    }

    return(
    <div className="main">
        {newInvoiceModal ? <ModalNewInvoice closeNewInvoiceModal={closeNewInvoiceModal}></ModalNewInvoice> : null}
        <div className="main-header">
            <div className="main-header--left-side">
                <div className="main-header-title">Invoices</div>
                {lengthData > 0 ? (<div className="main-header-text"><span className="desktop-only">There are</span> {lengthData} <span className="desktop-only">total</span> invoices</div>) :
                                   <div className="main-header-text">No invoices</div>}
            </div>
            <div className="main-header--right-side">
                <div className="filter-by-status">
                    <div className="filter-text-and-img" onClick={openCloseFilterMenu}>Filter <span className="desktop-only">by status</span>{!filterMenu ? <img src={imgArrowDown} className="arrow-down" alt="arrow down" /> : <img src={imgArrowUp} className="arrow-up" alt="arrow up" />}</div>
                    {filterMenu ? <div className="filter-content">
                        <div>
                            <input type="checkbox" name="" id="" />Paid
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" />Pending
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" />Draft
                        </div>
                    </div> : null}
                </div>
                <div className="new-invoice" onClick={openNewInvoiceModal}><div className="new-invoice-plus"><img src={imgPlus} alt="" /></div>New <span className="desktop-only"> Invoice</span></div>
            </div>
        </div>
        <div>
            {lengthData > 0 ? (<InvoiceList dataJson={props.dataJson}/>) : (<EmptyList/>)}
        </div>
    </div>
    )
}

export default Main;