import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./editData.css";

const EditData = ({ id, handleCloseChange, data }) => {
  const [addData, setData] = useState({
    cell_1: id,
    banner: "",
    cell_2: "",
    content: "",
    date: "Date",
  });

  const handleChangeText = (id, e) => {
    id === 1
      ? setData((prevState) => ({ ...prevState, cell_2: e.target.value }))
      : setData((prevState) => ({ ...prevState, content: e.target.value }));
  };
  const handleFileSelect = (e) => {
    setData((prevState) => ({ ...prevState, banner: e.target.files[0].name }));
  };

  const handleSubmit = () => {
    data[id - 1] = addData;
    handleCloseChange();
  };
  return (
    <>
      <Box className="title1">
        <span className="clickable-word" onClick={handleCloseChange}>
          НОВОСТИ
        </span>{" "}
        / РЕДАКТИРОВАНИЕ
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
          Сохранить
        </Button>
      </Box>
    </>
  );
};

export default EditData;
