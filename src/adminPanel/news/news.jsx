import React from "react";
import "./news.css";
import "../main/main.css";
import TableComponent from "../components/table";
import { news } from "../data";

const ROWS_PER_PAGE = 4;

const News = () => {
  const countItems = news.length;
  const totalPages = Math.ceil(countItems / ROWS_PER_PAGE);

  return (
    <TableComponent
      title="НОВОСТИ"
      header_1="ID"
      header_2="ЗАГОЛОВОК"
      header_3="ДЕЙСТВИЯ"
      items={news}
      totalPages={totalPages}
      countItems={countItems}
      ROWS_PER_PAGE={ROWS_PER_PAGE}
    />
  );
};

export default News;
