import React from "react";
import errorImg from "../assets/error.svg";


function Error() {

  return (
    <div>
      <img src={errorImg} alt="error_image" width="300px" />
      <h1>404 Not Found</h1>
    </div>
  );
}

export default Error;
