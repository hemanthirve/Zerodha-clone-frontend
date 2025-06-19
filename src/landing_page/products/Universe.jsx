import React from 'react'
function Universe() {
    return ( 
        <div className="container">
            <p className='text-center fs-5 mb-5 mt-5'>Want to know more about our technology stack? Check out the <button className='btn-a'>Zerodha.tech</button>  blog.</p>
            <div className="row text-center">
                <h1 className='mb-4'>The Zerodha Universe</h1>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
                

                <div className='row mt-5'>
                <div className="col-4 p-3  mt-5">
                    <img src="assets/smallcaseLogo.png"  alt='img' />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3  mt-5">
                    <img src="assets/streakLogo.png" style={{height:"52px", width:"200px"}} alt='img' />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3  mt-5">
                    <img src="assets/sensibullLogo.svg" style={{height:"52px", width:"200px"}} alt='img' />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                </div>

                <div className='row'>
                <div className="col-4 p-3  mt-5">
                    <img src="assets/zerodhaFundhouse.png" style={{height:"52px", width:"200px"}} alt='img' />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="assets/goldenpiLogo.png" style={{height:"52px", width:"200px"}} alt='img'/>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3  mt-5">
                    <img src="assets/dittoLogo.png" style={{height:"52px", width:"200px"}} alt='img'/>
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width: "20%", margin: "0 auto"}}>Signup For Free</button>
            </div>
        </div>
     );
}

export default Universe;