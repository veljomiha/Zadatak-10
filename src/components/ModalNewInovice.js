const ModalNewInvoice = (props) => {
    return(
        <div className="new-invoice-modal">
            <div className="new-invoice-modal-content">
                <div className="nim-title">New Invoice</div>
                <form action="/">
                    <div className="bill-from">
                        <div className="bill-form-title">Bill From</div>
                        <div className="bill-form-part1">
                            <label htmlFor="">Street Address</label>
                            <input className="street-address-input" type="text"/>
                        </div>
                        <div className="bill-form-part2">
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" />
                            </div>
                            <div className="post-code-div">
                                <label  htmlFor="">Post Code</label>
                                <input  type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Country</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="bill-to">
                        <div className="bill-to-title">Bill To</div>
                        <div className="bill-form-part1">
                            <label htmlFor="">Client's Name</label>
                            <input className="street-address-input" type="text"/>
                        </div>
                        <div className="bill-form-part1">
                            <label htmlFor="">Client's Email</label>
                            <input className="street-address-input" type="text"/>
                        </div>
                        <div className="bill-form-part1">
                            <label htmlFor="">Street Address</label>
                            <input className="street-address-input" type="text"/>
                        </div>
                        <div className="bill-form-part2">
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" />
                            </div>
                            <div className="post-code-div">
                                <label  htmlFor="">Post Code</label>
                                <input  type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Country</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="bill-to-part3">
                            <div className="invoice-date-div">
                                <label htmlFor="">Invoice Date</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label htmlFor="">Payment Terms</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form-item-list">
                        <div className="form-item-list-title">Item List</div>
                        <div className="form-item-list-lbls">
                            <div className="item-list-name">Item Name</div>
                            <div className="item-list-qty">Qty.</div>
                            <div className="item-list-price">Price</div>
                            <div className="item-list-total">Total</div>
                        </div>
                        <div className="form-item-list-addBtn">+Add New Item</div>
                        <div className="form-item-list-btns">
                            <div className="discard-btn" onClick={props.closeNewInvoiceModal}>Discard</div>
                            <div className="draft-send-btns">
                                <div className="save-as-draft">Save as Draft</div>
                                <div className="save-and-send">Save &amp; Send</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ModalNewInvoice;