const IDCard = (props) => {
    // this is where my cards will go
    return ( 
        <div className="wrapper text-white mx-2">
            <div className="card"> {/* cards!!! */}
                <img className="card-img-top img-resize" src={props.iimage} alt="Title"/> {props.ititle} {/* this is for the title*/}
                <div className="card-body">
                    <h5 className="card-title"> {props.iname}</h5>
                    <p className="card-text">{props.idesc}</p>
                </div>
                <div className="card-footer text-muted"> {/* added a card footer so the view recipe button is aligned well*/}
                    <button className ="card-btn"> View Recipe</button> {/*need help putting recipe at bottom  */}
                </div>
            </div>
        </div>
        
     );
}
 
export default IDCard;