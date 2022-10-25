// hiển thị danh sách công việc & số lượng các công việc cần hoàn thành
// thêm mới 1 công việc cần làm thông qua nhập vào form.
// Đánh dấu 1 công việc đã hoàn thành
// Xóa 1 công việc
// Xóa hết công việc
// Lọc theo trạng thái

function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}

let todos = [
  {
    id: createId(),
    title: "Làm bài tập",
    status: true,
  },
  {
    id: createId(),
    title: "Chơi với bạn bè",
    status: false,
  },
  {
    id: createId(),
    title: "Sang nhà chị thăm người ốm",
    status: true,
  },
];
const todosList = document.querySelector(".todos");
const btnAdd = document.querySelector(".btn-add");
const inputAdd = document.querySelector(".add-input");
const txtError = document.querySelector(".error");
const pending = document.querySelector(".pending");
const clearAll = document.querySelector(".btn-clear");

const filterAll = document.querySelector("#all");
const filterActive = document.querySelector("#active");
const filterCompleted = document.querySelector("#completed");

{
  /*  <div class="todo-item">
        <div class="todo-content">
          <input type="checkbox">
          <span class="todo-title">Học HTML/CSS</span>
        </div>
        <button class="btn btn-remove">Remove</button>
      </div> 
                */
}
function createTodo(todo) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoContent = document.createElement("div");
  todoContent.classList.add("todo-content");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("check");
  input.value = todo.id;

  const spanTitle = document.createElement("span");
  spanTitle.classList.add("todo-title");
  spanTitle.innerText = todo.title;

  todoContent.appendChild(input);
  todoContent.appendChild(spanTitle);
  if (todo.status) {
    todoItem.classList.add("active-todo");
    input.checked = true;
  }

  // Pending
  pending.innerText = `có tất cả ${todosList.childElementCount + 1} công việc!`;

  // checked todo
  input.addEventListener("click", () => {
    if (input.checked) {
      input.status = true;
      todoItem.classList.add("active-todo");
    } else {
      input.status = false;
      todoItem.classList.remove("active-todo");
    }
  });

  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-remove");
  btn.innerText = "Remove";

  // xóa 1 todo
  btn.addEventListener("click", () => {
    todoItem.remove();
    pending.innerText = `Có tất cả ${todosList.childElementCount} công việc!`;
  });

  // Xóa toàn bộ todo
  clearAll.addEventListener("click", () => {
    todoItem.remove();
    pending.innerText = `Hiện tại không có công việc nào trong danh sách!`;
  });

  // filter todo

  filterAll.addEventListener("click", () => {
    todoItem.style.display = "";
    pending.innerText = `Có tất cả ${todosList.childElementCount} công việc!`;
  });

  filterActive.addEventListener("click", () => {
    if (filterActive.checked) {
      if (input.checked) {
        todoItem.style.display = "none";
      } else {
        todoItem.style.display = "";
        // pending.innerText = `Có tất cả ${todosList.childElementCount} chưa hoàn thành công việc!`;
      }
    }
  });

  filterCompleted.addEventListener("click", () => {
    if (filterCompleted.checked) {
      if (input.checked == false) {
        todoItem.style.display = "none";
      } else {
        todoItem.style.display = "";
        // pending.innerText = `Có tất cả ${todosList.childElementCount} chưa hoàn thành công việc!`;
      }
    }
  });

  todoItem.append(todoContent, btn);
  // todoItem.appendChild(btn);

  return todoItem;
}

// for (let todo of todos) {
//   todosList.append(createTodo(todo));
// }

btnAdd.addEventListener("click", () => {
  let todoTitle = inputAdd.value.trim();
  todoTitle =
    todoTitle.charAt(0).toUpperCase() + todoTitle.slice(1).toLowerCase();

  if (todoTitle == "") {
    txtError.innerText = "Giá trị nhập vào không được bỏ trống!";
    txtError.style.display = "inline-block";
    inputAdd.value = "";
  } else {
    txtError.style.display = "";
    let newTodo = {
      id: createId(),
      title: todoTitle,
      status: false,
    };
    inputAdd.value = "";
    todos.push(newTodo);
    todosList.append(createTodo(newTodo));
  }
});

function render() {
  todos.forEach((todo) => {
    const todoItem = createTodo(todo);
    return todosList.appendChild(todoItem);
  });

  // todos.forEach((todo) => {
  //   const todoItem = createTodo(todo);
  //   return todosList.appendChild(todoItem);
  // });
}

render();
