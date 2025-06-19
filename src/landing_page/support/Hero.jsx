import React from "react";
function Hero() {
  return (
    <div className="container-fluid mt-5" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <button className="btn-a">Track Tickets</button>
      </div>

      <div clbuttonssName="row p-5 m-3 ">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected" 
          />
          <br />
          <button className="btn-a">Track account opening</button>&nbsp;&nbsp;
          <button className="btn-a">Track segment activation</button>&nbsp;&nbsp;
          <button className="btn-a">Intraday margins</button>&nbsp;&nbsp;
          <button className="btn-a">Kite user manual</button>&nbsp;&nbsp;
        </div>

        
        <div className="col-6 p-5">
        <h1 className="fs-3">Featured</h1>
        <ol>
          <li>
            <button className="btn-a">Current Takeovers and Delisting - January 2024</button>
          </li>
          <li>
            <button className="btn-a">Latest Intraday leverages - MIS & CO</button>
          </li>
        </ol>
        </div>
      </div>
     </div>
  );
}

export default Hero;
