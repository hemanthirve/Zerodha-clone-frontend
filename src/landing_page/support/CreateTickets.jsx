import React from 'react'
function CreateTicket() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5 mb-5">
          <h1 className="fs-2 ">
          To create a ticket, select a relevant topic
          </h1>
          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className=''><i className='fa fa-plus-circle'></i>Account Opening</h4>
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Getting started</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Online</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Offline</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Charges</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Company, Partnership and HUF</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Non Resident Indian (NRI)</button> <br />      
            </div>
           
          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className=''><i class="fa-regular fa-user"></i>Your Zerodha Account </h4>
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Login credentials</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Your Profile</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Account modification and segment addition</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> CMR & DP ID</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Nomination</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}>Transfer and conversion of shares</button> <br />      
            </div>

           
          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className=''><i className='category-icons icon-trading-and-platforms'></i>Trading and Markets</h4>
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Trading FAQs</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Kite</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Margins</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Product and order types</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Corporate actions</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}>Kite features</button> <br />      
           </div>
          
           <div className="col-4 p-5 mt-2 mb-2">
            <h4 className=''><i className='fa fa-plus-circle'></i>Funds</h4>
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}>Fund withdrawal</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Adding funds</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}>Adding bank accounts</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> eMandates</button><br />      
            </div>
           
          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className=''><i className='fa fa-plus-circle'></i>Console</h4>
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}>IPO</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Portfolio</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> FUnds statement</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Profile</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Reports</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Referral program</button> <br />      
            </div>

           
          <div className="col-4 p-5 mt-2 mb-2">
            <h4 className=''><i className='fa fa-plus-circle'></i>Coin</h4>
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}>Understanding mutual funds and Coin</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Coin app</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Coin web</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> Transactions and reports</button><br />
           <button className="btn-a" style={{textDecoration: "none", lineHeight:"2.5"}}> National Pension Scheme(NPS)</button><br />
                 
           </div>
          
        </div>
        </div>
        
        
     );
}

export default CreateTicket;