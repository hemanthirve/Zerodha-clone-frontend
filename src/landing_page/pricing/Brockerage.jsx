import React from 'react'
function Brokerage() {
    return ( 
       <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
            <div className="col-8 p-4">
                <button className='btn-a' style={{textDecoration: "none"}}>
                    <h3 className='fs-5'>Brokerage calculator</h3></button>
                    <ul style={{textAlign: "left", lineHeight:"2.5", fontSize:"14px"}} className='text-muted '>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of 50 + GST per order </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (PSI), 0.5% or &#8377;200 per executed order for equity (whichover is lower).</li>
                        <li>If the account is in debit balance, and order placed wil be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
                    </ul>
                
            </div>
            <div className='col-4 p-4'>
            <button className='btn-a' style={{textDecoration: "none"}}>
            <h3 className='fs-5'>List of charges</h3></button>
            </div>
        </div>
       </div>
     );
}

export default Brokerage;