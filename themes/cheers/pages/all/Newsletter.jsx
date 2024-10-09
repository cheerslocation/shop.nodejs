import React from "react";

function Newsletter() {
  return (
    <div className="mt-[50px]">
      <div className="page-width">
        <div className="rounded p-[30px] bg-[#E0DAEE]">
          <div className="mb-3">
            <h2 className="text-center">NEWSLETTER</h2>
            <p className="text-center">
              Souscrivez à notre noewsletter pour être tenu informé!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2 ">
              <input
                className="border border-divider rounded"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="button">Souscrire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};
