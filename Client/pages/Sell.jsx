const Sell = ()=>{
    return<>
   <form>
    <div className="sellmainhead">
    <span >List Your Property With Us</span>
    </div>
    <div className="sellbox">
        <div className="OwnerName  sellspecbox">
            <span className="sellhead">Owner Name:-</span>
            <input type="text" required/>
        </div>
        <div className="Ownercontact sellspecbox">
            <span className="sellhead">Owner contact:-</span>
            <input type="number" required/>
        </div>
        <div className="OwnerEmail sellspecbox">
            <span className="sellhead">Owner Emial:-</span>
            <input type="Emial" required/>
        </div>
        <div className="selllocation sellspecbox">
            <span className="sellhead">Enter property location:-</span>
            <input type="text" required/>
        </div>
        <div className="selllocation sellspecbox">
            <span className="sellhead">Enter property city Name:-</span>
            <input type="text" required/>
        </div>
        <div className="sellSpec sellspecbox">
            <span className="sellhead">Enter property specification:-</span>
            <input type="text" required/>
        </div>
        <div className="selldetailed sellspecbox">
            <span className="sellhead">Enter property Detailed:-</span>
            <input type="text" required/>
        </div>
        <div className="sellproproom sellspecbox">
            <span className="sellhead">Enter Rooms number:-</span>
            <select required
                                name="proproom"
                            >
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="6+">6+</option>
                            </select>
        </div>
        <div className="sellpropfor sellspecbox">
            <span className="sellhead">Property For:-</span>
            <select required>
                <option>Sell</option>  
                <option>Buy</option>
            </select>
        </div>
        <div className="sellprice sellspecbox">
            <span className="sellhead">Enter selling price:-</span>
            <input type="number" required/>
        </div>
        <div className="sellimage sellspecbox">
            <span className="sellhead">Add property Image:-</span>
        <input type="file" id="files" name="files" multiple required/>
        </div>
        <div className="sellsubbtn">
            <button>Submit</button>
        </div>
    </div>
   </form>
    </>
}
export default Sell;