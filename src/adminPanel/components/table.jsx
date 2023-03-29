import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AddData from "./addData";
import Buttons from "./buttons";
import EditData from "./editData";
import "../news/news.css";

const TableComponent = ({
  title,
  header_1,
  header_2,
  header_3,
  items,
  totalPages,
  countItems,
  ROWS_PER_PAGE,
}) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(items);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [dataId, setDataId] = useState(null);
  const [textField, setTextField] = useState("");

  //рендер количества строк
  const news1 = useMediaQuery({ maxWidth: 1112 });
  const news2 = useMediaQuery({ maxWidth: 1000 });
  const news3 = useMediaQuery({ maxWidth: 681 });
  const products1 = useMediaQuery({ maxWidth: 1112 });
  const products2 = useMediaQuery({ maxWidth: 1000 });
  const products3 = useMediaQuery({ maxWidth: 830 });
  const products4 = useMediaQuery({ maxWidth: 681 });
  if (news1 && title === "НОВОСТИ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE - 1;
  }
  if (news2 && title === "НОВОСТИ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE + 1;
  }
  if (news3 && title === "НОВОСТИ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE - 1;
  }
  if (products1 && title === "ТОВАРЫ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE - 1;
  }
  if (products2 && title === "ТОВАРЫ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE + 1;
  }
  if (products3 && title === "ТОВАРЫ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE + 1;
  }
  if (products4 && title === "ТОВАРЫ") {
    ROWS_PER_PAGE = ROWS_PER_PAGE - 1;
  }

  //обрезка на страницы таблички
  const startIndex = page * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleCloseChange = () => {
    setIsEdit(false);
  };
  const handleOpenChange = (id) => {
    setDataId(id);
    setIsEdit(true);
  };
  const handleCloseAdd = () => {
    setIsAdd(false);
  };
  const handleOpenAdd = () => {
    setIsAdd(true);
  };

  const handleDelete = (setData, id) => {
    if (title === "ЗАЯВКИ") {
      setData((prevState) => prevState.filter((n) => n.id !== id));
    } else {
      setData((prevState) => prevState.filter((n) => n.cell_1 !== id));
    }
  };
  const handleSearch = (e) => {
    const text = e.target.value;
    setTextField(text);
  };
  const handleClickRow = (rowId) => {};

  return (
    <>
      {isEdit ? (
        <EditData
          id={dataId}
          data={data}
          handleCloseChange={handleCloseChange}
        />
      ) : isAdd ? (
        <AddData data={data} handleCloseAdd={handleCloseAdd} />
      ) : (
        <>
          {title === "НОВОСТИ" ? (
            <Box className="news-header-box">
              <Box className="title1">{title}</Box>
              <Button
                className="news-header-btn"
                variant="text"
                onClick={handleOpenAdd}
              >
                Добавить новость
              </Button>
            </Box>
          ) : (
            <Box className="title1">{title}</Box>
          )}

          {title === "ТОВАРЫ" ? (
            <Box className="textField-box">
              <TextField
                id="filled-basic"
                label="Поиск по товарам"
                variant="filled"
                className="textField"
                value={textField}
                onChange={handleSearch}
              />
              <Button
                className="products-header-btn"
                variant="text"
                onClick={handleOpenAdd}
              >
                Добавить товар
              </Button>
            </Box>
          ) : null}

          <Box
            className={
              title === "ТОВАРЫ" ? "boxTable products-boxTable" : "boxTable"
            }
          >
            <TableContainer className="table">
              <Table aria-label="simple table" className="table-main">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      className="font-main table-border font-weight table-header"
                    >
                      {header_1}
                    </TableCell>
                    <TableCell
                      align="left"
                      className="font-main table-border font-weight table-header"
                    >
                      {header_2}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-main table-border font-weight table-header"
                    >
                      {header_3}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(startIndex, endIndex).map((n) => (
                    <TableRow
                      className="table-row table-border row-hover"
                      key={title === "ЗАЯВКИ" ? n.id : n.cell_1}
                      onClick={() =>
                        handleClickRow(title === "ЗАЯВКИ" ? n.id : n.cell_1)
                      }
                    >
                      <TableCell
                        align="center"
                        className="font-main table-cell cell-1 font-weight"
                      >
                        {n.cell_1}
                      </TableCell>

                      <TableCell
                        align="left"
                        className="font-main table-cell cell-2"
                      >
                        {n.cell_2.length <= 25
                          ? n.cell_2
                          : n.cell_2.slice(0, 24) + "..."}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={
                          title === "ЗАЯВКИ"
                            ? "font-main table-cell cell-3 name-application"
                            : "font-main table-cell cell-3"
                        }
                      >
                        {title === "ЗАЯВКИ" ? (
                          n.cell_3
                        ) : (
                          <Buttons
                            id={title === "ЗАЯВКИ" ? n.id : n.cell_1}
                            handleDelete={() =>
                              handleDelete(
                                setData,
                                title === "ЗАЯВКИ" ? n.id : n.cell_1
                              )
                            }
                            handleOpenChange={() =>
                              handleOpenChange(
                                title === "ЗАЯВКИ" ? n.id : n.cell_1
                              )
                            }
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={data.length}
                rowsPerPage={ROWS_PER_PAGE}
                page={page}
                onPageChange={handleChangePage}
                className={
                  title === "ТОВАРЫ"
                    ? "table-pagination products-pagination"
                    : "table-pagination"
                }
              />
            </TableContainer>
          </Box>
        </>
      )}
    </>
  );
};

export default TableComponent;
