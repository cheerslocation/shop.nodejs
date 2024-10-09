import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Retrait entrepôt Gratuit</h2>
          <p>Si vous le souhaitez, vous pouvez retirer et retourner le mobilier par vos soins à notre entrepôt de Saint Soupplets (77) du lundi au samedi de 9h à 12h et sur rendez vous uniquement. Service gratuit.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Service Livraison</h2>
          <p>Avec le forfait livraison, nous vous livrons le matériel de notre entrepôt à votre lieu de réception. Nous nous chargeons également de récupérer le matériel à la fin de la période de location. La livraison et le retour se font au pied du camion.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Service Montage</h2>
          <p>Nous nous chargeons d’acheminer le matériel du camion jusqu’au lieu de réception. Nous prenons également en charge le montage du matériel. Le service inclus le démontage à la fin de la période de location. *Nécessite de soucrire au service livraison.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
