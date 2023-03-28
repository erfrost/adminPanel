import React from "react";
import TableComponent from "../components/table";
import { products } from "../data";

const Products = () => {
  const ROWS_PER_PAGE = 3;
  const countItems = products.length;
  const totalPages = Math.ceil(countItems / ROWS_PER_PAGE);

  return (
    <TableComponent
      title="ТОВАРЫ"
      header_1="ID"
      header_2="НАЗВАНИЕ"
      header_3="ДЕЙСТВИЯ"
      items={products}
      totalPages={totalPages}
      countItems={countItems}
      ROWS_PER_PAGE={ROWS_PER_PAGE}
    />
  );
};

export default Products;
