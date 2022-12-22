// đọc express và request
const express = require("express");

// link require path
const path = require("path");

// nối các tham số bằng đường dẫn path
// đang được thực thi, bằng đường dẫn tuyệt đối.
let initial_path = path.join(__dirname, "public");

// khai báo thư mục chứa tập tin tĩnh
let app = express();
app.use(express.static(initial_path));

// get routes to homepage(("/") get default (index.html))
app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "index.html"));
});

// get routes = id
app.get("/:id", (req, res) => {
  res.sendFile(path.join(initial_path, "about.html"));
});

// get routing pages without will return 404
app.use((req, res) => {
  res.json("404");
});

// Khởi động sever = hàm listen(), port = 2000.
app.listen(2000, () => {
  console.log("listening on port 2000...");
});
