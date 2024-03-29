import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}.${month}.${year}`;

const AddData = ({ data, handleCloseAdd }) => {
  const [addData, setAddData] = useState({
    cell_1: data[data.length - 1].cell_1 + 1,
    banner: "",
    cell_2: "",
    content: "",
    date: formattedDate,
  });

  const handleChangeText = (id, e) => {
    id === 1
      ? setAddData((prevState) => ({ ...prevState, cell_2: e.target.value }))
      : setAddData((prevState) => ({ ...prevState, content: e.target.value }));
  };
  const handleFileSelect = (e) => {
    setAddData((prevState) => ({
      ...prevState,
      banner: e.target.files[0].name,
    }));
  };
  const handleSubmit = () => {
    data.push(addData);
    handleCloseAdd();
  };

  return (
    <>
      <Box className="title1">
        <span className="clickable-word" onClick={handleCloseAdd}>
          НОВОСТИ
        </span>{" "}
        / ДОБАВЛЕНИЕ
      </Box>
      <Box className="input-box">
        <TextField
          className="textField-width textField"
          id="outlined-basic"
          label="Заголовок"
          variant="filled"
          inputProps={{ style: { color: "rgba(0, 0, 0, 0.6)" } }}
          value={addData.cell_2}
          onChange={(e) => handleChangeText(1, e)}
        />
        <TextField
          className="textField-width textField"
          id="outlined-multiline-static"
          label="Контент"
          variant="filled"
          multiline
          rows={4}
          inputProps={{ style: { color: "rgba(0, 0, 0, 0.6)" } }}
          value={addData.content}
          onChange={(e) => handleChangeText(2, e)}
        />

        <label htmlFor="file-upload" className="file-label">
          <input
            id="file-upload"
            type="file"
            accept=".png, .jpeg"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <Button className="btn-file btn-hover" component="span">
            {addData.banner !== "" ? addData.banner : "Выбрать изображение"}
          </Button>
        </label>
        <Button
          variant="text"
          className="btn-submit btn-hover"
          onClick={handleSubmit}
        >
          Добавить
        </Button>
      </Box>
    </>
  );
};

export default AddData;
