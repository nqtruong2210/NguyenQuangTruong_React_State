import dataGlasses from "./dataGlasses.json";
import { Glasses } from "./Glasses";
import { ModelTryingOnGlasses } from "./ModelTryingOnGlasses";
import React, { useState } from "react";

export const ExcerciseGlassess = () => {
  const divBackGround = {
    backgroundImage: `url("glassesImage/bg-glasses.avif")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [glasses, setGlasses] = useState(dataGlasses[2]);

  // Hàm tryOn nhận setState
  const tryOn = (data) => {
    setGlasses(data);
  };

  return (
    <div className="img-fluid" style={divBackGround}>
      <h1 className="container text-center fw-bold mt-3 mb-3 text-danger    ">
        Try Glassess App
      </h1>
      <div className="container img-fluid">
        <div className="row">
          <div className="col-6">
            <ModelTryingOnGlasses glasses={glasses} />
          </div>
          <div className="col-6">
            <Glasses glasses={dataGlasses} tryOn={tryOn} />
          </div>
        </div>
      </div>
    </div>
  );
};
