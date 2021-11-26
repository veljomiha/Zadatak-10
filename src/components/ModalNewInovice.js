const ModalNewInvoice = (props) => {
    return(
        <div className="new-invoice-modal" >
            <div className="new-invoice-modal-content">
                <div className="nim-title">New Invoice</div>
                <form action="/">
                    <div className="bill-from" >
                        <div className="bill-form-title">Bill From</div>
                        <div className="bill-form-part1" onChange={props.handleChangeSenderAddress}>
                            <label htmlFor="">Street Address</label>
                            <input className="street-address-input" type="text" name="street" value={props.street}/>
                        </div>
                        <div className="bill-form-part2" onChange={props.handleChangeSenderAddress}>
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" name="city" value={props.city}/>
                            </div>
                            <div className="post-code-div">
                                <label  htmlFor="" >Post Code</label>
                                <input  type="text" name="postCode" value={props.postCode}/>
                            </div>
                            <div>
                                <label htmlFor="">Country</label>
                                <input type="text" name="country" value={props.country} />
                            </div>
                        </div>
                    </div>
                    <div className="bill-to">
                        <div className="bill-to-title">Bill To</div>
                        <div className="bill-form-part1" onChange={props.handleChange}>
                            <label htmlFor="">Client's Name</label>
                            <input className="street-address-input" type="text" name="clientName" value={props.clientName}/>
                        </div>
                        <div className="bill-form-part1" onChange={props.handleChange}>
                            <label htmlFor="">Client's Email</label>
                            <input className="street-address-input" type="text" name="clientEmail" value={props.clientEmail}/>
                        </div>
                        <div className="bill-form-part1" onChange={props.handleChangeClientAddress}>
                            <label htmlFor="">Street Address</label>
                            <input className="street-address-input" type="text" name="street" value={props.street}/>
                        </div>
                        <div className="bill-form-part2" onChange={props.handleChangeClientAddress}>
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" name="city" value={props.city} />
                            </div>
                            <div className="post-code-div">
                                <label  htmlFor="">Post Code</label>
                                <input  type="text" name="postCode" value={props.postCode}/>
                            </div>
                            <div>
                                <label htmlFor="">Country</label>
                                <input type="text" name="country" value={props.country}/>
                            </div>
                        </div>
                        <div className="bill-to-part3" onChange={props.handleChange}>
                            <div className="invoice-date-div">
                                <label htmlFor="">Invoice Date</label>
                                <input type="date" name="createdAt" value={props.createdAt} />
                            </div>
                            <div>
                                <label htmlFor="">Payment Terms</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="bill-form-part1" onChange={props.handleChange}>
                            <label htmlFor="">Project Description</label>
                            <input className="street-address-input" type="text" name="description" value={props.description}/>
                    </div>
                    <div className="form-item-list">
                        <div className="form-item-list-title">Item List</div>
                        <div className="form-item-list-lbls">
                            <div className="item-list-name desktop-only">Item Name</div>
                            <div className="item-list-qty">Qty.</div>
                            <div className="item-list-price">Price</div>
                            <div className="item-list-total">Total</div>
                        </div>
                        <div className="form-item-list-lbls" handleChangeItems={props.handleChangeItems}>
                            <input type="text" className="item-list-name desktop-only" name="name" value={props.name}/>
                            <input type="text" className="item-list-qty" name="quantity" value={props.quantity} />
                            <input type="text" className="item-list-price" name="price" value={props.price}/>
                            <label className="item-list-total item-list-total-preview" name="total" value={props.quantity * props.price}/>
                        </div>
                        <div className="form-item-list-addBtn">+Add New Item</div>
                        <div className="form-item-list-btns">
                            <div className="discard-btn" onClick={props.closeNewInvoiceModal}>Discard</div>
                            <div className="draft-send-btns">
                                <div className="save-as-draft">Save as Draft</div>
                                <div className="save-and-send" onClick={((e)=>{props.handleSubmit(e);props.closeNewInvoiceModal();})}>Save &amp; Send</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ModalNewInvoice;