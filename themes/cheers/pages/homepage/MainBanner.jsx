import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-1 gap-2">
        <div className="text-center md:text-center px-2 text-white ">
          <h2 className="h1">Location de mobilier de réception</h2>
          <p>Cheers location vous accompagne dans l'organisation de vos évènements</p>
          <p></p>
          {/* <a className="button button-primary" href="#">
            SHOW NOW
          </a> */}
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
