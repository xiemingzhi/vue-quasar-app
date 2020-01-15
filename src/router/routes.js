// quasar uses "" and paths start from src
import TodoList from "components/TodoList";
import AddTodoItem from "components/AddTodoItem";

const routes = [
  { path: "/todos", component: TodoList },
  //{ path: "/todos/add", component: AddTodoItem },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("components/TodoList.vue") },
      { path: "add", component: AddTodoItem }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
