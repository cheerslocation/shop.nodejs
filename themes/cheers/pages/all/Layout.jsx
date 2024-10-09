import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <div className="header">
        <div className="page-width flex justify-between">
          <Area
            id="header"
            noOuter
            coreComponents={[
              {
                component: { default: Area },
                props: {
                  id: "icon-wrapper",
                  className: "icon-wrapper flex justify-between space-x-1",
                },
                sortOrder: 20,
              },
            ]}
          />
        </div>
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div>
          <div className="page-width grid grid-cols-1 md:grid-cols-3 gap-2 justify-between">
            <div className="self-left">
              <span className="text-textSubdued h3 underline" >Nos locaux</span>
              <span><br></br>2 avenue du montboulon</span>
              <span><br></br>77165 Saint Soupplets</span>
              <span className="text-warning"><br></br>Sur Rendez Vous uniquement</span>
              <img class="lazyloaded" decoding="async" src="https://www.saint-soupplets.fr/images/logob.png" data-orig-src="https://www.saint-soupplets.fr/images/logob.png" alt="logo saint soupplets"></img>
            </div>  
            <div className="self-center">
              
            </div> 
            <div className="self-right">
              <span className="text-textSubdued h3 underline" >Informations Légales</span>
              <span><br></br>Mentions Légales</span>
              <span><br></br>Conditions Générales de Location</span>
              <span><br></br>Politique de confidentialité</span>
              
            </div>            
          </div> 
          <div>
            <div className="self-center">
                <div className="copyright text-center md:text-center text-textSubdued">
                  <span>Copyright © 2024 Cheers Location</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const layout = {
  areaId: "body",
  sortOrder: 1,
};
