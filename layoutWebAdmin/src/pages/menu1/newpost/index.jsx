import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  AppBar,
  Toolbar,
  Typography,
  Menu,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [content, setContent] = useState("");

  // Menubar state
  const [anchorElFile, setAnchorElFile] = useState(null);
  const [anchorElEdit, setAnchorElEdit] = useState(null);
  const [anchorElInsert, setAnchorElInsert] = useState(null);
  const [anchorElFormat, setAnchorElFormat] = useState(null);
  const [anchorElTools, setAnchorElTools] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 2 }}>
      {/* Dòng nhập thông tin */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Tiêu đề"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ flex: 4 }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Chọn ngày đăng"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            slotProps={{ textField: { fullWidth: true } }}
            sx={{ flex: 1 }}
          />
        </LocalizationProvider>
        <FormControl sx={{ flex: 1, minWidth: 120 }}>
          <InputLabel id="category-select-label">Thể loại</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            label="Thể loại"
            onChange={handleCategoryChange}
          >
            <MenuItem value="news">Tin tức</MenuItem>
            <MenuItem value="tech">Công nghệ</MenuItem>
            <MenuItem value="lifestyle">Phong cách sống</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">+Tạo bài</Button>
      </Box>

      {/* Menubar thả xuống */}
      <Box sx={{ mt: 3 }}>
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar variant="dense">
            {/* File */}
            <Typography
              variant="body1"
              sx={{ mr: 3, cursor: "pointer" }}
              onClick={handleMenuOpen(setAnchorElFile)}
            >
              File
            </Typography>
            <Menu
              anchorEl={anchorElFile}
              open={Boolean(anchorElFile)}
              onClose={handleMenuClose(setAnchorElFile)}
            >
              <MenuItem onClick={() => alert("New File")}>New</MenuItem>
              <MenuItem onClick={() => alert("Open File")}>Open</MenuItem>
              <MenuItem onClick={() => alert("Save File")}>Save</MenuItem>
            </Menu>

            {/* Edit */}
            <Typography
              variant="body1"
              sx={{ mr: 3, cursor: "pointer" }}
              onClick={handleMenuOpen(setAnchorElEdit)}
            >
              Edit
            </Typography>
            <Menu
              anchorEl={anchorElEdit}
              open={Boolean(anchorElEdit)}
              onClose={handleMenuClose(setAnchorElEdit)}
            >
              <MenuItem onClick={() => alert("Undo")}>Undo</MenuItem>
              <MenuItem onClick={() => alert("Redo")}>Redo</MenuItem>
              <MenuItem onClick={() => alert("Cut")}>Cut</MenuItem>
              <MenuItem onClick={() => alert("Copy")}>Copy</MenuItem>
              <MenuItem onClick={() => alert("Paste")}>Paste</MenuItem>
            </Menu>

            {/* Insert */}
            <Typography
              variant="body1"
              sx={{ mr: 3, cursor: "pointer" }}
              onClick={handleMenuOpen(setAnchorElInsert)}
            >
              Insert
            </Typography>
            <Menu
              anchorEl={anchorElInsert}
              open={Boolean(anchorElInsert)}
              onClose={handleMenuClose(setAnchorElInsert)}
            >
              <MenuItem onClick={() => alert("Insert Image")}>Image</MenuItem>
              <MenuItem onClick={() => alert("Insert Table")}>Table</MenuItem>
              <MenuItem onClick={() => alert("Insert Link")}>Link</MenuItem>
            </Menu>

            {/* Format */}
            <Typography
              variant="body1"
              sx={{ mr: 3, cursor: "pointer" }}
              onClick={handleMenuOpen(setAnchorElFormat)}
            >
              Format
            </Typography>
            <Menu
              anchorEl={anchorElFormat}
              open={Boolean(anchorElFormat)}
              onClose={handleMenuClose(setAnchorElFormat)}
            >
              <MenuItem onClick={() => alert("Bold")}>Bold</MenuItem>
              <MenuItem onClick={() => alert("Italic")}>Italic</MenuItem>
              <MenuItem onClick={() => alert("Underline")}>Underline</MenuItem>
            </Menu>

            {/* Tools */}
            <Typography
              variant="body1"
              sx={{ mr: 3, cursor: "pointer" }}
              onClick={handleMenuOpen(setAnchorElTools)}
            >
              Tools
            </Typography>
            <Menu
              anchorEl={anchorElTools}
              open={Boolean(anchorElTools)}
              onClose={handleMenuClose(setAnchorElTools)}
            >
              <MenuItem onClick={() => alert("Spell Check")}>
                Spell Check
              </MenuItem>
              <MenuItem onClick={() => alert("Word Count")}>
                Word Count
              </MenuItem>
            </Menu>
            <Button variant="contained" sx={{ marginLeft: "auto" }}>
              Preview
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* CKEditor */}
      <Box
        sx={{
          mt: 3,
          "& .ck-editor__editable_inline": {
            minHeight: "400px", // hoặc 600px, 800px tuỳ bạn
          },
        }}
      >
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "insertTable",
              "|",
              "undo",
              "redo",
            ],
          }}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />
      </Box>

      {/* Nút back */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
}

export default NewPost;
