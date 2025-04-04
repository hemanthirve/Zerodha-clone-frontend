import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return <div className="container">
    <div className="row">
        <div className="col-6 mr-6" >
            <img src={imageURL}  />
        </div>
        
        <div className="col-6 p-5 mt-5 ">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
                <a href={tryDemo} style={{ textDecoration:"none"}}><b> Try Demo  <i className='fa fa-long-arrow-right'></i></b></a>
                <a href={learnMore} style={{marginLeft: "90px", textDecoration:"none"}}><b>Learn More  <i className='fa fa-long-arrow-right'></i></b></a>
            </div>
            <div className="mt-3">
                 <a href={googlePlay}><img src="assets/googlePlayBadge.svg" alt="" /></a>
                 <a href={appStore}><img src="assets/appStoreBadge.svg" style={{marginLeft: "50px"}} alt="" /></a>
            </div>
            
        </div>
        
       
    </div>
  </div>
}

export default LeftSection;
