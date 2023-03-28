import React from "react";
import TableComponent from "../components/table";
import { applications } from "../data";

const Applications = () => {
  const ROWS_PER_PAGE = 4;
  const countItems = applications.length;
  const totalPages = Math.ceil(countItems / ROWS_PER_PAGE);

  return (
    <TableComponent
      title="ЗАЯВКИ"
      header_1="ИМЯ"
      header_2="ТЕЛЕФОН"
      header_3="НАЗВАНИЕ"
      items={applications}
      totalPages={totalPages}
      countItems={countItems}
      ROWS_PER_PAGE={ROWS_PER_PAGE}
    />
  );
};

export default Applications;
