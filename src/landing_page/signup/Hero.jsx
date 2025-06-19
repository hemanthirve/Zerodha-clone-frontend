import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container text-center mt-5 py-5">
        <h1 >Open a free demat & trading account online</h1>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-4" >
            <img src="assets/signup.svg" alt="" />
        </div>
        <div className="mt-3 ms-5">
            <h3>Signup now</h3>
            <p className="text-muted fw-semibold">Or track your existing application</p>
            <input type="text" placeholder="Enter your mobile number" className="px-5 py-2 w-75"/><br />
           <button className="text-while btn btn-primary w-75 px-5 mt-3">Get OTP</button>
           <p className="mt-3">By proceeding, you agree to the Zerodha <button className="btn-a">terms</button> & <button className="btn-a">privacy policy</button></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
