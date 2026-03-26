import React from "react";
import dimg from '../Assests/image.png';


function ImgGen(){
    return(
        <div className="img-gen">
          <div className="img-head">
             AI image <span>generator</span>
             <div className="img-loading">
               <div className="image">
                   <img src={dimg} alt="AIImage"/>
               </div>

             </div>
            </div>
            <div id="search">
                <input type="text"  className="form-control me-2" placeholder="Describe what you want to say ?" />
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    );
}
export default ImgGen;