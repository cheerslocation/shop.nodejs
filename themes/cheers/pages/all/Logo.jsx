import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img  src="/logo_cheerslocation.webp" alt="Cheers Location" width={150} height={150} />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
