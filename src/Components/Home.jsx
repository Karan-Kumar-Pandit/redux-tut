import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-card">
        <img src="assets/images/bucket.png" alt="" />
      </div>
      <h1>Home Components</h1>
      <div className="card-wrapper">
        <div className="img-wrapper item">
          <img src="assets/images/mobile.png" alt="" />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $50000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button>Add To Cart </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
