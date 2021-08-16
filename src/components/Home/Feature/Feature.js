import React from "react";
import './Feature.css';
import baby from "../../../images/baby.png";

const Feature = () => {
  return (
    <div className="container d-flex pt-5">
      <div className="col-md-6">
        <img src={baby} alt="" className="img-fluid" />
      </div>

      <div className="col-md-6 mt-5 px-5 text-center pt-5">
        <h1 className="my-5">
          Exceptional Dental <br /> Care, on Your Terms
        </h1>
        <p className="text-secondary">
          it is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here',making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>

        <button className="btn button" id="baby-button">Learn More</button>
          
      </div>
    </div>
  );
};

export default Feature;
