import React from 'react'
function RightSection({
    productName,
    productDescription,
    learnMore,
    imageURl
}) {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-6" style={{marginTop: "150px"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}><b>Learn More <i className='fa fa-long-arrow-right'></i></b></a>
                </div>
                <div className="col-6">
                    <img src={imageURl}  />
                </div>
            </div>
        </div>
    );
}

export default RightSection;