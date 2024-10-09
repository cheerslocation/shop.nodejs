import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">Nos catégories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="/category_Chaise.webp" alt="Categorie Chaises" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            Chaises
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="/category_tables.webp" alt="Shop women" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            Tables 
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="/category_fauteuils.webp" alt="Shop kids" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            Fauteuils
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
